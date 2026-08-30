/**
 * EASY SCAN — contact form endpoint (Google Apps Script)
 * ----------------------------------------------------------------------------
 * What it does when the website form is submitted:
 *   1. Appends a row to a Google Sheet (tab "Leads") on your Google Drive.
 *   2. Emails the enquiry to lidareasyscan@gmail.com (Reply-To = the visitor).
 *
 * ONE-TIME SETUP
 * ----------------------------------------------------------------------------
 * 1. Go to https://sheets.new  →  rename the file e.g. "EASY SCAN — Leads".
 * 2. Extensions ▸ Apps Script. Delete the sample code, paste this whole file,
 *    press the save icon.
 * 3. Deploy ▸ New deployment ▸ gear icon ▸ "Web app".
 *       Description : contact form
 *       Execute as  : Me
 *       Who has access : Anyone
 *    Click Deploy. Approve the permission prompt (Advanced ▸ Go to project ▸ Allow).
 * 4. Copy the "Web app URL" — it ends with /exec .
 *    Send that URL back so it can be put into the site
 *    (contact form: data-endpoint="…").
 *
 * To change the code later: edit here, then Deploy ▸ Manage deployments ▸
 * pencil ▸ Version: New version ▸ Deploy. The URL stays the same.
 */

var RECIPIENT  = 'lidareasyscan@gmail.com';
var SHEET_NAME = 'Leads';

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

    // 1) log to the sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Land location', 'Approx. area', 'Message']);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([new Date(), name, email, location, area, message]);

    // 2) email the team
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

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
