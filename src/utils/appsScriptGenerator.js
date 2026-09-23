/**
 * Generates ready-to-copy Google Apps Script (.gs) code for a given form schema.
 */
export function generateAppsScriptCode(formSchema) {
  // Extract all fields across all sections
  const allFields = [];
  if (formSchema.sections) {
    formSchema.sections.forEach(section => {
      if (section.fields) {
        section.fields.forEach(field => {
          allFields.push({
            id: field.id,
            label: field.label || field.id
          });
        });
      }
    });
  }

  const columnHeaders = ['Timestamp', ...allFields.map(f => f.label.replace(/'/g, "\\'"))];
  const fieldKeysMapping = allFields.map(f => `    data['${f.id}'] || ''`).join(',\n');

  return `/**
 * Google Apps Script for: ${formSchema.title || 'ELi Mini Form'}
 * Created for: ${formSchema.organization || 'Engineering Ladies Initiative'}
 * 
 * INSTRUCTIONS:
 * 1. Open your target Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code in Code.gs with this snippet.
 * 4. Click 'Deploy' > 'New deployment'.
 * 5. Select type 'Web App'.
 * 6. Set "Execute as" -> "Me"
 * 7. Set "Who has access" -> "Anyone" (IMPORTANT!)
 * 8. Copy the Web App URL and paste it in your ELi Mini Form settings.
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    // Parse JSON payload or form parameter input
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    // Check if headers need to be created (Row 1)
    if (sheet.getLastRow() === 0) {
      var headers = ${JSON.stringify(columnHeaders, null, 2)};
      sheet.appendRow(headers);
      
      // Style headers row
      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground("#6D28D9");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setFontWeight("bold");
    }
    
    // Build row values matching column order
    var timestamp = new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" });
    
    var rowValues = [
      timestamp,
${fieldKeysMapping}
    ];
    
    // Append entry to sheet
    sheet.appendRow(rowValues);
    
    // Return CORS-enabled JSON response
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'success',
        message: 'Form response successfully recorded!',
        row: sheet.getLastRow()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: 'error',
        error: err.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', app: '${formSchema.title}' }))
    .setMimeType(ContentService.MimeType.JSON);
}
`;
}
