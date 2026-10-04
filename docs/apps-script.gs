// Google Apps Script: saves each enquiry as a row in a Google Sheet and emails you a copy.
// Setup steps are in docs/enquiry-setup.md
const NOTIFY_EMAIL = 'yogeshwarnd.dev@gmail.com';
const HEADERS = ['Received', 'Name', 'Company', 'Phone', 'Email', 'Service', 'Budget', 'Preferred contact', 'Message', 'Page'];

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  sheet.appendRow([new Date(), d.name, d.company, d.phone, d.email, d.service, d.budget, d.contact_method, d.message, d.page]);
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: 'New Benzo enquiry from ' + (d.name || 'website'),
    body: HEADERS.slice(1).map(function (h, i) { return h + ': ' + ([d.name, d.company, d.phone, d.email, d.service, d.budget, d.contact_method, d.message, d.page][i] || ''); }).join('\n')
  });
  return ContentService.createTextOutput('ok');
}
