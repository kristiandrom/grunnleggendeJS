# Tema 1 – Variabler

## Hva er en variabel?

En variabel er en navngitt «boks» der programmet kan ta vare på en verdi. Du gir boksen et navn, legger noe i den, og senere kan du hente det ut igjen ved å bruke navnet.

```js
let navn = "Ola";
console.log(navn);   // Skriver ut: Ola
```

Linjen `let navn = "Ola";` består av fire deler:

| Del | Betydning |
|---|---|
| `let` | «Lag en ny variabel» |
| `navn` | Navnet på variabelen. Det velger du selv. |
| `=` | «Legg verdien til høyre inn i variabelen til venstre». Det betyr **ikke** «er lik» som i matte! |
| `"Ola"` | Verdien som lagres |

Når vi skriver `navn` uten anførselstegn, betyr det «verdien som ligger i variabelen `navn`». Med anførselstegn, `"navn"`, er det bare teksten *navn*.

```js
let navn = "Ola";
console.log(navn);    // Ola
console.log("navn");  // navn
```

## Hvorfor bruke variabler?

- **Gjenbruk:** Du skriver verdien én gang og bruker den mange steder.
- **Endringer:** Må verdien endres, endrer du den bare ett sted.
- **Lesbarhet:** `pris * antall` er mye lettere å forstå enn `49 * 3`.

## `let` – verdier som kan endres

En variabel laget med `let` kan få en ny verdi senere. Da skriver vi **ikke** `let` på nytt:

```js
let poeng = 0;
console.log(poeng);  // 0

poeng = 10;          // Ny verdi, uten let
console.log(poeng);  // 10

poeng = poeng + 5;   // Ta verdien som ligger i poeng, legg til 5, og lagre resultatet i poeng
console.log(poeng);  // 15
```

Den siste linjen ser rar ut hvis du tenker på `=` som «er lik». Les den heller slik: *«regn ut `poeng + 5`, og legg svaret i `poeng`»*. Høyresiden regnes alltid ut først.

## `const` – verdier som ikke skal endres

`const` (kort for *constant*) lager en variabel som ikke kan få en ny verdi:

```js
const fodselsaar = 2009;
fodselsaar = 2010;   // ❌ TypeError: Assignment to constant variable.
```

**Hvilken skal du velge?** Bruk `const` når verdien ikke skal endres (et fødselsår, en pris, en regel). Bruk `let` når verdien skal endres underveis (poeng, alder, antall forsøk). Er du usikker, start med `const`. Får du feilmelding fordi du prøver å endre den, bytter du til `let`.

> Du vil kanskje se `var` i gammel kode på nettet. Det er en eldre måte å lage variabler på. Bruk `let` og `const`.

## Regler for navn

**Må:**

- Navn kan inneholde bokstaver, tall, `_` og `$`.
- Navn kan **ikke** starte med et tall: `1navn` er ikke lov.
- Navn kan ikke ha mellomrom: `mitt navn` er ikke lov.
- Store og små bokstaver er forskjellige: `navn` og `Navn` er to ulike variabler.
- Du kan ikke bruke ord JavaScript allerede bruker, som `let`, `const` eller `if`.

**Bør:**

- Bruk navn som forteller hva variabelen inneholder: `alder` er bedre enn `a` eller `x`.
- Skriv navn med flere ord i *camelCase*: første ord med liten bokstav, og stor forbokstav på resten: `antallElever`, `fodselsaar`, `harBillett`.
- Unngå æ, ø og å i navn. Det fungerer, men kan skape problemer andre steder. Skriv `fodselsaar` i stedet for `fødselsår`.

## Vanlige feil

```js
let alder = 16;
let alder = 17;        // ❌ SyntaxError: Identifier 'alder' has already been declared
alder = 17;            // ✅ Uten let når variabelen allerede finnes

console.log(Alder);    // ❌ ReferenceError: Alder is not defined (stor A!)

console.log(by);       // ❌ ReferenceError: Cannot access 'by' before initialization
let by = "Bergen";     //    Variabelen må lages før den brukes
```

> **Viktig når du løser oppgaver:** Alle oppgavene i et tema ligger i samme fil. Har du allerede laget en variabel som heter `tall` i oppgave 1, kan du ikke lage en ny `tall` i oppgave 5. Da får du `SyntaxError: Identifier 'tall' has already been declared`, og **ingenting** i filen kjører, heller ikke oppgavene som var riktige. Feilmeldingen sier hvilket navn og hvilken linje det gjelder. Velg et nytt navn, for eksempel `tall2` eller `brukerTall`.

## Oppsummering

- En variabel er et navn som peker på en verdi.
- `let` lager en variabel som kan endres. `const` lager en som ikke kan endres.
- `=` betyr «legg verdien inn i», ikke «er lik».
- Bruk beskrivende navn i camelCase.
