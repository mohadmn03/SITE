//handle active class
function raActive(items, targetItem) {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  targetItem.classList.add("active");
}
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
  let targetColorLs = document.querySelector(
    `[data-color = "${window.localStorage.getItem("color")}"]`
  );
  //add&remove active class
  raActive(colorLis, targetColorLs);
}
//before manage the local storage
colorLis.forEach((colorLi) => {
  colorLi.addEventListener("click", (event) => {
    //add&remove active class
    raActive(colorLis, event.currentTarget);
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
  let RbuttonLs = document.querySelector(
    `[data-class = ${window.localStorage.getItem("button")}]`
  );
  //add&remove active class
  raActive(choixButtons, RbuttonLs);
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
    //add&remove active class
    raActive(choixButtons, event.currentTarget);
    window.localStorage.setItem("button", event.currentTarget.dataset.class);
    // random backgrounds options
    if (event.currentTarget.dataset.class === "no") {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    } else {
      backgroundOption = true;
      randomizeImgs();
    }
  });
});
randomizeImgs();
//reset button
let reset = document.querySelector(".reset-options");
reset.addEventListener("click", (event) => {
  window.localStorage.clear();
  window.location.reload();
});
//end setting box
//end going
//go bullets
let bullets = document.querySelectorAll(".bullet");
go(bullets);
//bullets in setting box
let bulletBox = document.querySelector(".bullets-box");
let choixBulletsButtons = document.querySelectorAll(" .bullets-box span");
if (window.localStorage.getItem("bulletsShow")) {
  let BbuttonLs = bulletBox.querySelector(
    `[data-class = "${window.localStorage.getItem("bulletsShow")}"]`
  );
  raActive(choixBulletsButtons, BbuttonLs);
  if (window.localStorage.getItem("bulletsShow") === "no") {
    bullets[0].parentElement.style.display = "none";
  }
}
choixBulletsButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    raActive(choixBulletsButtons, event.currentTarget);
    window.localStorage.setItem(
      "bulletsShow",
      event.currentTarget.dataset.class
    );
    if (event.currentTarget.dataset.class === "no") {
      bullets[0].parentElement.style.display = "none";
    } else {
      bullets[0].parentElement.style.display = "block";
    }
  });
});
//go links
let links = document.querySelectorAll(".links li a");
go(links);
//go functions
function go(source) {
  source.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(`.${item.dataset.section}`).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
//start going
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
//start header
let theLinks = document.querySelector(".links");
let bar = document.querySelector(".links-container i");
bar.addEventListener("click", (event) => {
  bar.classList.toggle("menu-active");
  theLinks.classList.toggle("open");
});
//click anywhere out menu and toggle button
theLinks.onclick = (e) => e.stopPropagation();
document.addEventListener("click", (event) => {
  if (event.target !== bar && event.target !== theLinks) {
    if (theLinks.classList.contains("open")) {
      theLinks.classList.remove("open");
      bar.classList.remove("menu-active");
    }
  }
});
//end header
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
//start gallery
//create popup with image
let ourGallery = document.querySelectorAll(".images-box img");
ourGallery.forEach((image) => {
  image.addEventListener("click", (event) => {
    //creat overlay start
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    //creat overlay end
    //creat popup start
    let popup = document.createElement("div");
    popup.className = "popup";
    document.body.appendChild(popup);
    //creat popup end
    //set image title from alt
    if (image.alt !== "") {
      //creat heading
      let imgHeading = document.createElement("h3");
      let imageTxt = document.createTextNode(image.alt);
      imgHeading.appendChild(imageTxt);
      popup.appendChild(imgHeading);
    }
    //creat the close span
    let close = document.createElement("span");
    let closeText = document.createTextNode("x");
    close.appendChild(closeText);
    popup.appendChild(close);
    close.addEventListener("click", (event) => {
      close.parentElement.remove();
      overlay.remove();
    });
    //creat popup image start
    let popupImage = document.createElement("img");
    popupImage.src = image.src;
    popup.appendChild(popupImage);
    //creat popup image end
  });
});
//end gallery
//start contact us
//end contact us
