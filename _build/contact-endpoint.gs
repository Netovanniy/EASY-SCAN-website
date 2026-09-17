/**
 * EASY SCAN — contact form endpoint (Google Apps Script)
 * ----------------------------------------------------------------------------
 * On form submit it:
 *   1. Appends a row to a Google Sheet (tab "Leads") on your Google Drive.
 *   2. Emails the enquiry to RECIPIENT (Reply-To = the visitor).
 *   3. Sends the same enquiry as a Telegram message, if configured below.
 *
 * SETUP — standalone script (use this if "Extensions ▸ Apps Script" from the
 * Sheet fails with "Failed to create a script"):
 * ----------------------------------------------------------------------------
 * 1. Sign in to Google with ONLY the account this Sheet belongs to (sign out
 *    of any other Google accounts first — multi-login is what causes that error).
 * 2. Create the Sheet: https://sheets.new  → name it "EASY SCAN — Leads".
 *    Copy its ID from the address bar:
 *      https://docs.google.com/spreadsheets/d/<<< THIS PART IS THE ID >>>/edit
 * 3. Open https://script.new  → delete the sample → paste this whole file.
 * 4. Put the Sheet ID between the quotes on the SHEET_ID line below. Save.
 * 5. Deploy ▸ New deployment ▸ gear ▸ "Web app"
 *       Execute as     : Me
 *       Who has access : Anyone
 *    Deploy ▸ approve the permission prompt (Advanced ▸ Go to project ▸ Allow).
 * 6. Copy the Web app URL (ends with /exec) and send it back.
 *
 * (If the Sheet-bound editor DOES open for you, you can instead leave SHEET_ID
 *  empty — getActiveSpreadsheet() is used as a fallback.)
 *
 * TELEGRAM SETUP (new):
 * ----------------------------------------------------------------------------
 * 1. In Telegram, open a chat with @BotFather → send /newbot → follow the
 *    prompts (any name/username). It replies with a token that looks like
 *    <bot-id>:<35-char-token> — paste it into
 *    TELEGRAM_BOT_TOKEN below.
 * 2. Open a chat with YOUR new bot (search its @username) and send it any
 *    message, e.g. "hi" — a bot cannot message you first, you have to speak
 *    to it once.
 * 3. Visit this URL in a browser (with your real token in place):
 *      https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
 *    Find "chat":{"id":NNNNNNN, ...} in the JSON — that number is your
 *    TELEGRAM_CHAT_ID below. (For a group chat instead: add the bot to the
 *    group, send a message in the group, then read the same URL — group
 *    chat ids are negative numbers.)
 * 4. Fill in both TELEGRAM_* constants below, save, then redeploy (see
 *    "To change code later" below). Run setup() once to send a test message.
 *
 * To change code later: edit ▸ Deploy ▸ Manage deployments ▸ pencil ▸
 * Version: New version ▸ Deploy. The URL stays the same.
 */

var SHEET_ID   = '';                        // <-- paste the Google Sheet ID here
var SHEET_NAME = 'Leads';
var RECIPIENT  = 'hello@easyscan.asia';

var TELEGRAM_BOT_TOKEN = '';                // <-- paste the @BotFather token here
var TELEGRAM_CHAT_ID   = '';                // <-- paste your chat id here (see TELEGRAM SETUP above)

function doPost(e) {
  try {
    var data = (e && e.parameter) ? e.parameter : {};
    if ((!data || !Object.keys(data).length) && e && e.postData && e.postData.contents) {
      try { data = JSON.parse(e.postData.contents); } catch (err) {}
    }

    var name     = String(data.name     || '').trim();
    var email    = String(data.email    || '').trim();
    var location = String(data.location || '').trim();
    var area     = String(data.area     || '').trim();
    var message  = String(data.message  || '').trim();

    if (!name || !email) {
      return json({ ok: false, error: 'Missing name or email' });
    }

    getSheet_().appendRow([new Date(), name, email, location, area, message]);

    var body =
      'New enquiry from the EASY SCAN website\n\n' +
      'Name: '          + name + '\n' +
      'Email: '         + email + '\n' +
      'Land location: ' + (location || '-') + '\n' +
      'Approx. area: '  + (area || '-') + '\n\n' +
      'Message:\n' + (message || '-');

    MailApp.sendEmail({
      to: RECIPIENT,
      subject: 'Website enquiry - ' + name,
      body: body,
      replyTo: email
    });

    sendTelegram_(body);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet() {
  return json({ ok: true, status: 'EASY SCAN contact endpoint is live' });
}

/**
 * Run this ONCE from the editor (select "setup" ▸ Run) right after pasting the
 * code and filling in SHEET_ID. It forces Google to ask for the Sheets + Gmail
 * permissions that doPost needs. Approve the prompt. It also writes one test row
 * and sends one test email so you can confirm both work. Then (re)deploy.
 */
function setup() {
  getSheet_().appendRow([new Date(), 'setup test', 'setup@example.com', '-', '-', 'setup() ran OK']);
  MailApp.sendEmail({
    to: RECIPIENT,
    subject: 'EASY SCAN form — setup test',
    body: 'If you can read this, the contact endpoint can send mail.'
  });
  sendTelegram_('EASY SCAN form — setup test. If you can read this, the contact endpoint can send Telegram messages.');
  return 'OK — check the Leads tab, ' + RECIPIENT + ' and Telegram.';
}

/**
 * Sends a plain-text Telegram message via the Bot API. Silently does nothing
 * if TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID are not filled in, and never throws
 * (a Telegram outage must not stop the email/Sheet from working).
 */
function sendTelegram_(text) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  try {
    UrlFetchApp.fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: '📩 New EASY SCAN website enquiry\n\n' + text
      }),
      muteHttpExceptions: true
    });
  } catch (err) {
    // ignore — Telegram is a best-effort extra channel, not the primary path
  }
}

function getSheet_() {
  var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Land location', 'Approx. area', 'Message']);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
