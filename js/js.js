//når siden er loadet skal vi gå til funktionen start
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
  }




