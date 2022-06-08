
// Nav buttons
const Home = document.getElementById("home");
const User = document.getElementById("user");
const ClipBord = document.getElementById("clipbord");
const OpenBook = document.getElementById("openbook");
const Whatsapp = document.getElementById("whatsapp");
const Location = document.getElementById("location");

// Nav buttons
// Navbar components
const NavTitles = document.querySelectorAll(".nav-titles")
const NavBar = document.getElementById("navigation");
const NavImage = document.getElementById("navImage");
const NavImageWrap = document.getElementById("image-wrap");
const NavName = document.getElementById("navigation-name");
const NavButton = document.getElementById("nav-button");
const NavButtonsWrap = document.getElementById("navigation-buttons");
const NavAllIcons = document.querySelectorAll(".navigation-icons");
const NavAllIconsWrap = document.querySelectorAll("#navigation-button-wrap");
const navigationicons = document.getElementById("navigation-icons");
const navExpended = true;
// Navbar components
// main tile components
const CenterTile = document.getElementById("main-tile");
// main tile components
// nav buttons click
Home.addEventListener("click",()=>{
    ////////////////////////////////////////// animations start
    if (NavBar.style.width == "5.5rem") {
        var tl = gsap.timeline({duration:0});
        tl.to(".gsap1",{x:-450,duration:0.2 },"-=1");
        tl.to(".gsap2",{x:350,duration:0.2 },"-=1");
        tl.to(".gsap1",{x:0,duration:0.2,delay:0.9,stagger:-0.1});
        tl.to(".gsap2",{x:0,duration:0.2,delay:0.9,stagger:0.1},"<");
    }     
   //////////////////////////////////////// // animations end
    NavButton.style.display = "block";
    NavName.style.fontSize = "2.25rem";
    NavImage.style.width =  "11rem";
    NavImageWrap.style.height = "65%";
    NavBar.style.width = "20rem";
    CenterTile.style.width = "62rem";
    setTimeout(() => {
        NavAllIconsWrap.forEach((button) => {
            button.classList.add("grid-cols-3")
        })
        NavButton.style.opacity = "1";
    }, 600);
    
})

User.addEventListener("click",()=>{
    // animations
    var tl = gsap.timeline({duration:0});
    tl.to(".gsap1",{x:-450,duration:0.2,delay:0.9,stagger:0.1},"-=1");
    tl.to(".gsap2",{x:350,duration:0.2 ,delay:0.9,stagger:-0.1},"-=1");
    tl.to(".gsap1",{delay:0.5,y:450,duration:0 });
    tl.to(".gsap2",{delay:0.5,y:450,duration:0 },"<"); 
    tl.to(".gsap1",{x:0,duration:0.2});
    tl.to(".gsap2",{x:0,duration:0.2},"<");
    tl.to(".gsap1",{y:0,delay:0.9,stagger:0.1});
    tl.to(".gsap2",{y:0,delay:0.3,stagger:0.1},"<");
    // animations
    NavButton.style.opacity = "0";
    NavButton.style.display = "none";
    setTimeout(() => {
        CenterTile.style.width = "79rem";
        NavBar.style.width = "5.5rem";
        NavName.style.fontSize = "15px";
        NavImage.style.width =  "4rem";
        NavImageWrap.style.height = "23%";
        NavAllIconsWrap.forEach((button) => {
            button.classList.remove("grid-cols-3")
        })
    }, 1000);
    NavAllIcons.forEach((button) => {
        button.classList.add("h-[4.3rem]")
    })
})

// nav buttons click
// nav buttons hover mouse enter





// nav buttons hover mouse enter



