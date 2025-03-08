const img = document.getElementById("img");
const text = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const Btn = document.getElementById("QRBtn");
function generateQRCode() {
  if (text.value.length > 0) {
    img.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value;
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
}

Btn.addEventListener("click", generateQRCode);
