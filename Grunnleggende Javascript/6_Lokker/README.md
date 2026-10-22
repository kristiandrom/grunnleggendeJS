# Tema 6 – Løkker

Tenk deg at du skal skrive ut tallene fra 1 til 100. Du *kunne* skrevet 100 `console.log()`-linjer, men det er kjedelig, og hva om det skulle vært 1 000 000? En **løkke** (engelsk: *loop*) gjentar kode så mange ganger du vil.

## `for`-løkken

Bruk `for` når du vet hvor mange ganger noe skal gjentas.

```js
for (let i = 1; i <= 5; i++) {
    console.log(`Runde ${i}`);
}
```

```
Runde 1
Runde 2
Runde 3
Runde 4
Runde 5
```

Inni parentesene står tre deler, skilt med semikolon:

```
for ( start ; betingelse ; oppdatering ) {
    kode som gjentas
}
```

| Del | I eksempelet | Betydning |
|---|---|---|
| Start | `let i = 1` | Lag en tellevariabel. Skjer **én gang**, helt i starten. |
| Betingelse | `i <= 5` | Sjekkes **før hver runde**. Er den `true`, kjøres koden. Er den `false`, er løkken ferdig. |
| Oppdatering | `i++` | Skjer **etter hver runde**. Her øker `i` med 1. |

Slik går det steg for steg:

| Steg | `i` | `i <= 5`? | Hva skjer |
|---|---|---|---|
| 1 | 1 | true | Skriver «Runde 1», så blir `i` lik 2 |
| 2 | 2 | true | Skriver «Runde 2», så blir `i` lik 3 |
| ... | ... | ... | ... |
| 5 | 5 | true | Skriver «Runde 5», så blir `i` lik 6 |
| 6 | 6 | **false** | Løkken stopper |

> `i` er et vanlig navn på tellevariabelen (fra *index*), men du kan kalle den hva du vil.

### Andre måter å telle på

```js
// Fra 0 til 4 (veldig vanlig, særlig med arrays i tema 8)
for (let i = 0; i < 5; i++) { }

// Telle ned
for (let i = 10; i >= 1; i--) { }

// Hoppe to og to
for (let i = 0; i <= 20; i += 2) { }
```

## Samle opp et resultat

Et veldig vanlig mønster er å ha en variabel *utenfor* løkken som oppdateres hver runde:

```js
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`Summen av 1 til 100 er ${sum}`);   // 5050
```

Variabelen `sum` må lages **før** løkken. Lager du den inni løkken, starter den på 0 igjen hver runde.

## Løkker og betingelser sammen

Inni en løkke kan du bruke alt du har lært, også `if`:

```js
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} er et partall`);
    }
}
```

## `while`-løkken

Bruk `while` når du **ikke** vet på forhånd hvor mange ganger noe skal gjentas, men vet *når* det skal stoppe.

```js
let penger = 100;
let uker = 0;

while (penger < 1000) {
    penger += 150;
    uker++;
}

console.log(`Etter ${uker} uker har du ${penger} kr.`);
```

`while` sjekker betingelsen før hver runde, akkurat som `for`. Så lenge den er `true`, kjører koden.

`while` passer veldig godt sammen med input:

```js
let svar = "";

while (svar !== "stopp") {
    svar = prompt("Skriv noe (eller 'stopp'): ");
    console.log(`Du skrev: ${svar}`);
}
```

### ⚠️ Evige løkker

Hvis betingelsen aldri blir `false`, går løkken for alltid:

```js
let i = 0;
while (i < 5) {
    console.log(i);
    // Vi glemte i++, så i er alltid 0 og løkken stopper aldri!
}
```

Hvis programmet ditt «henger» eller spyr ut tekst uten å stoppe: trykk **Ctrl + C** i terminalen. Sjekk så at noe inni løkken faktisk endrer betingelsen.

## `break` og `continue`

- `break` avslutter hele løkken med en gang.
- `continue` hopper over resten av *denne* runden og går videre til neste.

```js
for (let i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;   // Hopper over 3
    }
    if (i === 6) {
        break;      // Stopper helt ved 6
    }
    console.log(i);
}
// Skriver ut: 1 2 4 5
```

## Tilfeldige tall

Spill og simuleringer trenger ofte tilfeldige tall:

```js
const terning = Math.floor(Math.random() * 6) + 1;   // Et tall fra 1 til 6
```

Slik virker det:

- `Math.random()` gir et tilfeldig desimaltall fra 0 opp til (men ikke med) 1, f.eks. `0.73`.
- `* 6` gir et tall fra 0 opp til 6, f.eks. `4.38`.
- `Math.floor()` runder ned til nærmeste hele tall, f.eks. `4`. Nå har vi 0–5.
- `+ 1` gir 1–6.

Generelt: `Math.floor(Math.random() * antallMuligheter) + laveste`.

## Oppsummering

- `for (start; betingelse; oppdatering)` brukes når du vet hvor mange ganger.
- `while (betingelse)` brukes når du ikke vet hvor mange ganger.
- Lag variabler som skal samle opp resultater *før* løkken.
- Pass på at betingelsen en gang blir `false`. Ctrl + C stopper en evig løkke.
- `break` avslutter løkken, `continue` hopper til neste runde.
