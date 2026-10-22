// Tema 3 – Oppgaver
// Kjør filen med: node 3_Datatyper/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.


// 🟢 Oppgave 1 – Forutsi
// Hvilken datatype har hver verdi? Skriv svaret som kommentar, og sjekk så ved å kjøre koden.
// Mitt svar:
// a)
// b)
// c)
// d)
// e)
// f)
console.log(typeof 3.14);       // a)
console.log(typeof "3.14");     // b)
console.log(typeof false);      // c)
console.log(typeof "false");    // d)
let ukjent;
console.log(typeof ukjent);     // e)
console.log(typeof `${10}`);    // f)


// 🟢 Oppgave 2 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
console.log(10 + 5);
console.log("10" + 5);
console.log(Number("10") + 5);
console.log("10" - 5);   // Denne er litt lur. Prøv å gjette, og sjekk så!


// 🟡 Oppgave 3 – Finn feilen
// Programmet skal regne ut hvor mye tre kinobilletter koster til sammen,
// men det skriver ut noe rart. Finn ut hvorfor og rett det.
//
const billettpris = "120";
const antallBilletter = 3;
const ekstraPopcorn = "60";
console.log(billettpris * antallBilletter + ekstraPopcorn);


// 🟠 Oppgave 4 – Endre
// Variablene under har feil datatype. Endre dem så de får riktig datatype:
// - alder skal være et tall
// - erMyndig skal være en boolean
// - snittkarakter skal være et desimaltall
//
let alder2 = "17";
let erMyndig = "false";
let snittkarakter = "4,5";
console.log(typeof alder2, typeof erMyndig, typeof snittkarakter);


// 🔴 Oppgave 5 – Skriv selv
// Gå inn på finn.no og finn en annonse du liker (en bil, en sykkel, en leilighet ...).
// Lag variabler for informasjon fra annonsen. Du skal ha minst én variabel av hver av disse typene:
// string, number og boolean. Lag også én variabel som er null (f.eks. "solgtTil").
// Skriv en kommentar ved hver variabel om hvilken datatype den har, og skriv ut alle med typeof.



// ⭐ Utfordring
// Lag en variabel med et ord du velger selv. Skriv ut:
// - ordet med store bokstaver
// - hvor mange bokstaver ordet har
// - en setning som: Ordet "banan" har 5 bokstaver.
