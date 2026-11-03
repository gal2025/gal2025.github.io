const year = document.getElementById("year");
year.textContent = new Date().getFullYear();


const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

if (menuToggle && menuPrincipal) {
  menuToggle.addEventListener("click", () => {
    const aberto = menuPrincipal.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
      "aria-label",
      aberto ? "Fechar menu" : "Abrir menu"
    );
  });

  menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuPrincipal.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}
