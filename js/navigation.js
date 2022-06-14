// Nav buttons
//    const Home = document.getElementById("home");
//    const User = document.getElementById("user");
//    const ClipBord = document.getElementById("clipbord");
//    const OpenBook = document.getElementById("openbook");
//    const Whatsapp = document.getElementById("whatsapp");
//    const Location = document.getElementById("location");
// Nav buttons
// Navbar components
const NavBar = document.getElementById("navigation");
const NavImage = document.getElementById("navImage");
const NavImageWrap = document.getElementById("image-wrap");
const NavName = document.getElementById("navigation-name");
const NavButton = document.getElementById("nav-button");
const NavButtonsWrap = document.getElementById("navigation-buttons");
const NavAllIcons = document.querySelectorAll(".navigation-icons");
const NavAllIconsWrap = document.querySelectorAll("#navigation-button-wrap");
const navigationicons = document.getElementById("navigation-icons");
const CVdownlodeButton = document.getElementById("nav-button");
// Navbar components
// Titles
const HomeTitle = document.getElementById("hometitle");
const UserTitle = document.getElementById("usertitle");
const ResumeTitle = document.getElementById("clipbordtitle");
const ImagesTitle = document.getElementById("openbooktitle");
const ContactTitle = document.getElementById("locationtitle");
// Titles
// main tile components

const CenterContentWrap = document.getElementById("center-tiles-wrap");
const CenterTile1 = document.getElementById("MainTile1");
const CenterTile2 = document.getElementById("MainTile2");
const CenterTile3 = document.getElementById("MainTile3");
const CenterTile4 = document.getElementById("MainTile4");
const CenterTile5 = document.getElementById("MainTile5");
// main tile components
// nav buttons click

// for active classlist
CenterTile1.classList.add("active");
HomeTitle.classList.add("nav-titles-hover");


// for active classlist

// and animations

NavButtonsWrap.addEventListener("click",(event)=>{
    element = event.target.parentNode;
    
    if (element.id === "home") {
        // for tiles
        CenterTile1.classList.add("active")
        CenterTile2.classList.remove("active")
        CenterTile3.classList.remove("active")
        CenterTile4.classList.remove("active")
        CenterTile5.classList.remove("active")
        // for tiles
        // for navbar
        navExpended()
        HomeTitle.classList.add("nav-titles-hover");
        UserTitle.classList.remove("nav-titles-hover");
        ResumeTitle.classList.remove("nav-titles-hover");
        ImagesTitle.classList.remove("nav-titles-hover");
        ContactTitle.classList.remove("nav-titles-hover");
        // for navbar
    }

    if (element.id === "user") {
        // for tiles
        CenterTile1.classList.remove("active")
        CenterTile2.classList.add("active")
        CenterTile3.classList.remove("active")
        CenterTile4.classList.remove("active")
        CenterTile5.classList.remove("active")
        // for tiles
        // for navbar
        navcollapse()
        HomeTitle.classList.remove("nav-titles-hover");
        UserTitle.classList.add("nav-titles-hover");
        ResumeTitle.classList.remove("nav-titles-hover");
        ImagesTitle.classList.remove("nav-titles-hover");
        ContactTitle.classList.remove("nav-titles-hover");
        // for navbar
        
    }

    if (element.id === "clipbord") {
        // for tiles
        CenterTile1.classList.remove("active")
        CenterTile2.classList.remove("active")
        CenterTile3.classList.add("active")
        CenterTile4.classList.remove("active")
        CenterTile5.classList.remove("active")
        // for tiles
        // for navbar
        navcollapse()
        HomeTitle.classList.remove("nav-titles-hover");
        UserTitle.classList.remove("nav-titles-hover");
        ResumeTitle.classList.add("nav-titles-hover");
        ImagesTitle.classList.remove("nav-titles-hover");
        ContactTitle.classList.remove("nav-titles-hover");
        // for navbar

    }

    if (element.id === "openbook") {
         // for tiles
         CenterTile1.classList.remove("active")
         CenterTile2.classList.remove("active")
         CenterTile3.classList.remove("active")
         CenterTile4.classList.add("active")
         CenterTile5.classList.remove("active")
         // for tiles
        // for navbar
        navcollapse()
        HomeTitle.classList.remove("nav-titles-hover");
        UserTitle.classList.remove("nav-titles-hover");
        ResumeTitle.classList.remove("nav-titles-hover");
        ImagesTitle.classList.add("nav-titles-hover");
        ContactTitle.classList.remove("nav-titles-hover");
        // for navbar

    }
    if (element.id === "location") {
        // for tiles
        CenterTile1.classList.remove("active")
        CenterTile2.classList.remove("active")
        CenterTile3.classList.remove("active")
        CenterTile4.classList.remove("active")
        CenterTile5.classList.add("active")
        // for tiles
        // for navbar
        navExpended()
        HomeTitle.classList.remove("nav-titles-hover");
        UserTitle.classList.remove("nav-titles-hover");
        ResumeTitle.classList.remove("nav-titles-hover");
        ImagesTitle.classList.remove("nav-titles-hover");
        ContactTitle.classList.add("nav-titles-hover");
        // for navbar


    }
        
})

function navExpended() {
    var tl = gsap.timeline({duration:0});
    tl.to(".gsap1",{x:-450,duration:0.2,stagger:0.1});
    tl.to(".gsap2",{x:350,duration:0.2,stagger:-0.1},"<");
    tl.to(".gsap1",{x:0,duration:0.2,delay:0.9,stagger:-0.1});
    tl.to(".gsap2",{x:0,duration:0.2,delay:0.9,stagger:0.1},"<");


    setTimeout(() => {
        NavName.style.fontSize = "2.25rem";
        NavImage.style.width =  "11rem";
        NavImageWrap.style.height = "65%";
        CenterTile1.style.width = "62rem";
        CenterContentWrap.style.width = "62rem";
        NavBar.style.width = "20rem";
        NavAllIconsWrap.forEach((button) => {
            button.classList.add("grid-cols-3")
        })
    }, 1000);
    setTimeout(() => {
        NavButton.style.opacity = "1";
    }, 1500);
}

function navcollapse() {
    var tl = gsap.timeline({duration:0});
    tl.to(".gsap1",{x:-450,duration:0.2,delay:0.9,stagger:0.1},"-=1");
    tl.to(".gsap2",{x:350,duration:0.2 ,delay:0.9,stagger:-0.1},"-=1");
    tl.to(".gsap1",{delay:0.5,y:450,duration:0});
    tl.to(".gsap2",{delay:0.5,y:450,duration:0},"<"); 
    tl.to(".gsap1",{x:0,duration:0.2});
    tl.to(".gsap2",{x:0,duration:0.2},"<");
    tl.to(".gsap1",{y:0,delay:0.9,stagger:0.1});
    tl.to(".gsap2",{y:0,delay:0.3,stagger:0.1},"<");


    NavButton.style.opacity = "0";
    setTimeout(() => {
        CenterTile1.style.width = "81rem";
        CenterContentWrap.style.width = "81rem";
        NavBar.style.width = "5.5rem";
        NavName.style.fontSize = "14px";
        NavImage.style.width =  "4rem";
        NavImageWrap.style.height = "23%";
    }, 1000);
    setTimeout(() => {
        NavAllIconsWrap.forEach((button) => {
            button.classList.remove("grid-cols-3")
        })
    }, 1300);
    NavAllIcons.forEach((button) => {
        button.classList.add("h-[4.3rem]")
    })
}

