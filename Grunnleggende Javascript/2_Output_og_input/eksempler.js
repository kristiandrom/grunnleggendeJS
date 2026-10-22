// Tema 2 – Eksempler
// Kjør filen med: node 2_Output_og_input/eksempler.js

// Disse to linjene gjør at vi kan bruke prompt() for å spørre brukeren.
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


// ---------- Tre måter å skrive ut tekst og variabler på ----------

const navn = "Ola";
const alder = 16;

// 1. Med komma (console.log legger inn mellomrom selv)
console.log("Jeg heter", navn, "og er", alder, "år.");

// 2. Med + (vi må huske mellomrommene selv)
console.log("Jeg heter " + navn + " og er " + alder + " år.");

// 3. Med template literal (backticks og ${ })
console.log(`Jeg heter ${navn} og er ${alder} år.`);


// ---------- Regne inni ${ } ----------

const pris = 49;
const antall = 3;
console.log(`${antall} boller koster ${pris * antall} kr.`);
console.log(`Om fem år er ${navn} ${alder + 5} år.`);


// ---------- Linjeskift ----------

console.log("Linje 1\nLinje 2\nLinje 3");

console.log(`Handleliste:
- melk
- brød
- ost`);


// ---------- Input fra brukeren ----------

console.log();   // Tom linje
const brukernavn = prompt("Hva heter du? ");
console.log(`Hei, ${brukernavn}! Hyggelig å møte deg.`);

// Input er alltid tekst. Se forskjellen:
const tallSomTekst = prompt("Skriv inn et tall: ");
console.log(`Som tekst: ${tallSomTekst} + 1 = ${tallSomTekst + 1}`);

const tall = Number(tallSomTekst);
console.log(`Som tall:  ${tall} + 1 = ${tall + 1}`);
