/**
 * EASY SCAN — contact form endpoint (Google Apps Script)
 * ----------------------------------------------------------------------------
 * On form submit it:
 *   1. Appends a row to a Google Sheet (tab "Leads") on your Google Drive.
 *   2. Emails the enquiry to lidareasyscan@gmail.com (Reply-To = the visitor).
 *
 * SETUP — standalone script (use this if "Extensions ▸ Apps Script" from the
 * Sheet fails with "Failed to create a script"):
 * ----------------------------------------------------------------------------
 * 1. Sign in to Google with ONLY lidareasyscan@gmail.com (sign out of any other
 *    Google accounts first — multi-login is what causes that error).
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
 * To change code later: edit ▸ Deploy ▸ Manage deployments ▸ pencil ▸
 * Version: New version ▸ Deploy. The URL stays the same.
 */

var SHEET_ID   = '';                        // <-- paste the Google Sheet ID here
var SHEET_NAME = 'Leads';
var RECIPIENT  = 'lidareasyscan@gmail.com';

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
  return 'OK — check the Leads tab and ' + RECIPIENT;
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
