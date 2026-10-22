// Tema 8 – Oppgaver
// Kjør filen med: node 8_Arrays/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
const dyr = ["hund", "katt", "hest", "ku"];
console.log(dyr[1]);
console.log(dyr.length);
console.log(dyr[dyr.length - 1]);
dyr.push("gris");
dyr.shift();
console.log(dyr);


// 🟢 Oppgave 2 – Forutsi
// Hva skrives ut?
// Mitt svar:
//
const t = [3, 7, 2];
let resultat = 0;
for (const x of t) {
    resultat += x;
}
console.log(resultat);


// 🟡 Oppgave 3 – Finn feilen
// Løkken skal skrive ut alle byene, men skriver ut en undefined til slutt. Rett det.
//
const byer = ["Oslo", "Bergen", "Tromsø"];
for (let i = 0; i <= byer.length; i++) {
    console.log(byer[i]);
}


// 🟡 Oppgave 4 – Finn feilen
// Programmet skal skrive ut det første navnet i listen, "Emma", men skriver ut "Noah". Rett det.
//
const navneliste = ["Emma", "Noah", "Olivia"];
console.log(navneliste[1]);


// 🟠 Oppgave 5 – Endre
// Endre koden slik at den bare skriver ut tallene som er større enn 10.
//
const maalinger = [4, 15, 8, 23, 11, 2];
for (const m of maalinger) {
    console.log(m);
}


// 🔴 Oppgave 6 – Skriv selv
// a) Lag et array farger med tre farger. Skriv ut hele arrayet.
// b) Endre den andre fargen og skriv ut arrayet igjen.
// c) Legg til en farge bakerst og en forrest. Skriv ut arrayet.
// d) Skriv ut hvor mange farger det er i arrayet.



// 🔴 Oppgave 7 – Skriv selv
// Lag et array med temperaturene for en uke (7 tall).
// Bruk en løkke til å finne og skrive ut:
// - gjennomsnittstemperaturen
// - den høyeste temperaturen
// - den laveste temperaturen



// 🔴 Oppgave 8 – Skriv selv
// Lag en funksjon tellOver(liste, grense) som returnerer hvor mange tall i liste som er større enn grense.
// Test: tellOver([5, 12, 8, 20, 3], 7) skal gi 3.



// 🔴 Oppgave 9 – Skriv selv: Handleliste
// Lag et tomt array handleliste.
// Bruk en while-løkke og prompt() til å spørre brukeren om varer, og legg dem til med push.
// Når brukeren skriver "ferdig", skal løkken stoppe og hele listen skrives ut, én vare per linje, med nummer:
// 1. melk
// 2. brød
// (Husk å importere prompt-sync øverst i filen. Se tema 2.)



// ⭐ Utfordring
// Lag en funksjon snu(liste) som returnerer et NYTT array med elementene i motsatt rekkefølge.
// snu([1, 2, 3]) skal gi [3, 2, 1].
// Ikke bruk den innebygde metoden .reverse(). Lag det selv med en løkke.
