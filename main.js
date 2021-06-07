const toggleBtn = document.querySelector(".navbar-toggle"),
  heroSection = document.querySelector(".hero-section"),
  showLinks = document.querySelector(".navbar");

const mobileToggle = () => {
  // for (let i = 0; i < 3; i++) {
  //   toggleBtn.children[i].classList.toggle("navbar-toggle-bar-close");
  // }
  toggleBtn.classList.toggle("closed");
  heroSection.classList.toggle("hero-section-overlay");
  showLinks.classList.toggle("navbar-active");
};

toggleBtn.addEventListener("click", mobileToggle);
