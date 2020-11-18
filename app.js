// pre-loader
const preLoader = document.querySelector(".pre-loader");
const preLoaderLogo = document.querySelector(".pre-loader__logo");
const preLoaderImgContainer = document.querySelector(".pre-loader__image-container");
const preLoaderImgOne = document.querySelector(".pre-loader__image-one");
const preLoaderImgTwo = document.querySelector(".pre-loader__image-two");
const preLoaderTitle = preLoader.querySelectorAll(".word");

// intro 
const videoUpWrapper = document.querySelector(".videoUp__wrapper");
const videoUp = document.querySelector(".videoUp");
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
const offerings = document.querySelector(".offerings");
const offeringsLayer = document.querySelector(".offerings__layer");
const offeringsRight = document.querySelector(".offerings__right");
const offeringsLeft = document.querySelector(".offerings__left");
const offeringsRightTitle = offeringsRight.querySelector("span");
const offeringsRightLink = document
  .querySelector(".offerings__right__link")
  .querySelector("a");
const offeringsLeftTitle = document
  .querySelector(".offerings__left__title")
  .querySelector("span");
const offeringsNavBtn = offeringsRight.querySelectorAll(".nav-btn");

// offerings cards
const cards = document.querySelectorAll(".offerings__card");

// hubs
const hubs = document.querySelector(".hubs");
const hubsLeftTop = document.querySelector(".hubs__left-top")
const videoDownWrapper = document.querySelector(".videoDown__wrapper")
const videoDown = document.querySelector(".videoDown")
const hubsLeftBottom = document.querySelector(".hubs__left-bottom")
const hubsLeftBottomTitle = hubsLeftBottom.querySelector("span");
const hubsLeftBottomLink = document
  .querySelector(".hubs__left-bottom__link")
  .querySelector("a");

// news copy
const newsCopy = document.querySelector(".news-copy");
const newsCopyLayer = newsCopy.querySelector(".news-copy__layer");
const newsCopyTitle = newsCopy.querySelectorAll(".word");
const newsCopyBtn = newsCopy.querySelector(".btn");

// events
const events = document.querySelector(".events");
const eventsTitle = events.querySelectorAll(".word");
const eventsBtn = events.querySelector(".events__btn-container");
const eventsCard = events.querySelectorAll(".events__card");

// setting the current time for video
videoUp.addEventListener(
  "loadedmetadata",
  function () {
    this.currentTime = 2.3;
  },
  false
);

// to pause the video
let pauseUpVid = () => {
  videoUp.pause();
};

let playUpVid = () => {
  videoUp.play();
};

let tl = gsap.timeline();

tl.to(preLoaderLogo, 1, {opacity: 1})
  .to(preLoaderLogo, 0.5, {opacity: 0})
  .to(preLoaderImgOne, 0.3, {y: "0"})
  .to(preLoaderTitle[0], 0.3, {y: "0"}, "-=0.2")
  .to(preLoaderTitle[0], 0.3, {y: "100%"}, "+=1")
  .to(preLoaderImgTwo, 0.3, {y: "0"}, "-=0.1")
  .to(preLoaderTitle[1], 0.3, {y: "0"}, "-=0.2")
  .to(preLoaderTitle[1], 0.3, {y: "100%"}, "+=1")
  .to(preLoaderImgContainer, 0.5, {height:"100vh", width:"60vw", marginRight: "0"})
  // .to(preLoaderImgContainer, 0.2, {opacity:0})
  .to(preLoader, 0.5, {opacity:0})
  .to(preLoader, 0, {display:"none"})

let goToOfferings = () => {
  tl.to(titleWords[0], 0.3, { y: "-100%", opacity: 0 })
    .to(titleWords[1], 0.3, { y: "-100%", opacity: 0 }, "-=0.28")
    .to(titleWords[2], 0.3, { y: "-100%", opacity: 0 }, "-=0.26")
    .to(titleWords[3], 0.3, { y: "-100%", opacity: 0 }, "-=0.24")
    .to(introText, 0.3, { y: "-100%", opacity: 0 }, "-=0.22")
    .to(introButton, 0.3, { y: "-100%", opacity: 0 }, "-=0.22")
    .to(introNavBtnDown, 0.3, { display: "none" }, "-=0.22")
    .to(titleWords, 0.1, { visibility: "hidden" })
    .to(firstLayer, 1, { height: "0" }, "-=0.15")
    .to(videoUpWrapper, 1.4, { height: "100vh", width: "60vw" }, "-=1")
    .to(introLeft, 1.4, { width: "60vw", y: "100%" }, "-=1.4")
    .fromTo(
      introRight,
      1.4,
      { height: "100vh", width: "60%" },
      { height: "60vh", width: "40%" },
      "-=1.4"
    )
    .to(offerings, 0.1, {display:'block'})
    .to(offeringsLayer, 0.3, { height: "100vh" })
    .to(offeringsRight, 0, { display: "flex" })
    .fromTo(offeringsRight, 0.3, { opacity: 0 }, { opacity: 1 })
    .to(offeringsLeftTitle, 0.3, { y: 0 })
    .to(offeringsRightTitle, 0.3, { y: 0 })
    .to(offeringsRightLink, 0.3, { y: 0 }, "-=0.2")
    .to(cards[0], 0.4, { y: 0, opacity: 1 }, "-=0.2")
    .to(cards[1], 0.4, { y: 0, opacity: 1 }, "-=0.3")
    .to(cards[2], 0.4, { y: 0, opacity: 1 }, "-=0.3")
    .to(cards[3], 0.4, { y: 0, opacity: 1 }, "-=0.3")
    .to(cards[4], 0.4, { y: 0, opacity: 1 }, "-=0.3")
    .to(cards[5], 0.4, { y: 0, opacity: 1 }, "-=0.3");

  setTimeout(() => {
    playUpVid();
  }, 100);

  setTimeout(() => {
    pauseUpVid();
  }, 2000);
};

