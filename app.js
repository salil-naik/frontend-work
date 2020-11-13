const videoWrapper = document.querySelector(".video__wrapper");
const video = document.querySelector(".video");
const introRight = document.querySelector(".intro__right");
const introNavBtnDown = introRight.querySelector(".nav-btn");
const firstLayer = document.querySelector(".intro__right__layer.first-layer");
const secondLayer = document.querySelector(".intro__right__layer.second-layer");
const introTitle = document.querySelector(".intro__right__title");
const introText = document.querySelector(".intro__right__text");
const introButton = document.querySelector(".intro__button");
const titleWords = document.querySelectorAll(".words");
const introLeft = document.querySelector(".intro__left");

// offerings
const offeringsLayer = document.querySelector(".offerings__layer");
const offeringsRight = document.querySelector(".offerings__right");
const offeringsRightTitle = offeringsRight.querySelector("span");
const offeringsRightLink = document.querySelector(".offerings__right__link").querySelector("a");
const offeringsLeftTitle = document.querySelector(".offerings__left__title").querySelector("span");
const offeringsNavBtn = offeringsRight.querySelectorAll("nav-btn")

// offerings cards
const cards = document.querySelectorAll(".offerings__card");

// setting the current time for video
video.addEventListener(
  "loadedmetadata",
  function () {
    this.currentTime = 2.3;
  },
  false
);

// to pause the video
let pauseVid = () => {
  video.pause();
};

let playVid = () =>{
    video.play();
}

let tl = gsap.timeline();

let goToOfferings = () => {
  tl.to(titleWords[0], 0.3, {y:"-100%", opacity: 0},)
    .to(titleWords[1], 0.3, {y:"-100%", opacity: 0}, "-=0.28")
    .to(titleWords[2], 0.3, {y:"-100%", opacity: 0}, "-=0.26")
    .to(titleWords[3], 0.3, {y:"-100%", opacity: 0}, "-=0.24")
    .to(introText, 0.3, {y:"-100%", opacity: 0}, "-=0.22")
    .to(introButton, 0.3, {y:"-100%", opacity: 0}, "-=0.22")
    .to(introNavBtnDown, 0.3, {display: "none"}, "-=0.22")
    .to(titleWords, 0.1, {visibility: 'hidden'})
    .to(firstLayer, 1, { height: "0"}, "-=0.15")
    .to(videoWrapper, 1.4, { height: "100vh", width: "60vw" }, "-=1")
    .to(introLeft, 1.4, {width: "60vw", y: "100%"}, "-=1.4")
    .fromTo(introRight, 1.4, {height: "100vh", width:"60%"},{ height: "60vh", width:"40%"}, "-=1.4")
    .to(offeringsLayer, 0.3, {height:"100vh"})
    .to(offeringsRight, 0 ,{display:"flex"})
    .fromTo(offeringsRight, 0.3, {opacity:0}, {opacity:1})
    .to(offeringsLeftTitle, 0.3, {y:0})
    .to(offeringsRightTitle, 0.3, {y:0})
    .to(offeringsRightLink, 0.3, {y:0}, "-=0.2")
    .to(cards[0], 0.4, {y:0, opacity: 1}, "-=0.2")
    .to(cards[1], 0.4, {y:0, opacity: 1}, "-=0.3")
    .to(cards[2], 0.4, {y:0, opacity: 1}, "-=0.3")
    .to(cards[3], 0.4, {y:0, opacity: 1}, "-=0.3")
    .to(cards[4], 0.4, {y:0, opacity: 1}, "-=0.3")
    .to(cards[5], 0.4, {y:0, opacity: 1}, "-=0.3")

    setTimeout(()=>{
        playVid();
    }, 100)

    setTimeout(() => {
      pauseVid();
    }, 2000);
};

let goToHubs = () => {
  tl.to(offeringsLeftTitle, 0.4, {y:"-100%"})
    .to(cards[0], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(cards[1], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(cards[2], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(cards[3], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(cards[4], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(cards[5], 0.4, {y:"-10px", opacity: 0}, "-=0.3")
    .to(offeringsRightTitle, 0.4, {y:"-100%"}, "-=0.3")
    .to(offeringsRightLink, 0.4, {y:"-100%"}, "-=0.3")
    .to(offeringsLayer, 0.3, {backgroundColor: "rgba(48, 82, 122, 1)"})
    .to(offeringsRight, 0.1, {display:"none"})
    .to(offeringsLayer, 1.4, {height:"70vh", width:"40vw"})
    .to(videoWrapper, 1.4, {height:"60vh", width:"40vw", opacity: 0}, "-=1.4")
    .to(introRight, 1.4, {width: "60vw", height: "100vh"}, "-=1.4")
    .to(secondLayer, 1.4, {height: "100vh"}, "-=1.4")
    .to(secondLayer, 1, {y:"-100%"})
    .to(videoWrapper, 0.01, { display:"none"})
}

const video_section = document.querySelector(".video__wrapper");

// const video = document.querySelector(".video__wrapper");

// const controller = new ScrollMagic.Controller();

// // scene
// const scene = new ScrollMagic.Scene({
//   duration: 10000,
//   triggerElement: video,
//   triggerHook: 0,
// })
//   .addIndicators()
//   .setPin(video)
//   .addTo(controller);

// // video animation
// let accelamount = 1;
// let scrollpos = 0;
// let delay = 0;

// scene.on('update', e=>{
//     scrollpos = e.scrollPos / 1000;
//     console.log(e);
// })

// setInterval(()=>{
//     delay += (scrollpos - delay) * accelamount;
//     video.currentTime = delay;
// }, 33.3);
