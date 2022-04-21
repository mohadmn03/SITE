//setting box
let settingBox = document.querySelector(".settings-box");
let settingButton = document.querySelector(".iconCon");
let settingIcon = document.querySelector(".iconCon .stng");
settingButton.addEventListener("click", (event) => {
  settingIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
});
//switch colors
let colorLis = document.querySelectorAll(".colors-list li");
if (window.localStorage.getItem("color")) {
  //set color from local storage
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("color")
  );
  //remve active class
  colorLis.forEach((colorLi) => {
    colorLi.classList.remove("active");
  });
  //add active class form local storage
  document.querySelector(
    `[data-color = "${window.localStorage.getItem("color")}"]`
  ).className = "active";
}
//before manage the local storage
colorLis.forEach((colorLi) => {
  colorLi.addEventListener("click", (event) => {
    colorLis.forEach((colorLi) => {
      colorLi.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
    let currentColor = event.currentTarget.dataset.color;
    document.documentElement.style.setProperty("--main-color", currentColor);
    //local storage
    window.localStorage.setItem("color", currentColor);
  });
});
//random backgrounds
let choixButtons = document.querySelectorAll(".option-box span");
let backgroundOption = true;
let backgroundInterval;
if (window.localStorage.getItem("button")) {
  choixButtons.forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`[class = "${window.localStorage.getItem("button")}"]`)
    .classList.add("active");
  //random backgrounds options
  if (window.localStorage.getItem("button") === "no") {
    backgroundOption = false;
    clearInterval(backgroundInterval);
  } else {
    backgroundOption = true;
    randomizeImgs();
  }
}
//before manage the local storage
choixButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    choixButtons.forEach((button) => {
      button.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
    window.localStorage.setItem("button", event.currentTarget.classList[0]);
    // random backgrounds options
    if (event.currentTarget.classList[0] === "no") {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    } else {
      backgroundOption = true;
      randomizeImgs();
    }
  });
});
//end setting box
//landing page backgrounds
let landingPage = document.querySelector(".landing-page");
let numbers = [1, 2, 3, 4, 5];
// random backgrounds options
function randomizeImgs() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      let randomNumber = Math.floor(Math.random() * numbers.length);
      landingPage.style.background = `url("../imgs/background-${numbers[randomNumber]}.jpeg")`;
    }, 3000);
  }
}
//end page backgrounds
//start skills
let ourSkills = document.querySelector(".our-skills");
let skillSpan = document.querySelectorAll(".skill-progress span");
window.addEventListener("scroll", (event) => {
  let ws = window.scrollY;
  let wh = window.innerHeight;
  let osOffSetTop = ourSkills.offsetTop;
  let osOffSetHeight = ourSkills.offsetHeight;
  if (ws >= osOffSetHeight + 300) {
    skillSpan.forEach((span) => {
      span.style.width = `${span.dataset.width}`;
    });
  }
});
//end skills
