// Tema 5 – Oppgaver
// Kjør filen med: node 5_Betingelser/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
const tall = 15;
if (tall > 10) {
    console.log("A");
} else if (tall > 5) {
    console.log("B");
} else {
    console.log("C");
}
if (tall % 2 === 0) {
    console.log("D");
}
console.log("E");


// 🟢 Oppgave 2 – Forutsi
// Hva skrives ut? (Se nøye etter: mangler det noe?)
// Mitt svar:
//
const farge = "grønn";
switch (farge) {
    case "rød":
        console.log("Stopp");
        break;
    case "grønn":
        console.log("Kjør");
    case "gul":
        console.log("Vent");
        break;
    default:
        console.log("Ukjent farge");
}


// 🟡 Oppgave 3 – Finn feilen
// Programmet skal gi rabatt til elever og pensjonister (67 år eller eldre).
// Fjern // foran linjene, kjør og les feilmeldingen. Rett feilen.
// Når programmet kjører: test med alder 67, 70 og 30. Får alle riktig svar? Det er to ting som må rettes.
//
// let personAlder = 30;
// let erElev = false;
// if (erElev || personAlder = 67) {
//     console.log("Du får rabatt!");
// } else {
//     console.log("Full pris.");
// }


// 🟡 Oppgave 4 – Finn feilen
// Programmet skal skrive ut "Kald", "Passe" eller "Varm".
// Men med temperatur 28 står det "Passe". Hvorfor? Rett det.
//
const temp = 28;
if (temp > 10) {
    console.log("Passe");
} else if (temp > 25) {
    console.log("Varm");
} else {
    console.log("Kald");
}


// 🟠 Oppgave 5 – Endre
// Skriv om denne koden til en switch.
//
const valg = 2;
if (valg === 1) {
    console.log("Du valgte stein");
} else if (valg === 2) {
    console.log("Du valgte saks");
} else if (valg === 3) {
    console.log("Du valgte papir");
} else {
    console.log("Ugyldig valg");
}


// 🔴 Oppgave 6 – Skriv selv: Temperatur
// Lag en variabel temperatur.
// - Over 30 grader: skriv ut "Hetebølge! Husk vann."
// - Mellom 20 og 30 grader: skriv ut "Deilig sommervær."
// - Mellom 0 og 19 grader: skriv ut "Ta på en jakke."
// - Under 0 grader: skriv ut "Det er minusgrader!"



// 🔴 Oppgave 7 – Skriv selv: Partall eller oddetall
// Spør brukeren om et tall (husk Number()).
// Skriv ut om tallet er et partall eller et oddetall.



// 🔴 Oppgave 8 – Skriv selv: Passord
// Lag en konstant riktigPassord.
// Spør brukeren om passordet.
// Skriv ut "Logget inn!" hvis det er riktig, ellers "Feil passord."



// ⭐ Utfordring – Kinobillett
// Spør brukeren om alder og om de er student (ja/nei).
// Prisregler:
// - Under 12 år: 80 kr
// - 67 år eller eldre: 90 kr
// - Student (uansett alder mellom 12 og 66): 100 kr
// - Alle andre: 140 kr
// Skriv ut prisen. Godta både "ja", "Ja" og "JA".
