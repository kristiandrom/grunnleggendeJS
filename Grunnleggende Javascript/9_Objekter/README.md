# Tema 9 – Objekter

Et array er en *liste* med ting. Men hva om du vil beskrive *én* ting med mange egenskaper, for eksempel en elev med navn, alder og klasse? Da bruker vi et **objekt**.

## Lage et objekt

```js
const elev = {
    navn: "Ola",
    alder: 16,
    klasse: "1STA",
    harLeksehjelp: false
};
```

- Et objekt lages med krøllparenteser `{ }`.
- Inni står **egenskaper** (engelsk: *properties*) som par: `nøkkel: verdi`.
- Nøkkelen er et navn du velger. Verdien kan være hvilken som helst datatype.
- Parene skilles med komma.

Sammenlign med variabler: I stedet for fire løse variabler (`elevNavn`, `elevAlder` ...) samler vi alt som hører til én elev på ett sted.

## Hente ut en verdi

```js
console.log(elev.navn);      // Ola
console.log(elev.alder);     // 16
console.log(elev.epost);     // undefined: egenskapen finnes ikke
```

Dette kalles **punktnotasjon**: `objekt.nøkkel`.

Det finnes også **hakeparentesnotasjon**, der nøkkelen skrives som tekst:

```js
console.log(elev["navn"]);   // Ola
```

Den trengs når nøkkelen ligger i en variabel:

```js
const hvaViLurerPaa = "klasse";
console.log(elev[hvaViLurerPaa]);   // 1STA
console.log(elev.hvaViLurerPaa);    // undefined: leter etter en egenskap som heter «hvaViLurerPaa»
```

Bruk punktnotasjon som vanlig, og hakeparenteser bare når du trenger det.

## Endre, legge til og fjerne

```js
elev.alder = 17;              // Endre en egenskap som finnes
elev.epost = "ola@skole.no";  // Legge til en ny egenskap
delete elev.harLeksehjelp;    // Fjerne en egenskap

console.log(elev);
// { navn: 'Ola', alder: 17, klasse: '1STA', epost: 'ola@skole.no' }
```

Som med arrays kan vi endre innholdet selv om objektet er laget med `const`.

## Arrays inni objekter

En egenskap kan være et array:

```js
const elev = {
    navn: "Kari",
    fag: ["matte", "norsk", "programmering"]
};

console.log(elev.fag[2]);         // programmering
console.log(elev.fag.length);     // 3
elev.fag.push("engelsk");
```

Les `elev.fag[2]` fra venstre mot høyre: *«ta `elev`, hent egenskapen `fag`, ta element nummer 2»*.

## Objekter inni objekter

```js
const elev = {
    navn: "Kari",
    adresse: {
        gate: "Storgata 1",
        postnummer: "0155",
        by: "Oslo"
    }
};

console.log(elev.adresse.by);    // Oslo
```

## Arrays med objekter

Dette er kanskje det viktigste mønsteret i hele kurset, og noe du vil bruke hele tiden på VG2. En liste der hvert element er et objekt:

```js
const klasse = [
    { navn: "Ola", alder: 16 },
    { navn: "Kari", alder: 17 },
    { navn: "Ali", alder: 16 }
];

console.log(klasse[1]);          // { navn: 'Kari', alder: 17 }
console.log(klasse[1].navn);     // Kari
```

Gå gjennom alle med en løkke:

```js
for (const elev of klasse) {
    console.log(`${elev.navn} er ${elev.alder} år`);
}
```

Finne alle som oppfyller et krav:

```js
for (const elev of klasse) {
    if (elev.alder === 16) {
        console.log(elev.navn);
    }
}
```

Finne ett bestemt objekt:

```js
function finnElev(liste, navn) {
    for (const elev of liste) {
        if (elev.navn === navn) {
            return elev;
        }
    }
    return null;   // Fant ingen
}

const funnet = finnElev(klasse, "Ali");
console.log(funnet);   // { navn: 'Ali', alder: 16 }
```

Legge til et nytt objekt:

```js
klasse.push({ navn: "Sara", alder: 17 });
```

Slik ligger data i nesten alle ekte programmer: brukere i en app, varer i en nettbutikk, poster på sosiale medier. På VG2 skal dere lagre slike lister i filer (JSON).

## Objekter og funksjoner

```js
function lagElev(navn, alder) {
    return {
        navn: navn,
        alder: alder,
        fag: []
    };
}

function presenter(elev) {
    console.log(`Hei, jeg heter ${elev.navn} og er ${elev.alder} år.`);
}

const nyElev = lagElev("Jonas", 16);
presenter(nyElev);
```

## Array eller objekt?

| Bruk et **array** når ... | Bruk et **objekt** når ... |
|---|---|
| du har en *liste* med like ting | du beskriver *én ting* med ulike egenskaper |
| rekkefølgen er viktig | hver verdi har et navn |
| `["Ola", "Kari", "Ali"]` | `{ navn: "Ola", alder: 16 }` |

Og ofte begge: et array med objekter.

## Oppsummering

- Et objekt samler egenskaper som hører sammen: `{ navn: "Ola", alder: 16 }`.
- Hent verdier med `objekt.nøkkel` (eller `objekt["nøkkel"]`).
- Endre og legg til med `objekt.nøkkel = verdi`.
- Egenskaper kan være arrays eller andre objekter.
- Arrays med objekter + løkker er et mønster du kommer til å bruke hele tiden.
