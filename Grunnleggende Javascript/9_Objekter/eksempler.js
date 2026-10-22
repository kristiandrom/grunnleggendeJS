// Tema 9 – Eksempler
// Kjør filen med: node 9_Objekter/eksempler.js


// ---------- Lage et objekt og hente ut verdier ----------

const elev = {
    navn: "Ola",
    alder: 16,
    klasse: "1STA",
    harLeksehjelp: false
};

console.log(elev);
console.log(elev.navn);          // Ola
console.log(elev["alder"]);      // 16
console.log(elev.epost);         // undefined

// Hakeparenteser når nøkkelen ligger i en variabel
const hvaViLurerPaa = "klasse";
console.log(elev[hvaViLurerPaa]);   // 1STA


// ---------- Endre, legge til, fjerne ----------

elev.alder = 17;
elev.epost = "ola@skole.no";
delete elev.harLeksehjelp;
console.log(elev);


// ---------- Array inni objekt ----------

const kari = {
    navn: "Kari",
    fag: ["matte", "norsk", "programmering"],
    adresse: {
        gate: "Storgata 1",
        by: "Oslo"
    }
};

console.log(kari.fag[2]);        // programmering
kari.fag.push("engelsk");
console.log(kari.fag);

for (const f of kari.fag) {
    console.log(`${kari.navn} har ${f}`);
}

// Objekt inni objekt
console.log(kari.adresse.by);    // Oslo


// ---------- Array med objekter ----------

const klasse = [
    { navn: "Ola", alder: 16 },
    { navn: "Kari", alder: 17 },
    { navn: "Ali", alder: 16 }
];

console.log(klasse[1].navn);     // Kari

// Skriv ut alle
for (const e of klasse) {
    console.log(`${e.navn} er ${e.alder} år`);
}

// Bare de som er 16
console.log("Elever som er 16:");
for (const e of klasse) {
    if (e.alder === 16) {
        console.log(`- ${e.navn}`);
    }
}

// Legge til en ny
klasse.push({ navn: "Sara", alder: 17 });
console.log(`Antall elever: ${klasse.length}`);   // 4

// Regne ut gjennomsnittsalder
let sumAlder = 0;
for (const e of klasse) {
    sumAlder += e.alder;
}
console.log(`Snittalder: ${sumAlder / klasse.length}`);   // 16.5


// ---------- Funksjoner og objekter ----------

function finnElev(liste, navn) {
    for (const e of liste) {
        if (e.navn === navn) {
            return e;
        }
    }
    return null;
}

console.log(finnElev(klasse, "Ali"));     // { navn: 'Ali', alder: 16 }
console.log(finnElev(klasse, "Per"));     // null

function lagElev(navn, alder) {
    return {
        navn: navn,
        alder: alder,
        fag: []
    };
}

function presenter(e) {
    console.log(`Hei, jeg heter ${e.navn} og er ${e.alder} år.`);
}

const jonas = lagElev("Jonas", 16);
presenter(jonas);
