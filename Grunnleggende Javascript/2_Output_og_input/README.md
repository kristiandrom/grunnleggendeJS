# Tema 2 – Output og input

*Output* er det programmet viser fram. *Input* er det brukeren gir til programmet. Med begge deler kan programmet ditt «snakke» med brukeren.

## Output: skrive ut tekst sammen med variabler

Det finnes tre måter å skrive ut tekst og variabler sammen på.

### 1. Komma i `console.log()`

```js
let navn = "Ola";
let alder = 16;
console.log("Jeg heter", navn, "og er", alder, "år.");
// Jeg heter Ola og er 16 år.
```

Med komma legger `console.log()` automatisk inn et mellomrom mellom delene. Det er enkelt, men fungerer bare inni `console.log()`.

### 2. Slå sammen tekst med `+`

```js
console.log("Jeg heter " + navn + " og er " + alder + " år.");
```

Når `+` brukes med tekst, limes tekstene sammen. Det kalles å *slå sammen* (engelsk: *concatenate*). Her må du selv huske mellomrommene inni anførselstegnene. Glemmer du dem, blir det `Jeg hetterOla`.

### 3. Template literals (anbefalt)

```js
console.log(`Jeg heter ${navn} og er ${alder} år.`);
```

En *template literal* er tekst skrevet mellom **backticks** `` ` `` i stedet for anførselstegn. Inni den kan du skrive `${ }`, og det som står inni krøllparentesene blir regnet ut og satt inn i teksten.

Du kan til og med regne inni `${ }`:

```js
const pris = 49;
const antall = 3;
console.log(`${antall} boller koster ${pris * antall} kr.`);
// 3 boller koster 147 kr.
```

> **Hvor finner jeg backtick?** På norsk tastatur: **Shift + tasten til venstre for Backspace** (den med `` ` `` og `´`), og så **mellomrom**. På Mac: **Shift + ´** og så mellomrom.

Template literals er den mest brukte måten i moderne JavaScript, og den vi bruker mest videre i kurset.

### Linjeskift og spesialtegn

Inni tekst kan du bruke `\n` for å lage et nytt linjeskift:

```js
console.log("Linje 1\nLinje 2");
```

I template literals kan du også bare trykke Enter:

```js
console.log(`Handleliste:
- melk
- brød`);
```

## Input: spørre brukeren

For å la brukeren skrive inn noe, bruker vi pakken `prompt-sync`. Den installerte du med `npm install` (se [README](../README.md)).

Øverst i filen skriver du:

```js
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });
```

Disse to linjene henter verktøyet og gjør det klart. Du trenger ikke forstå dem helt nå. Det viktige er at du etterpå kan bruke `prompt()`:

```js
const navn = prompt("Hva heter du? ");
console.log(`Hei, ${navn}!`);
```

Når programmet kommer til `prompt()`, stopper det og venter på at brukeren skriver noe og trykker Enter. Det brukeren skrev, blir lagret i variabelen.

> `{ sigint: true }` gjør at du kan avslutte programmet med **Ctrl + C** mens det venter på input.

### Viktig: input er alltid tekst

```js
const alder = prompt("Hvor gammel er du? ");   // Brukeren skriver 16
console.log(alder + 1);                         // 161 ❗
```

`prompt()` gir alltid tilbake **tekst**, selv om brukeren skriver et tall. Og tekst + tall limes sammen. Skal du regne med det brukeren skriver, må du gjøre teksten om til et tall med `Number()`:

```js
const alder = Number(prompt("Hvor gammel er du? "));
console.log(alder + 1);                         // 17 ✅
```

Mer om tekst og tall i [tema 3](../3_Datatyper/README.md).

## Vanlige feil

| Problem | Årsak |
|---|---|
| Teksten viser `${navn}` i stedet for navnet | Du har brukt `"` eller `'` i stedet for backticks `` ` ``. |
| `Cannot find package 'prompt-sync'` | Du har ikke kjørt `npm install`, eller du kjører filen fra feil mappe. Stå i `VG1`-mappen. |
| Ordene henger sammen: `Jeg hetterOla` | Du har glemt mellomrom inni anførselstegnene når du bruker `+`. |
| Tall blir limt sammen: `161` | Input er tekst. Bruk `Number()`. |

## Oppsummering

- Bruk template literals med backticks: `` `Hei ${navn}` ``.
- `\n` gir nytt linjeskift.
- `prompt("spørsmål")` lar brukeren skrive inn tekst.
- Input er alltid tekst. Bruk `Number()` når du skal regne.
