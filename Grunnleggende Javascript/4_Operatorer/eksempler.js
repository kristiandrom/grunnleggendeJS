// Tema 4 – Eksempler
// Kjør filen med: node 4_Operatorer/eksempler.js


// ---------- Regneoperatorer ----------

const a = 10;
const b = 3;

console.log(`${a} + ${b} = ${a + b}`);     // 13
console.log(`${a} - ${b} = ${a - b}`);     // 7
console.log(`${a} * ${b} = ${a * b}`);     // 30
console.log(`${a} / ${b} = ${a / b}`);     // 3.3333333333333335
console.log(`${a} % ${b} = ${a % b}`);     // 1 (10 delt på 3 er 3, med 1 til overs)
console.log(`${a} ** ${b} = ${a ** b}`);   // 1000

// Regnerekkefølge
console.log(2 + 3 * 4);     // 14
console.log((2 + 3) * 4);   // 20


// ---------- % for partall/oddetall ----------

console.log(8 % 2);   // 0, altså partall
console.log(7 % 2);   // 1, altså oddetall

// Fordele 23 elever i grupper på 4
const elever = 23;
const gruppestorrelse = 4;
console.log(`Hele grupper: ${Math.floor(elever / gruppestorrelse)}`);   // Math.floor runder ned: 5
console.log(`Elever til overs: ${elever % gruppestorrelse}`);           // 3


// ---------- Kortversjoner ----------

let poeng = 0;
poeng += 10;   // poeng = poeng + 10
poeng -= 3;    // poeng = poeng - 3
poeng *= 2;    // poeng = poeng * 2
poeng++;       // poeng = poeng + 1
console.log(`Poeng: ${poeng}`);   // 15


// ---------- Sammenligning ----------

const alder = 16;
console.log(alder === 16);   // true
console.log(alder !== 16);   // false
console.log(alder > 18);     // false
console.log(alder >= 16);    // true

const erMyndig = alder >= 18;
console.log(`Er myndig: ${erMyndig}`);   // false

// == og === er ikke det samme
console.log(5 == "5");    // true (gjør om datatyper, unngå)
console.log(5 === "5");   // false (sjekker også datatype, bruk denne)

// Store og små bokstaver er forskjellige
console.log("Hei" === "hei");   // false


// ---------- Logiske operatorer ----------

const harBillett = true;
const erVIP = false;

const kommerInn = alder >= 18 && harBillett;
console.log(`Kommer inn på konserten: ${kommerInn}`);   // false (er ikke 18)

const gratisInngang = alder < 12 || alder > 67;
console.log(`Gratis inngang: ${gratisInngang}`);        // false

const trengerBillett = !erVIP;
console.log(`Trenger billett: ${trengerBillett}`);      // true

// Mellom to verdier
const erTenaaring = alder >= 13 && alder <= 19;
console.log(`Er tenåring: ${erTenaaring}`);             // true
