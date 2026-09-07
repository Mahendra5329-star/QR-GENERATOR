# QR User Data Generator

A simple real-time QR code generator using user-entered data.

## Features

- QR code updates instantly while typing
- Full name, email, phone, company/college, role, website, and extra information
- Download QR as PNG
- Clear form
- Responsive design
- No backend required
- User data stays in the browser

## Run

### Easiest method

Open `index.html` in Chrome, Edge, or another modern browser.

### Recommended local server

If you have VS Code:

1. Open the `qr-user-data-generator` folder.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

The app will open in your browser.

## How real-time generation works

Every input field listens for the `input` event. Whenever a value changes, `generateQR()` rebuilds the text and creates a new QR code immediately.

## Dependency

The project loads QRCode.js from jsDelivr:

`https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js`

Internet access is required when first loading the library through the CDN.

## Mobile UI

The latest CSS includes a mobile-first layout optimized for phones, touch controls, small screens, safe-area insets, and compact QR presentation.