let goToHubs = () => {
  tl.to(offeringsLeftTitle, 0.4, { y: "-100%" })
    .to(offeringsNavBtn, 0.4, {opacity:0, visibility: "none"})
    .to(cards[0], 0.4, { y: "-10px", opacity: 0 }, "-=0.4")
    .to(cards[1], 0.4, { y: "-10px", opacity: 0 }, "-=0.3")
    .to(cards[2], 0.4, { y: "-10px", opacity: 0 }, "-=0.3")
    .to(cards[3], 0.4, { y: "-10px", opacity: 0 }, "-=0.3")
    .to(cards[4], 0.4, { y: "-10px", opacity: 0 }, "-=0.3")
    .to(cards[5], 0.4, { y: "-10px", opacity: 0 }, "-=0.3")
    .to(offeringsRightTitle, 0.4, { y: "-100%" }, "-=0.3")
    .to(offeringsRightLink, 0.4, { y: "-100%" }, "-=0.3")
    .to(offeringsLayer, 0.3, { backgroundColor: "rgba(48, 82, 122, 1)"}, "-=0.4")
    .to(secondLayer, 1, {y: "-100%", opacity:0}, "-=0.3")
    .to(introRight, 0, { display:"none"})
    .to(videoDownWrapper, 0, {zIndex:6})
    .to(offeringsRight, 0, { display: "none" })
    .to(hubs, 0, {display:"block"})
    .to(offeringsLayer, 1.4, { height: "70vh", width: "40vw" })
    .to(
      videoUpWrapper,
      1.4,
      { height: "60vh", width: "40vw", opacity: 0 },
      "-=1.4"
    )
    .to(videoDownWrapper, 1.4, {width: "60vw", height: "100vh"}, "-=1.4")
    .to(hubsLeftBottomTitle, 0.4, { y: "0%" }, "-=0.3")
    .to(hubsLeftBottomLink, 0.4, { y: "0%" }, "-=0.3")
    .to(hubsLeftBottom, 0, {zIndex:7})
    .to(videoUpWrapper, 0, { opacity: 0, display: "none" })
    .to(offeringsLeft, 0.4, { display: "none" });

  setTimeout(()=>{
    videoDown.play();
  },1400);
  
};

let goToNewsCopy = () => {
  tl.to(newsCopy, 0.1, {display:'flex'})
    .fromTo(newsCopy, 1, {y:"100%"}, {y:"0%"})
    .to(newsCopyLayer, 1, {top:"0"}, "-=0.8")
    .to(hubs, 0.1, {display: "none"})
    .to(newsCopyTitle[0], 0.35, { y: "0%"})
    .to(newsCopyTitle[1], 0.35, { y: "0%"}, "-=0.33")
    .to(newsCopyTitle[2], 0.35, { y: "0%"}, "-=0.31")
    .to(newsCopyTitle[3], 0.35, { y: "0%"}, "-=0.29")
    .to(newsCopyTitle[4], 0.35, { y: "0%"}, "-=0.27")
    .to(newsCopyTitle[5], 0.35, { y: "0%"}, "-=0.25")
    .to(newsCopyBtn, 0.35, {opacity: 1})
    .to(events, 0.1, {display: "flex"})
}

let goToEvents = () => {
  tl.to(newsCopyBtn, 0.35, {opacity: 0})
    .to(newsCopyTitle[0], 0.35, { y: "-100%"})
    .to(newsCopyTitle[1], 0.35, { y: "-100%"}, "-=0.33")
    .to(newsCopyTitle[2], 0.35, { y: "-100%"}, "-=0.31")
    .to(newsCopyTitle[3], 0.35, { y: "-100%"}, "-=0.29")
    .to(newsCopyTitle[4], 0.35, { y: "-100%"}, "-=0.27")
    .to(newsCopyTitle[5], 0.35, { y: "-100%"}, "-=0.25")
    .to(newsCopyLayer, 1, {top:"-100%"})
    .to(newsCopy, 0.1, {opacity: "0"})
    .to(newsCopy, 0.1, {display: "none"})
    .to(eventsTitle[0], 0.3, {y:"0", opacity: 1})
    .to(eventsTitle[1], 0.3, {y:"0", opacity: 1}, "-=0.2")
    .to(eventsBtn, 0.3, {opacity:1})
    .to(eventsCard[0], 0.3, {y: "0", opacity: 1}, "-=0.2")
    .to(eventsCard[1], 0.3, {y: "0", opacity: 1}, "-=0.2")
    .to(eventsCard[2], 0.3, {y: "0", opacity: 1}, "-=0.2")
}

// const video_section = document.querySelector(".video__wrapper");

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
