let landingPage = document.querySelector(".landing-page");
let numbers = [1, 2, 3, 4, 5];
setInterval(() => {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  landingPage.style.background = `url("../imgs/background-${numbers[randomNumber]}.jpeg")`;
  console.log(`url("../imgs/background-${numbers[randomNumber]}.jpeg")`);
}, 3000);
