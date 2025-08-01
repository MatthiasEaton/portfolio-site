// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//  Toggle nav color on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav-container');
  const darkSection = document.querySelector('.projects-section'); // or any dark section selector
  const darkSectionTop = darkSection.offsetTop;
  const scrollY = window.scrollY;

  if(scrollY >= darkSectionTop - 80) {
    nav.classList.add('dark-bg');
  } else {
    nav.classList.remove('dark-bg');
  }
});
