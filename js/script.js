// script.js

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("namePopup");
  const input = document.getElementById("userNameInput");
  const saveBtn = document.getElementById("saveNameBtn");
  const nameSpan = document.getElementById("userName");

  // Popup SELALU muncul saat halaman dibuka
  popup.classList.remove("hidden");

  saveBtn.addEventListener("click", () => {
    const name = input.value.trim();

    if (name) {
      nameSpan.textContent = name;
      popup.classList.add("hidden"); // sembunyikan popup
      input.value = ""; // kosongkan input
    } else {
      input.classList.add("ring-2", "ring-red-500");
      input.placeholder = "Nama tidak boleh kosong!";
    }
  });
});


// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const previewBox = document.getElementById("previewBox");

  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const messageInput = document.getElementById("messageInput");

  const previewName = document.getElementById("previewName");
  const previewEmail = document.getElementById("previewEmail");
  const previewMessage = document.getElementById("previewMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Harap isi semua kolom sebelum mengirim!");
      return;
    }

    // Isi preview dengan data yang dikirim
    previewName.textContent = name;
    previewEmail.textContent = email;
    previewMessage.textContent = message;

    // Tampilkan preview
    previewBox.classList.remove("hidden");
    previewBox.classList.add("animate-fadeIn");

    // Reset form
    form.reset();
  });
});
