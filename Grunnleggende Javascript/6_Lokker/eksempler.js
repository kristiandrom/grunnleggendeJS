// Tema 6 – Eksempler
// Kjør filen med: node 6_Lokker/eksempler.js


// ---------- for-løkke ----------

for (let i = 1; i <= 5; i++) {
    console.log(`Runde ${i}`);
}


// ---------- Telle på andre måter ----------

console.log("Nedtelling:");
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Takeoff! 🚀");

console.log("To og to:");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}


// ---------- Samle opp et resultat ----------

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Summen av 1 til 100 er ${sum}`);   // 5050


// ---------- Løkke med if ----------

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} er et partall`);
    } else {
        console.log(`${i} er et oddetall`);
    }
}


// ---------- Gangetabell ----------

const tabell = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${tabell} = ${i * tabell}`);
}


// ---------- while-løkke ----------

let penger = 100;
let uker = 0;

while (penger < 1000) {
    penger += 150;
    uker++;
}
console.log(`Etter ${uker} uker har du ${penger} kr.`);


// ---------- break og continue ----------

for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;   // Hopper over 3
    }
    if (i === 6) {
        break;      // Stopper løkken ved 6
    }
    console.log(i);   // 1 2 4 5
}


// ---------- Tilfeldige tall ----------

// Kast en terning 5 ganger
for (let kast = 1; kast <= 5; kast++) {
    const terning = Math.floor(Math.random() * 6) + 1;
    console.log(`Kast ${kast}: ${terning}`);
}

// Kast terningen helt til vi får en sekser
let antallKast = 0;
let resultat = 0;
while (resultat !== 6) {
    resultat = Math.floor(Math.random() * 6) + 1;
    antallKast++;
}
console.log(`Det tok ${antallKast} kast å få en sekser.`);
