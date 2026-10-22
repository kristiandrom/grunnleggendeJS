// Tema 8 – Eksempler
// Kjør filen med: node 8_Arrays/eksempler.js


// ---------- Lage et array og hente ut elementer ----------

const frukt = ["eple", "banan", "kiwi"];

console.log(frukt);          // [ 'eple', 'banan', 'kiwi' ]
console.log(frukt[0]);       // eple (første element har indeks 0)
console.log(frukt[2]);       // kiwi
console.log(frukt[3]);       // undefined (finnes ikke)

console.log(frukt.length);                  // 3
console.log(frukt[frukt.length - 1]);       // kiwi (det siste)


// ---------- Endre et element ----------

frukt[1] = "mango";
console.log(frukt);          // [ 'eple', 'mango', 'kiwi' ]


// ---------- Legge til og fjerne ----------

const handleliste = ["melk", "brød"];

handleliste.push("ost");
console.log(handleliste);    // [ 'melk', 'brød', 'ost' ]

handleliste.unshift("egg");
console.log(handleliste);    // [ 'egg', 'melk', 'brød', 'ost' ]

const fjernetBakerst = handleliste.pop();
console.log(`Fjernet: ${fjernetBakerst}`);   // ost
console.log(handleliste);                    // [ 'egg', 'melk', 'brød' ]

const fjernetForrest = handleliste.shift();
console.log(`Fjernet: ${fjernetForrest}`);   // egg
console.log(handleliste);                    // [ 'melk', 'brød' ]


// ---------- Søke ----------

const farger = ["rød", "grønn", "blå"];
console.log(farger.includes("grønn"));   // true
console.log(farger.includes("gul"));     // false
console.log(farger.indexOf("blå"));      // 2
console.log(farger.indexOf("gul"));      // -1


// ---------- Løkker ----------

// for-løkke med indeks
for (let i = 0; i < frukt.length; i++) {
    console.log(`${i}: ${frukt[i]}`);
}

// for...of
for (const f of frukt) {
    console.log(f);
}


// ---------- Summere og finne snitt ----------

const poeng = [12, 8, 15, 10];
let sum = 0;
for (const p of poeng) {
    sum += p;
}
console.log(`Sum: ${sum}`);                       // 45
console.log(`Snitt: ${sum / poeng.length}`);     // 11.25


// ---------- Finne det største ----------

let storst = poeng[0];
for (const p of poeng) {
    if (p > storst) {
        storst = p;
    }
}
console.log(`Høyest: ${storst}`);                 // 15


// ---------- Lage et nytt array ----------

const priser = [100, 250, 80];
const medRabatt = [];
for (const pris of priser) {
    medRabatt.push(pris * 0.8);
}
console.log(medRabatt);                           // [ 80, 200, 64 ]


// ---------- Telle ----------

const svar = ["ja", "nei", "ja", "ja", "nei"];
let antallJa = 0;
for (const s of svar) {
    if (s === "ja") {
        antallJa++;
    }
}
console.log(`${antallJa} svarte ja`);             // 3


// ---------- Array i en funksjon ----------

function finnSum(liste) {
    let total = 0;
    for (const tall of liste) {
        total += tall;
    }
    return total;
}
console.log(finnSum([1, 2, 3]));    // 6
console.log(finnSum(poeng));        // 45
