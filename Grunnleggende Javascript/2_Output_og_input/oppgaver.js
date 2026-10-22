// Tema 2 – Oppgaver
// Kjør filen med: node 2_Output_og_input/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut av hver linje? Skriv svaret som kommentar før du kjører.
// Mitt svar:
//
const by = "Bergen";
const regndager = 230;
console.log("Jeg bor i" + by);
console.log(`${by} har ${regndager} regndager i året.`);
console.log("${by} er fin.");
console.log(`Det er ${365 - regndager} dager uten regn.`);


// 🟡 Oppgave 2 – Finn feilen
// Programmet skal skrive ut: Lisa har 3 katter og 2 hunder, til sammen 5 dyr.
// Men noe er galt. Rett det.
//
const eier = "Lisa";
const katter = 3;
const hunder = 2;
console.log("${eier} har ${katter} katter og ${hunder} hunder, til sammen ${katter + hunder} dyr.");


// 🟠 Oppgave 3 – Endre
// Skriv om linjen under slik at den bruker en template literal i stedet for +.
//
const fag = "programmering";
const time = 3;
console.log("I dag har vi " + fag + " i time " + time + ".");


// 🔴 Oppgave 4 – Skriv selv
// Lag et program som spør brukeren om navn og favorittmat,
// og så skriver ut: "Hei [navn]! Jeg liker også [favorittmat]."



// 🔴 Oppgave 5 – Skriv selv
// Lag et program som spør brukeren om to tall og skriver ut summen.
// Eksempel: Hvis brukeren skriver 4 og 7, skal programmet skrive ut: 4 + 7 = 11
// Husk at input er tekst!



// 🔴 Oppgave 6 – Skriv selv
// Lag en kvittering. Lag variabler for tre varer og prisene deres.
// Skriv ut en kvittering over flere linjer med \n eller en template literal over flere linjer,
// og regn ut totalprisen nederst.
//
// Eksempel:
// --- KVITTERING ---
// Melk: 25 kr
// Brød: 40 kr
// Ost: 89 kr
// ------------------
// Totalt: 154 kr



// ⭐ Utfordring – Alderskalkulator
// Spør brukeren om fødselsåret sitt. Regn ut og skriv ut:
// - hvor gammel brukeren blir i år
// - hvilket år brukeren fyller 100
// - hvor mange dager gammel brukeren er, omtrent (alder * 365)
