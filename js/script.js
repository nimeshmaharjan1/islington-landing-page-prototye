const servicesSection = document.querySelector(".services");
const secondImage = document.querySelector(".secondImage");
const testimonialHeading = document.querySelector(".testimonialHeading");
const testimonialHeadingTwo = document.querySelector(".testimonialHeadingTwo");
const testimonialOne = document.querySelector(".testimonialOne");
const testimonialTwo = document.querySelector(".testimonialTwo");
const stepper = document.querySelector(".stepper");
const thirdImage = document.querySelector(".third-image");
const bestExperience = document.querySelector(".best-experience");
const processHeading = document.querySelector(".process-heading");
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const scrollUpIcon = document.querySelector(".scroll-to-top");
scrollUpIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const scrollDisplay = () => {
  let scrollTopValue = document.documentElement.scrollTop;
  console.log(scrollTopValue);
  document.body.scrollTop > 600 || scrollTopValue > 600
    ? (scrollUpIcon.style.display = "block")
    : (scrollUpIcon.style.display = "none");
  if (scrollTopValue > 132) {
    servicesSection.classList.add("animate__slideInLeft");
  }
  if (scrollTopValue > 665) {
    secondImage.classList.add("animate__slideInLeft");
    bestExperience.classList.add("animate__slideInRight");
  }
  if (scrollTopValue > 1600) {
    processHeading.classList.add("animate__slideInLeft");
    thirdImage.classList.add("animate__slideInRight");
  }
  if (scrollTopValue > 1800) {
    stepper.classList.add("animate__slideInLeft");
  }
  if (scrollTopValue > 2527) {
    testimonialHeading.classList.add("animate__slideInLeft");
    testimonialHeadingTwo.classList.add("animate__slideInRight");
  }
  if (scrollTopValue > 2721) {
    testimonialOne.classList.add("animate__slideInLeft");
    testimonialTwo.classList.add("animate__slideInRight");
  }
};

window.onscroll = function () {
  scrollDisplay();
};
