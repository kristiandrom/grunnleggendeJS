// Tema 6 – Oppgaver
// Kjør filen med: node 6_Lokker/oppgaver.js
// Husk: Hvis programmet ikke stopper, trykk Ctrl + C.
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
for (let i = 0; i < 3; i++) {
    console.log(i);
}


// 🟢 Oppgave 2 – Forutsi
// Hva er verdien av total til slutt?
// Mitt svar:
//
let total = 0;
for (let i = 1; i <= 4; i++) {
    total += i * 2;
}
console.log(total);


// 🟡 Oppgave 3 – Finn feilen
// Løkken skal skrive ut 5, 4, 3, 2, 1, men den stopper aldri.
// Fjern // foran linjene, finn feilen og rett den. (Ctrl + C stopper programmet.)
//
// let teller = 5;
// while (teller > 0) {
//     console.log(teller);
//     teller++;
// }


// 🟡 Oppgave 4 – Finn feilen
// Programmet skal regne ut summen av tallene 1 til 10 (svaret skal være 55),
// men skriver ut 10. Hvorfor? Rett det.
//
for (let i = 1; i <= 10; i++) {
    let summen = 0;
    summen += i;
    if (i === 10) {
        console.log(summen);
    }
}


// 🟠 Oppgave 5 – Endre
// Endre løkken under slik at den
// a) teller fra 10 til 50
// b) bare skriver ut hvert femte tall (10, 15, 20, ...)
//
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// 🔴 Oppgave 6 – Skriv selv
// Skriv ut alle partall mellom 1 og 20. Bruk en løkke og en if.



// 🔴 Oppgave 7 – Skriv selv
// Skriv ut alle tall fra 1 til 30, men hopp over alle tall som er delelig med 3. Bruk continue.



// 🔴 Oppgave 8 – Skriv selv: Gangetabell
// Spør brukeren hvilken gangetabell de vil se, og skriv den ut fra 1 til 10.
// Eksempel for 3: 1 x 3 = 3, 2 x 3 = 6, ...



// 🔴 Oppgave 9 – Skriv selv: Gjett tallet
// Lag et tilfeldig tall mellom 1 og 100.
// La brukeren gjette helt til de har rett. Etter hver gjetning skal programmet si "For høyt!" eller "For lavt!".
// Når brukeren gjetter riktig, skriv ut hvor mange forsøk det tok.



// ⭐ Utfordring – FizzBuzz
// Skriv ut tallene fra 1 til 100, men:
// - for tall delelig med 3: skriv "Fizz" i stedet for tallet
// - for tall delelig med 5: skriv "Buzz"
// - for tall delelig med både 3 og 5: skriv "FizzBuzz"
// Dette er en klassisk oppgave som ofte brukes på jobbintervjuer!
