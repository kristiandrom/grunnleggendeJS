// Tema 1 – Eksempler
// Kjør filen med: node 1_Variabler/eksempler.js

// ---------- Lage variabler ----------

let navn = "Ola";
let alder = 16;

console.log(navn);    // Ola
console.log(alder);   // 16
console.log("navn");  // navn (med anførselstegn er det bare tekst)


// ---------- Endre en variabel (let) ----------

let poeng = 0;
console.log("Poeng ved start:", poeng);   // 0

poeng = 10;
console.log("Poeng etter runde 1:", poeng);   // 10

// Høyresiden regnes ut først: 10 + 5 = 15, og så lagres 15 i poeng
poeng = poeng + 5;
console.log("Poeng etter runde 2:", poeng);   // 15


// ---------- Konstanter (const) ----------

const fodselsaar = 2009;
const skole = "Byskolen videregående";

console.log(fodselsaar);   // 2009
console.log(skole);        // Byskolen videregående

// Fjern // på linjen under og kjør filen for å se feilmeldingen du får:
// fodselsaar = 2010;


// ---------- Variabler gjør koden lettere å lese og endre ----------

// Uten variabler: Hva betyr disse tallene?
console.log(3 * 49);

// Med variabler: Nå skjønner vi hva som regnes ut
const prisPerBolle = 49;
const antallBoller = 3;
console.log("Totalpris:", prisPerBolle * antallBoller);

// Bruke en variabel til å regne ut en annen
const iAar = 2026;
const alderIAar = iAar - fodselsaar;
console.log("Alder i år:", alderIAar);   // 17
