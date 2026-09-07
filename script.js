const fields = [
  "name",
  "email",
  "phone",
  "company",
  "role",
  "website",
  "message"
];

const qrContainer = document.getElementById("qrcode");
const dataPreview = document.getElementById("dataPreview");
const statusEl = document.getElementById("status");
const form = document.getElementById("userForm");
const clearBtn = document.getElementById("clearBtn");
const downloadBtn = document.getElementById("downloadBtn");

let qr;

function getUserData() {
  const data = {};

  for (const id of fields) {
    const value = document.getElementById(id).value.trim();
    if (value) data[id] = value;
  }

  return data;
}

function buildText(data) {
  return Object.entries(data)
    .map(([key, value]) => {
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      return `${label}: ${value}`;
    })
    .join("\n");
}

function generateQR() {
  const userData = getUserData();
  const text = buildText(userData);

  qrContainer.innerHTML = "";

  if (!text) {
    statusEl.textContent = "Waiting for data";
    dataPreview.textContent = "Fill in the form to generate your QR code.";
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = "0.55";
    return;
  }

  qr = new QRCode(qrContainer, {
    text,
    width: 256,
    height: 256,
    colorDark: "#111827",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });

  statusEl.textContent = "UPDATED LIVE";
  dataPreview.textContent = text;
  downloadBtn.disabled = false;
  downloadBtn.style.opacity = "1";
}

fields.forEach((id) => {
  document.getElementById(id).addEventListener("input", generateQR);
});

clearBtn.addEventListener("click", () => {
  form.reset();
  generateQR();
});

downloadBtn.addEventListener("click", () => {
  const canvas = qrContainer.querySelector("canvas");
  const image = qrContainer.querySelector("img");

  let source = null;

  if (canvas) {
    source = canvas.toDataURL("image/png");
  } else if (image) {
    source = image.src;
  }

  if (!source) return;

  const link = document.createElement("a");
  link.href = source;
  link.download = "user-data-qr.png";
  document.body.appendChild(link);
  link.click();
  link.remove();
});

generateQR();
