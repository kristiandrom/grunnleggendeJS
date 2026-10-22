# Tema 3 – Datatyper

Alle verdier i JavaScript har en **datatype**. Datatypen bestemmer hva slags verdi det er, og hva du kan gjøre med den. Du kan for eksempel regne med tall, men ikke med tekst.

## De viktigste datatypene

| Datatype | Hva det er | Eksempler |
|---|---|---|
| `string` | Tekst | `"Hei"`, `'Oslo'`, `` `Hei ${navn}` ``, `"42"` |
| `number` | Tall, både hele tall og desimaltall | `16`, `-3`, `3.14` |
| `boolean` | Sant eller usant. Bare to mulige verdier. | `true`, `false` |
| `undefined` | Variabelen finnes, men har ikke fått noen verdi ennå | `let x;` |
| `null` | «Tomt med vilje». Vi har bestemt at det ikke er noen verdi her. | `let vinner = null;` |

### string (tekst)

Alt som står i anførselstegn eller backticks er tekst. Det gjelder også tall: `"42"` er tekst, ikke et tall.

```js
const fornavn = "Kari";
const by = 'Bodø';
const hilsen = `Hei, ${fornavn}!`;
```

Nyttig å vite om tekst:

```js
const ord = "programmering";
console.log(ord.length);         // 13: antall tegn
console.log(ord.toUpperCase());  // PROGRAMMERING
console.log(ord.toLowerCase());  // programmering
```

### number (tall)

```js
const alder = 16;
const pris = 49.90;       // Desimaltall skrives med punktum, ikke komma!
const temperatur = -5;
```

### boolean (sant/usant)

En boolean er enten `true` eller `false`. Den brukes til ja/nei-spørsmål og blir svært viktig når vi kommer til betingelser i tema 5.

```js
const erElev = true;
const harBillett = false;
```

Booleans får ofte navn som starter med `er`, `har` eller `kan`, slik at navnet leses som et spørsmål.

> `true` og `false` skrives **uten** anførselstegn. `"true"` er tekst, ikke en boolean.

### undefined og null

Begge betyr «ingen verdi», men på hver sin måte:

```js
let adresse;
console.log(adresse);   // undefined: vi har ikke gitt variabelen noen verdi ennå

let vinner = null;
console.log(vinner);    // null: vi har bestemt at det ikke er noen vinner (ennå)
```

En enkel huskeregel: `undefined` er noe JavaScript gir deg når du har glemt å sette en verdi. `null` er noe *du* setter for å si «tomt».

## Finne ut datatypen med `typeof`

```js
console.log(typeof "Hei");    // string
console.log(typeof 42);       // number
console.log(typeof true);     // boolean
console.log(typeof "42");     // string (anførselstegn = tekst!)
```

`typeof` er nyttig når programmet oppfører seg rart og du lurer på hva en variabel egentlig inneholder.

> **Rart, men sant:** `typeof null` gir `"object"`. Det er en gammel feil i JavaScript som aldri ble rettet. Du kan bare huske at det er sånn.

## Hvorfor datatyper betyr noe

Se hva som skjer med `+`:

```js
console.log(5 + 5);       // 10      (tall + tall = regning)
console.log("5" + "5");   // "55"    (tekst + tekst = limes sammen)
console.log("5" + 5);     // "55"    (tekst + tall = limes sammen!)
```

Når én av delene er tekst, limer `+` sammen i stedet for å regne. Dette er en av de vanligste feilene for nybegynnere, særlig når man bruker `prompt()`, som alltid gir tekst.

## Gjøre om mellom datatyper

| Fra → til | Slik gjør du | Eksempel |
|---|---|---|
| tekst → tall | `Number(tekst)` | `Number("42")` blir `42` |
| tall → tekst | `String(tall)` | `String(42)` blir `"42"` |

Hvis teksten ikke er et tall, får du `NaN`:

```js
console.log(Number("hei"));   // NaN
```

`NaN` betyr *Not a Number*, altså «ikke et tall». Ser du `NaN` i programmet ditt, har du sannsynligvis prøvd å regne med noe som ikke er et tall. (Litt forvirrende: `typeof NaN` er `"number"`.)

## Senere i kurset

Det finnes to datatyper til som samler mange verdier i én variabel:

- **Arrays** (lister), som `["eple", "banan", "kiwi"]`. Disse kommer i [tema 8](../8_Arrays/README.md).
- **Objekter**, som `{ navn: "Ola", alder: 16 }`. Disse kommer i [tema 9](../9_Objekter/README.md).

## Oppsummering

- `string` = tekst, `number` = tall, `boolean` = `true`/`false`.
- `undefined` = ingen verdi ennå, `null` = tomt med vilje.
- `typeof` forteller hvilken datatype en verdi har.
- `"5" + 5` blir `"55"`. Bruk `Number()` for å gjøre tekst om til tall.
- `NaN` betyr at noe ikke kunne gjøres om til et tall.
