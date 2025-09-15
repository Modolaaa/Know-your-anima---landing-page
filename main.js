const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_btn.next');
const prevButton = document.querySelector('.carousel_btn.prev');

let currentIndex = 0;

function updateCarousel(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slides.length) nextIndex = 0; // vuelve al inicio
  updateCarousel(nextIndex);
});

prevButton.addEventListener('click', () => {
  let prevIndex = currentIndex - 1;
  if (prevIndex < 0) prevIndex = slides.length - 1; // vuelve al final
  updateCarousel(prevIndex);
});

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    // cerrar otros abiertos
    document.querySelectorAll(".faq-answer").forEach((faq) => {
      if (faq !== answer) faq.style.maxHeight = null;
    });

    // toggle actual
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
