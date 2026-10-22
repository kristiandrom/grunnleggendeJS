// Tema 4 – Oppgaver
// Kjør filen med: node 4_Operatorer/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
console.log(17 % 5);
console.log(20 % 4);
console.log(2 + 2 * 2);
console.log(10 / 4);
console.log(3 ** 2);


// 🟢 Oppgave 2 – Forutsi
// true eller false?
// Mitt svar:
//
const x = 7;
console.log(x > 5 && x < 10);
console.log(x > 5 && x > 10);
console.log(x > 5 || x > 10);
console.log(!(x === 7));
console.log(x === "7");


// 🟡 Oppgave 3 – Finn feilen
// Programmet skal sjekke om temperaturen er mellom 15 og 25 grader (behagelig).
// Med temperatur 30 skal svaret bli false, men det blir true! Rett feilen.
//
const temperatur = 30;
const erBehagelig = 15 <= temperatur <= 25;
console.log(`Behagelig: ${erBehagelig}`);


// 🟠 Oppgave 4 – Endre
// Skriv om koden under med kortversjonene +=, -= og ++.
//
let liv = 3;
liv = liv - 1;
liv = liv + 1;
let mynter = 0;
mynter = mynter + 50;
mynter = mynter + 50;
console.log(liv, mynter);


// 🔴 Oppgave 5 – Skriv selv
// Lag en variabel med et tall du velger selv.
// Lag en variabel erPartall som er true hvis tallet er et partall, og skriv den ut.
// Hint: %



// 🔴 Oppgave 6 – Skriv selv: Konsert
// Lag variablene alder, harBillett og erVIP.
// Lag en variabel kommerInn som er true hvis:
// - personen er 18 år eller eldre OG har billett,
// - ELLER personen er VIP (da spiller alder og billett ingen rolle).
// Skriv ut kommerInn. Test med ulike verdier og sjekk at svaret stemmer.



// 🔴 Oppgave 7 – Skriv selv: Pizzaregning
// 7 venner deler en pizzaregning på 649 kr likt.
// Regn ut og skriv ut hva hver person skal betale.
// Bonus: Bruk Math.round() for å runde av til hele kroner. Eksempel: Math.round(4.6) gir 5.



// ⭐ Utfordring – Skuddår
// Et år er et skuddår hvis det er delelig med 4,
// men ikke hvis det er delelig med 100, med mindre det også er delelig med 400.
// Lag en variabel aar og en variabel erSkuddaar som er true eller false.
// Test med: 2024 (true), 2026 (false), 1900 (false), 2000 (true)
