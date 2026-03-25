export function initContactForm(closeModal?: () => void) {
  const contactForm = document.getElementById("contactForm") as HTMLFormElement | null;
  const contactToast = document.getElementById("contactToast");

  if (contactForm && contactToast) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = (document.getElementById("contactName") as HTMLInputElement).value.trim();
      const email = (document.getElementById("contactEmail") as HTMLInputElement).value.trim();
      const message = (document.getElementById("contactMessage") as HTMLTextAreaElement).value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
      }

      contactToast.classList.remove("hidden");
      contactToast.classList.add("show");

      setTimeout(() => {
        contactToast.classList.remove("show");
        contactToast.classList.add("hidden");
      }, 2500);

      contactForm.reset();

      if (closeModal) closeModal();
    });
  }
}