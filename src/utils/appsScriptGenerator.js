/**
 * Generates ready-to-copy Google Apps Script (.gs) code for a given form schema.
 */
export function generateAppsScriptCode(formSchema) {
  return `/**
 * Google Apps Script for: ELi 4.0 Volunteer Application
 * Organization: Engineering Ladies Initiative (ELi)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    // Auto-create column headers on first submission
    if (sheet.getLastRow() === 0) {
      var headers = [
        'Timestamp', 'Full Name', 'Email', 'Phone', 
        'Engineering Department', 'Non-Engineering Dept', 
        'Level', 'Role', 'Teams Interested', 
        'Why Join', 'Skills', 'Proof of Work / Links', 'Previous Volunteering', 'Time Commitment'
      ];
      sheet.appendRow(headers);
      
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#E53350");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    var timestamp = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
    
    var rowValues = [
      timestamp,
      data.full_name || '',
      data.email || '',
      data.phone || '',
      data.engineering_dept || '',
      data.non_engineering || '',
      data.level || '',
      data.role || '',
      data.teams_interested || '',
      data.why_join || '',
      data.skills || '',
      data.proof_of_work || '',
      data.previous_volunteering || '',
      data.time_commitment || ''
    ];
    
    sheet.appendRow(rowValues);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
`;
}
