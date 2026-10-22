// Tema 7 – Oppgaver
// Kjør filen med: node 7_Funksjoner/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut, og i hvilken rekkefølge? Skriv svaret før du kjører.
// Mitt svar:
//
function a() {
    console.log("A");
}
function b() {
    console.log("B");
    a();
}
console.log("Start");
b();
a();


// 🟢 Oppgave 2 – Forutsi
// Hva skrives ut?
// Mitt svar:
//
function trippel(x) {
    return x * 3;
    console.log("Ferdig!");
}
const resultat = trippel(trippel(2));
console.log(resultat);


// 🟡 Oppgave 3 – Finn feilen
// Programmet skal skrive ut "Arealet er 24", men skriver ut "Arealet er undefined". Rett det.
//
function areal(bredde, hoyde) {
    console.log(bredde * hoyde);
}
const svar = areal(4, 6);
console.log(`Arealet er ${svar}`);


// 🟡 Oppgave 4 – Finn feilen
// Programmet skal skrive ut "God morgen, Lise!", men ingenting skjer. Rett det.
//
function godMorgen(navn) {
    console.log(`God morgen, ${navn}!`);
}
godMorgen;


// 🟠 Oppgave 5 – Endre
// Koden under gjentar seg selv. Lag en funksjon skrivKvittering(vare, pris, antall)
// og bruk den i stedet for de tre blokkene.
//
console.log(`Vare: Brus`);
console.log(`Totalt: ${25 * 3} kr`);
console.log("---");
console.log(`Vare: Sjokolade`);
console.log(`Totalt: ${30 * 2} kr`);
console.log("---");
console.log(`Vare: Chips`);
console.log(`Totalt: ${40 * 1} kr`);
console.log("---");


// 🔴 Oppgave 6 – Skriv selv
// Lag en funksjon hilsen(navn) som skriver ut "Hei, [navn]!". Kall den med tre ulike navn.



// 🔴 Oppgave 7 – Skriv selv
// Lag en funksjon del(a, b) som RETURNERER a delt på b.
// Hvis b er 0, skal funksjonen returnere teksten "Kan ikke dele på 0".
// Test med del(10, 2) og del(5, 0).



// 🔴 Oppgave 8 – Skriv selv
// Lag en funksjon erPartall(tall) som returnerer true hvis tallet er partall og false ellers.
// Bruk den i en løkke som skriver ut alle partall fra 1 til 20.



// 🔴 Oppgave 9 – Skriv selv
// Lag en funksjon celsiusTilFahrenheit(celsius) som returnerer temperaturen i Fahrenheit.
// Formel: fahrenheit = celsius * 1.8 + 32
// Skriv ut: "20 °C er 68 °F"



// ⭐ Utfordring – Karakterkalkulator
// Lag en funksjon finnKarakter(poeng) som returnerer en karakter fra 1 til 6:
// 90+ = 6, 75+ = 5, 60+ = 4, 45+ = 3, 30+ = 2, under 30 = 1.
// Lag så en løkke som skriver ut karakteren for 0, 10, 20, ... opp til 100 poeng.
