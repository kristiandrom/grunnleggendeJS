// Tema 7 – Eksempler
// Kjør filen med: node 7_Funksjoner/eksempler.js


// ---------- Lage og kalle en funksjon ----------

function siHei() {
    console.log("Hei!");
    console.log("Velkommen til kurset.");
}

siHei();   // Koden i funksjonen kjører først nå
siHei();   // ...og en gang til


// ---------- Parametere ----------

function hilsPaa(navn) {
    console.log(`Hei, ${navn}!`);
}

hilsPaa("Ola");
hilsPaa("Kari");

function presenter(navn, alder) {
    console.log(`${navn} er ${alder} år.`);
}

presenter("Ola", 16);
presenter("Kari", 17);


// ---------- return ----------

function leggSammen(a, b) {
    return a + b;
}

const svar = leggSammen(3, 4);
console.log(svar);                     // 7
console.log(leggSammen(10, 20) * 2);   // 60


// ---------- console.log eller return? ----------

function dobbelLogg(tall) {
    console.log(tall * 2);
}

function dobbelReturn(tall) {
    return tall * 2;
}

const a = dobbelLogg(5);     // Skriver ut 10
const b = dobbelReturn(5);   // Skriver ikke ut noe
console.log(`a er ${a}`);    // a er undefined
console.log(`b er ${b}`);    // b er 10


// ---------- return true/false ----------

function erMyndig(alder) {
    return alder >= 18;
}

console.log(erMyndig(20));   // true
console.log(erMyndig(15));   // false

// Svaret fra en funksjon kan brukes rett i en if
if (erMyndig(17)) {
    console.log("Du kan stemme.");
} else {
    console.log("Du kan ikke stemme ennå.");
}


// ---------- Funksjoner som bruker andre funksjoner ----------

function arealRektangel(bredde, hoyde) {
    return bredde * hoyde;
}

function prisForGulv(bredde, hoyde, prisPerKvm) {
    const areal = arealRektangel(bredde, hoyde);
    return areal * prisPerKvm;
}

console.log(`Gulvet koster ${prisForGulv(4, 5, 350)} kr.`);   // 7000


// ---------- Funksjon med løkke ----------

function skrivGangetabell(tall) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${tall} = ${i * tall}`);
    }
}

skrivGangetabell(3);


// ---------- Arrow function (for å kjenne den igjen) ----------

const ganger = (x, y) => {
    return x * y;
};
console.log(ganger(6, 7));   // 42
