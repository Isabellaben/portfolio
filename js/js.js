/* //når siden er loadet skal vi gå til funktionen start
window.addEventListener("load", start);


function start() {
    //tilføj klik til pil
    document.querySelector("#pil").addEventListener("click", pilned)
}


function pilned(){
    console.log("pilned")
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' 
      });  

      //tilføj rotering på pil
      document.querySelector("#pil").classList.add("rotate")

      //tilføj funktion for at rotere tilbage op 
      document.querySelector("#pil").addEventListener("click", pilop)
}

function pilop(){
console.log("pilop")
   //fjern rotering på pil
   document.querySelector("#pil").classList.remove("rotate")

   //tilføj scroll
   globalThis. scrollTo({ top: 0, behavior: "smooth" });

   //gå til repeat
    document.querySelector("#pil").addEventListener("click", repeat)
}

function repeat(){

      //lyt efter om der bliver trykket på pilen igen
      this.addEventListener("mousedown", pilned) ;
  } */


/********* burger menu til mobil site *******/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}


