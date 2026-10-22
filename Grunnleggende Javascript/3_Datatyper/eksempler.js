// Tema 3 – Eksempler
// Kjør filen med: node 3_Datatyper/eksempler.js


// ---------- string (tekst) ----------

const fornavn = "Kari";
const by = 'Bodø';
const hilsen = `Hei, ${fornavn} fra ${by}!`;
console.log(hilsen);

const ord = "programmering";
console.log(ord.length);          // 13
console.log(ord.toUpperCase());   // PROGRAMMERING


// ---------- number (tall) ----------

const alder = 16;
const pris = 49.9;        // Desimaltall med punktum
const temperatur = -5;
console.log(alder, pris, temperatur);


// ---------- boolean ----------

const erElev = true;
const harBillett = false;
console.log(erElev, harBillett);


// ---------- undefined og null ----------

let adresse;
console.log(adresse);     // undefined

let vinner = null;
console.log(vinner);      // null


// ---------- typeof ----------

console.log(typeof fornavn);      // string
console.log(typeof alder);        // number
console.log(typeof erElev);       // boolean
console.log(typeof adresse);      // undefined
console.log(typeof "42");         // string
console.log(typeof 42);           // number


// ---------- + oppfører seg ulikt for tekst og tall ----------

console.log(5 + 5);       // 10
console.log("5" + "5");   // 55
console.log("5" + 5);     // 55


// ---------- Gjøre om mellom datatyper ----------

const tekst = "42";
const tall = Number(tekst);
console.log(tall + 1);              // 43
console.log(typeof tall);           // number

const tilbakeTilTekst = String(tall);
console.log(typeof tilbakeTilTekst);   // string

console.log(Number("hei"));         // NaN
