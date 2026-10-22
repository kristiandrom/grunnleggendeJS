# Tema 7 – Funksjoner

En **funksjon** er en navngitt bit kode som du kan kjøre så mange ganger du vil, bare ved å skrive navnet. Du har allerede brukt mange funksjoner: `console.log()`, `prompt()`, `Number()` og `Math.random()`. Nå skal du lage dine egne.

## Hvorfor funksjoner?

- **Unngå gjentakelse:** Skriv koden én gang, bruk den mange steder.
- **Dele opp problemer:** Et stort program blir lettere å forstå når det er delt i små biter med gode navn.
- **Rette feil ett sted:** Er det en feil i funksjonen, retter du den der, og alle steder som bruker den blir riktige.

## Lage og kalle en funksjon

```js
// 1. Lage (definere) funksjonen
function siHei() {
    console.log("Hei!");
    console.log("Velkommen til kurset.");
}

// 2. Kalle (kjøre) funksjonen
siHei();
siHei();
```

- `function` betyr «nå lager jeg en funksjon».
- `siHei` er navnet. Bruk et verb som forteller hva funksjonen *gjør*: `skrivUt`, `regnUt`, `sjekkPassord`.
- `{ }` inneholder koden som kjøres.
- **Koden inni kjører ikke før funksjonen kalles!** Å definere en funksjon er som å skrive en oppskrift. Å kalle den er å lage maten.
- For å kalle funksjonen skriver du navnet med `()` etter.

## Parametere: gi funksjonen informasjon

En funksjon blir mye mer nyttig når den kan jobbe med ulike verdier:

```js
function hilsPaa(navn) {
    console.log(`Hei, ${navn}!`);
}

hilsPaa("Ola");    // Hei, Ola!
hilsPaa("Kari");   // Hei, Kari!
```

`navn` er en **parameter**, en variabel som bare finnes inni funksjonen. Verdien du skriver i parentesene når du kaller funksjonen (`"Ola"`), kalles et **argument**. Den blir lagt i parameteren.

Du kan ha flere parametere. Rekkefølgen bestemmer hvilket argument som havner hvor:

```js
function presenter(navn, alder) {
    console.log(`${navn} er ${alder} år.`);
}

presenter("Ola", 16);   // Ola er 16 år.
presenter(16, "Ola");   // 16 er Ola år.  (feil rekkefølge!)
```

## `return`: få et svar tilbake

Funksjonene over *skriver ut* noe. Ofte vil vi heller at funksjonen skal *gi tilbake* et svar, slik at vi kan bruke det videre:

```js
function leggSammen(a, b) {
    return a + b;
}

const svar = leggSammen(3, 4);
console.log(svar);                          // 7
console.log(leggSammen(10, 20) * 2);        // 60
```

`return` gjør to ting:

1. Sender verdien tilbake til der funksjonen ble kalt. Da kan vi lagre den i en variabel eller bruke den direkte.
2. Avslutter funksjonen med en gang. Kode etter `return` kjører ikke.

### `console.log` eller `return`?

Dette er en av de vanligste forvirringene:

```js
function dobbelLogg(tall) {
    console.log(tall * 2);
}

function dobbelReturn(tall) {
    return tall * 2;
}

const a = dobbelLogg(5);     // Skriver ut 10, men a blir undefined
const b = dobbelReturn(5);   // Skriver ikke ut noe, men b blir 10
```

`console.log` viser noe til *mennesket* som ser på skjermen. `return` gir en verdi til *resten av programmet*. Funksjoner som regner ut noe, bør nesten alltid bruke `return`.

### `return` med `if`

Siden `return` avslutter funksjonen, kan vi bruke det til å svare tidlig:

```js
function erMyndig(alder) {
    if (alder >= 18) {
        return true;
    }
    return false;
}
```

Eller enda kortere, fordi `alder >= 18` allerede er `true` eller `false`:

```js
function erMyndig(alder) {
    return alder >= 18;
}
```

## Variabler inni funksjoner

Variabler som lages inni en funksjon (og parametere), finnes bare der:

```js
function regnUt() {
    const resultat = 42;
}

regnUt();
console.log(resultat);   // ❌ ReferenceError: resultat is not defined
```

Det er en fordel: Ulike funksjoner kan bruke de samme variabelnavnene uten å ødelegge for hverandre. Vil du ha verdien ut av funksjonen, bruker du `return`.

## Arrow functions

Du vil ofte se en kortere skrivemåte i moderne JavaScript:

```js
const leggSammen = (a, b) => {
    return a + b;
};
```

Den gjør det samme som `function leggSammen(a, b) { ... }`. Det er lurt å kjenne igjen `=>`, men i dette kurset bruker vi `function`. Det er lettere å lese når man er ny.

## Vanlige feil

```js
siHei;                  // ❌ Mangler (). Funksjonen kalles ikke.
function (navn) { }     // ❌ Funksjonen mangler navn
leggSammen(2);          // ⚠️ b blir undefined, og svaret blir NaN
```

## Oppsummering

- `function navn(parametere) { ... }` lager en funksjon. `navn(argumenter)` kaller den.
- Koden i en funksjon kjører bare når funksjonen kalles.
- Parametere er variabler som får verdi fra argumentene.
- `return` gir en verdi tilbake og avslutter funksjonen.
- `console.log` viser noe for mennesker. `return` gir en verdi til programmet.
