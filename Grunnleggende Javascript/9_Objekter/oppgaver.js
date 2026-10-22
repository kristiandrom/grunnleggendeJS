// Tema 9 – Oppgaver
// Kjør filen med: node 9_Objekter/oppgaver.js
// Tips: Alle oppgavene ligger i samme fil, så hvert variabelnavn kan bare lages én gang.
//       Får du «Identifier '...' has already been declared», velg et annet navn.


// 🟢 Oppgave 1 – Forutsi
// Hva skrives ut? Skriv svaret før du kjører.
// Mitt svar:
//
const bil = {
    merke: "Tesla",
    modell: "Model 3",
    aar: 2022,
    farger: ["hvit", "svart", "rød"]
};
console.log(bil.merke);
console.log(bil.farger[1]);
console.log(bil.farger.length);
console.log(bil.pris);


// 🟢 Oppgave 2 – Forutsi
// Hva skrives ut?
// Mitt svar:
//
const lag = [
    { navn: "Brann", poeng: 54 },
    { navn: "Bodø/Glimt", poeng: 61 },
    { navn: "Molde", poeng: 47 }
];
console.log(lag[1].navn);
console.log(lag[0].poeng + lag[2].poeng);


// 🟡 Oppgave 3 – Finn feilen
// Programmet skal skrive ut "Harry Potter av J.K. Rowling", men skriver ut "undefined av undefined". Rett det.
//
const bok = {
    tittel: "Harry Potter",
    forfatter: "J.K. Rowling"
};
console.log(`${bok.Tittel} av ${bok.forfattar}`);


// 🟡 Oppgave 4 – Finn feilen
// Programmet skal skrive ut navnet på alle spillerne, men skriver ut undefined tre ganger. Rett det.
//
const spillere = [
    { navn: "Ada", nivaa: 12 },
    { navn: "Bo", nivaa: 7 },
    { navn: "Cy", nivaa: 19 }
];
for (const spiller of spillere) {
    console.log(spillere.navn);
}


// 🟠 Oppgave 5 – Endre
// a) Endre elevens alder til 17.
// b) Legg til egenskapen "klasse" med verdien "1IMA".
// c) Legg til faget "programmering" i fag-arrayet.
// Skriv ut objektet etter endringene.
//
const elev = {
    navn: "Sofie",
    alder: 16,
    fag: ["norsk", "matte"]
};


// 🔴 Oppgave 6 – Skriv selv
// Lag et objekt som beskriver favorittfilmen eller -serien din, med minst fire egenskaper,
// der én av dem er et array (f.eks. skuespillere).
// Skriv ut en setning som bruker minst tre av egenskapene.



// 🔴 Oppgave 7 – Skriv selv: Nettbutikk
// Lag et array produkter med minst fire objekter. Hvert produkt skal ha navn, pris og antallPaaLager.
// a) Skriv ut alle produktene på formen: "Hodetelefoner – 499 kr (12 på lager)"
// b) Skriv ut bare produktene som er utsolgt (antallPaaLager er 0).
// c) Regn ut hva hele lageret er verdt til sammen (pris * antall for hvert produkt).



// 🔴 Oppgave 8 – Skriv selv
// Lag en funksjon finnDyreste(produkter) som returnerer det dyreste produkt-OBJEKTET fra arrayet i oppgave 7.
// Skriv ut navnet på det dyreste produktet.



// ⭐ Utfordring – Karakterbok
// Lag et array med minst tre elever. Hver elev har navn og et array med karakterer, f.eks. [4, 5, 3, 6].
// Lag en funksjon snitt(karakterer) som returnerer gjennomsnittet av et array med tall.
// Skriv ut hver elev med snittet sitt, og til slutt hvilken elev som har høyest snitt.
