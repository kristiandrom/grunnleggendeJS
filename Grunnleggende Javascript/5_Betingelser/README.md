# Tema 5 – Betingelser

Til nå har programmene våre kjørt hver eneste linje, ovenfra og ned. Med **betingelser** kan programmet ta valg: kjøre noe kode *bare hvis* noe er sant.

## `if`

```js
const alder = 20;

if (alder >= 18) {
    console.log("Du kan stemme ved valget.");
}

console.log("Denne linjen kjører alltid.");
```

Slik leser du det: *«Hvis alder er 18 eller mer, så kjør koden inni krøllparentesene.»*

- Inni `( )` står **betingelsen**. Det er et uttrykk som blir `true` eller `false`, akkurat som sammenligningene i tema 4.
- Inni `{ }` står **kodeblokken** som kjøres hvis betingelsen er `true`.
- Er betingelsen `false`, hopper programmet over hele blokken.

> **Innrykk:** Koden inni `{ }` skrives med innrykk (4 mellomrom eller Tab). JavaScript bryr seg ikke om innrykk, men det gjør koden mye lettere å lese. I VS Code kan du høyreklikke og velge *Format Document* for å rydde automatisk.

## `if ... else`

`else` betyr «ellers». Koden der kjører når betingelsen er `false`.

```js
const harBillett = false;

if (harBillett) {
    console.log("Velkommen inn!");
} else {
    console.log("Du må kjøpe billett først.");
}
```

Nøyaktig én av blokkene kjører, aldri begge og aldri ingen.

> `if (harBillett)` er det samme som `if (harBillett === true)`. Når variabelen allerede er en boolean, trenger du ikke sammenligne den med `true`.

## `if ... else if ... else`

Når det er flere enn to muligheter:

```js
const poeng = 72;

if (poeng >= 90) {
    console.log("Karakter 6");
} else if (poeng >= 75) {
    console.log("Karakter 5");
} else if (poeng >= 60) {
    console.log("Karakter 4");
} else if (poeng >= 45) {
    console.log("Karakter 3");
} else if (poeng >= 30) {
    console.log("Karakter 2");
} else {
    console.log("Karakter 1");
}
```

JavaScript sjekker betingelsene **ovenfra og ned** og stopper ved den **første** som er sann. Med 72 poeng er `poeng >= 90` usann, `poeng >= 75` usann og `poeng >= 60` sann. Programmet skriver ut «Karakter 4» og hopper over resten.

Derfor er rekkefølgen viktig. Hvis vi hadde sjekket `poeng >= 30` først, ville alle med mer enn 30 poeng fått karakter 2!

## Kombinere betingelser

Her bruker vi de logiske operatorene fra tema 4:

```js
const alder = 16;
const harForeldresamtykke = true;

if (alder >= 18 || harForeldresamtykke) {
    console.log("Du kan bli med på turen.");
}

const erLogget = true;
const erAdmin = false;

if (erLogget && !erAdmin) {
    console.log("Du er logget inn som vanlig bruker.");
}
```

## if inni if

Du kan ha en `if` inni en annen. Det kalles *nøstet* (engelsk: *nested*).

```js
if (erLogget) {
    if (erAdmin) {
        console.log("Velkommen til adminpanelet.");
    } else {
        console.log("Du har ikke tilgang til adminpanelet.");
    }
} else {
    console.log("Du må logge inn først.");
}
```

Dette er nyttig når du må sjekke én ting før du sjekker den neste. Men prøv å ikke nøste for mange nivåer, for da blir koden vanskelig å lese.

## `switch`

Når du sammenligner **én** variabel med mange faste verdier, kan `switch` være ryddigere enn mange `else if`:

```js
const dag = "lørdag";

switch (dag) {
    case "lørdag":
    case "søndag":
        console.log("Helg! 🎉");
        break;
    case "fredag":
        console.log("Snart helg!");
        break;
    default:
        console.log("Vanlig ukedag.");
}
```

- `case` er en mulig verdi. Den sammenlignes med `===`.
- `break` avslutter switchen. **Glemmer du `break`, fortsetter programmet inn i neste `case`!** Noen ganger vil man det med vilje, som med lørdag og søndag over.
- `default` kjører hvis ingen `case` passer, litt som `else`.

## Ternary-operatoren (kort if/else)

Når du bare skal velge mellom to verdier, kan du skrive det kort:

```js
const alder = 16;
const status = alder >= 18 ? "myndig" : "ikke myndig";
console.log(status);   // ikke myndig
```

Les det som: *betingelse* `?` *verdi hvis sann* `:` *verdi hvis usann*. Det er greit å kjenne igjen, men en vanlig `if/else` er helt fin å bruke.

## Vanlige feil

```js
if (alder = 18) { }        // ❌ Ett likhetstegn SETTER verdien. Bruk ===
if (alder => 18) { }       // ❌ Skal være >=
if (alder >= 18); { }      // ❌ Semikolon etter ) avslutter if-en. Blokken kjører alltid!
if (svar === "Ja") { }     // ⚠️ Hvis brukeren skriver "ja", blir dette false
```

Det siste kan du løse ved å gjøre input om til små bokstaver: `svar.toLowerCase() === "ja"`.

## Oppsummering

- `if` kjører kode bare hvis betingelsen er `true`.
- `else` kjører når betingelsen er `false`.
- `else if` gir flere muligheter. Den første som er sann, vinner.
- Kombiner betingelser med `&&`, `||` og `!`.
- `switch` passer når én variabel skal sammenlignes med mange faste verdier. Husk `break`.
