# 💖 ELi 4.0 Mini Forms Site Engine

A fast, lightweight, brand-customized mini-site form platform for the **Engineering Ladies Initiative (ELi)**. 

Built with a soft white and pink frosted glassmorphism interface, it submits responses directly into **Google Sheets** via **Google Apps Script**, eliminating server hosting costs and backend maintenance.

---

## ✨ Features

- **Official ELi Brand Identity**: Embedded official ELi banner, round coral-pink logo (`#E53350`), and custom frosted glass aesthetics.
- **Exact Chairperson Copy**: Includes the welcome message (*"Hey girl, welcome to ELi!..."*) and celebration radar screen (*"YOU’RE OFFICIALLY ON OUR RADAR!"*).
- **Interactive Team Grid**: 10 clickable team boxes (*Content, Sponsorship, Marketing, Logistics, Training, Operations, Design, Quality Control, External Relations, Web Development*) with checkmark indicators.
- **R & R Google Doc Link**: Direct callout button linking to the ELi Teams Roles & Responsibilities document.
- **Faculty of Engineering Dropdown**: Includes all 9 engineering departments (*Biomedical, Chemical, Civil, Computer, Electrical, Mechanical, Metallurgical, Petroleum, Systems*) + optional non-engineering field.
- **Dual Deployment Options**:
  1. **Single-File Standalone HTML** (`form.html`): Zero dependencies, double-click to run anywhere.
  2. **React + Vite Web App**: Optimized SPA ready for Vercel/Netlify hosting.

---

## 📁 Project Structure

```
ELI/
├── form.html                # Standalone single-file HTML version (No build required)
├── index.html               # Vite React HTML entry point
├── package.json             # React, Vite, Tailwind CSS dependencies
├── vite.config.js           # Vite server configuration
├── public/                  # Brand assets
│   ├── eli-banner.png       # Official ELi top banner
│   └── eli-logo.png         # Official ELi round logo
└── src/
    ├── App.jsx              # Main React layout wrapper
    ├── index.css            # Frosted Pink Glassmorphism design system
    ├── components/
    │   ├── Navbar.jsx       # Header bar with official logo
    │   ├── FormRenderer.jsx # Main form view & success radar screen
    │   ├── TeamSelectorCard.jsx # Interactive team grid with checkmarks
    │   └── AppsScriptGuide.jsx # Google Sheets serverless setup guide
    ├── data/
    │   └── eliFormSchema.js # Form questions and copy schema
    └── utils/
        └── appsScriptGenerator.js # Code generator for Google Apps Script
```

---

## 🚀 Getting Started

### 1. Standalone Single-File Version
Simply open `form.html` in any web browser or upload it directly to any static web host.

### 2. React + Vite Development Server
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
Open **`http://localhost:3000/`** in your browser.

### 3. Production Build
```bash
npm run build
```
The production bundle will be generated inside the `dist/` directory.

---

## 📊 Connecting to Google Sheets (Serverless Setup)

1. Open your target **Google Sheet**.
2. Click **Extensions > Apps Script**.
3. Replace the contents of `Code.gs` with the following Google Apps Script snippet:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Full Name', 'Email', 'Phone', 
        'Engineering Department', 'Non-Engineering Dept', 
        'Level', 'Role', 'Teams Interested', 
        'Why Join', 'Skills', 'Previous Volunteering', 'Time Commitment'
      ]);
    }
    
    // Append row
    sheet.appendRow([
      new Date().toLocaleString("en-US", { timeZone: "Africa/Lagos" }),
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
      data.previous_volunteering || '',
      data.time_commitment || ''
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy > New deployment**.
5. Select **Web App**.
6. Set **Execute as**: `Me` and **Who has access**: `Anyone`.
7. Copy the generated Web App URL and paste it into the Webhook input box in the ELi Form app.

---

## 🌐 Deploying on Vercel

1. Push this project folder to GitHub.
2. Go to [Vercel.com](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel will automatically detect **Vite** and configure the build command (`npm run build`).
4. Click **Deploy**.
5. Map your custom domain (e.g., `forms.engineeringladies.ng/volunteer`).

---

## 💖 License & Community

Created for **Engineering Ladies Initiative (ELi)** — Empowering women in engineering to connect, grow, create, and lead.
