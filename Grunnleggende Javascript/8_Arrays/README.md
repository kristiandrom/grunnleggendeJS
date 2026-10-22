# Tema 8 – Arrays

Hvis du skal lagre navnene til alle elevene i klassen, kan du lage `elev1`, `elev2`, `elev3` ... men det blir fort uoversiktlig. Og hva om en ny elev begynner? Et **array** er en liste som kan holde mange verdier i én variabel.

## Lage et array

```js
const frukt = ["eple", "banan", "kiwi"];
const tall = [4, 8, 15, 16, 23, 42];
const tomListe = [];
```

- Et array lages med hakeparenteser `[ ]`.
- Verdiene (kalt **elementer**) skilles med komma.
- Et array kan inneholde alle datatyper, også blandet, men det er vanligst at alle elementene er av samme type.

## Hente ut et element: indeks

Hvert element har et nummer, en **indeks**. **Indeksen starter på 0!**

```js
const frukt = ["eple", "banan", "kiwi"];
//               0        1        2

console.log(frukt[0]);   // eple
console.log(frukt[1]);   // banan
console.log(frukt[2]);   // kiwi
console.log(frukt[3]);   // undefined: det finnes ikke noe element med indeks 3
```

Det første elementet har indeks 0, det andre har indeks 1, og så videre. Dette er uvant i starten, men brukes i nesten alle programmeringsspråk.

## Lengden: `.length`

```js
console.log(frukt.length);                  // 3
console.log(frukt[frukt.length - 1]);       // kiwi: det siste elementet
```

Siden indeksen starter på 0, har det siste elementet alltid indeks `length - 1`.

## Endre et element

```js
frukt[1] = "mango";
console.log(frukt);   // [ 'eple', 'mango', 'kiwi' ]
```

> Arrayet er laget med `const`, men vi kan likevel endre innholdet. `const` betyr at variabelen alltid peker på *det samme* arrayet. Vi kan ikke bytte ut hele arrayet med et nytt, men vi kan endre det som er inni.

## Legge til og fjerne elementer

| Metode | Hva den gjør | Eksempel |
|---|---|---|
| `push(x)` | Legger til `x` **bakerst** | `frukt.push("pære")` |
| `pop()` | Fjerner (og returnerer) det **bakerste** | `frukt.pop()` |
| `unshift(x)` | Legger til `x` **forrest** | `frukt.unshift("appelsin")` |
| `shift()` | Fjerner (og returnerer) det **forreste** | `frukt.shift()` |

```js
const handleliste = ["melk", "brød"];

handleliste.push("ost");            // [ 'melk', 'brød', 'ost' ]
handleliste.unshift("egg");         // [ 'egg', 'melk', 'brød', 'ost' ]

const fjernet = handleliste.pop();  // fjernet er 'ost'
console.log(handleliste);           // [ 'egg', 'melk', 'brød' ]
```

`push` og `pop` er de du kommer til å bruke mest.

## Søke i et array

```js
const farger = ["rød", "grønn", "blå"];

console.log(farger.includes("grønn"));   // true: finnes i arrayet
console.log(farger.includes("gul"));     // false

console.log(farger.indexOf("blå"));      // 2: indeksen der den står
console.log(farger.indexOf("gul"));      // -1: betyr «finnes ikke»
```

## Gå gjennom alle elementene med en løkke

Dette er grunnen til at arrays og løkker hører sammen.

### `for`-løkke med indeks

```js
const frukt = ["eple", "banan", "kiwi"];

for (let i = 0; i < frukt.length; i++) {
    console.log(`${i}: ${frukt[i]}`);
}
```

Legg merke til `i = 0` (første indeks) og `i < frukt.length` (ikke `<=`, fordi siste indeks er `length - 1`). Fordelen med denne løkken er at du har både indeksen `i` og elementet `frukt[i]`.

### `for...of`-løkke

```js
for (const f of frukt) {
    console.log(f);
}
```

Les det som: *«for hver `f` i `frukt`»*. Hver runde får `f` verdien til neste element. Dette er enklere når du ikke trenger indeksen.

## Vanlige mønstre

### Summere tall

```js
const poeng = [12, 8, 15, 10];
let sum = 0;

for (const p of poeng) {
    sum += p;
}

console.log(`Sum: ${sum}`);                        // 45
console.log(`Snitt: ${sum / poeng.length}`);      // 11.25
```

### Finne det største tallet

```js
let storst = poeng[0];   // Start med det første

for (const p of poeng) {
    if (p > storst) {
        storst = p;
    }
}

console.log(`Høyest: ${storst}`);   // 15
```

### Lage et nytt array

```js
const priser = [100, 250, 80];
const medRabatt = [];

for (const pris of priser) {
    medRabatt.push(pris * 0.8);
}

console.log(medRabatt);   // [ 80, 200, 64 ]
```

### Telle

```js
const svar = ["ja", "nei", "ja", "ja", "nei"];
let antallJa = 0;

for (const s of svar) {
    if (s === "ja") {
        antallJa++;
    }
}

console.log(`${antallJa} svarte ja`);   // 3
```

## Arrays og funksjoner

En funksjon kan ta inn et array og returnere noe:

```js
function finnSum(liste) {
    let sum = 0;
    for (const tall of liste) {
        sum += tall;
    }
    return sum;
}

console.log(finnSum([1, 2, 3]));      // 6
console.log(finnSum([10, 20]));       // 30
```

## Oppsummering

- Et array er en liste: `["a", "b", "c"]`.
- Indeksen starter på **0**. Det siste elementet har indeks `length - 1`.
- `push`/`pop` legger til og fjerner bakerst. `unshift`/`shift` gjør det samme forrest.
- `includes` sjekker om noe finnes. `indexOf` finner hvor det står.
- Gå gjennom et array med `for (let i = 0; i < liste.length; i++)` eller `for (const x of liste)`.
