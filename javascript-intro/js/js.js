/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!');
console.log("Hello World");

/* Her er en konsol, der skriver Mojn */

console.log("Mojn Do"); // Her er en kommentar


/* Variabler; strenge */
let a = "Huske at skrive til Michael i aften ...";
let b = "23";


/** Variabler: tal - JS kan regne */
let c = 23;
console.log(b + b);
console.log(c * c);

/** Booleans: true / false */
let julemandenEksisterer = true;
console.log(julemandenEksisterer);

let aftensmad = false;

let vaer_23_booked = false;

/** kontrolstrukturer */
/*
if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "good day";
}



/** konkatenering: "klistre sammen" med + */
let header = "<h1>" + a + "</h1>";
console.log(header);

document.getElementById("hej").innerHTML = header;
document.getElementById("hej").style.color = "blue";

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }