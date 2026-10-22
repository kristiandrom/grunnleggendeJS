# Tema 4 – Operatorer

En *operator* er et tegn som gjør noe med verdier, som `+` eller `>`. Vi ser på tre grupper: regneoperatorer, sammenligningsoperatorer og logiske operatorer.

## 1. Regneoperatorer

| Operator | Betydning | Eksempel | Resultat |
|---|---|---|---|
| `+` | Pluss | `10 + 3` | `13` |
| `-` | Minus | `10 - 3` | `7` |
| `*` | Gange | `10 * 3` | `30` |
| `/` | Dele | `10 / 4` | `2.5` |
| `%` | Rest etter heltallsdivisjon | `10 % 3` | `1` |
| `**` | Opphøyd i | `2 ** 3` | `8` |

Rekkefølgen er som i matte: `**` først, så `*`, `/` og `%`, og til slutt `+` og `-`. Bruk parenteser for å bestemme selv:

```js
console.log(2 + 3 * 4);     // 14
console.log((2 + 3) * 4);   // 20
```

### Rest: `%`

`%` gir deg det som blir *til overs* når du deler med hele tall. 10 delt på 3 er 3, med 1 til overs. Derfor er `10 % 3` lik `1`.

Den er mer nyttig enn den ser ut:

- **Partall eller oddetall?** Et tall er partall hvis `tall % 2` er `0`.
- **Delelig med?** `15 % 5` er `0`, så 15 er delelig med 5.
- **Fordele ting:** 23 elever i grupper på 4 gir `23 % 4 = 3` elever til overs.

### Kortversjoner for å endre en variabel

Det er veldig vanlig å endre en variabel ut fra verdien den allerede har. Derfor finnes det kortere måter å skrive det på:

| Lang versjon | Kort versjon |
|---|---|
| `poeng = poeng + 5` | `poeng += 5` |
| `poeng = poeng - 2` | `poeng -= 2` |
| `poeng = poeng * 2` | `poeng *= 2` |
| `poeng = poeng + 1` | `poeng++` |
| `poeng = poeng - 1` | `poeng--` |

`++` og `--` blir viktige når vi kommer til løkker i tema 6.

## 2. Sammenligningsoperatorer

En sammenligning gir alltid svaret `true` eller `false`, altså en boolean.

| Operator | Betydning | Eksempel | Resultat |
|---|---|---|---|
| `===` | Er lik | `5 === 5` | `true` |
| `!==` | Er ikke lik | `5 !== 3` | `true` |
| `>` | Større enn | `5 > 3` | `true` |
| `<` | Mindre enn | `5 < 3` | `false` |
| `>=` | Større enn eller lik | `5 >= 5` | `true` |
| `<=` | Mindre enn eller lik | `5 <= 4` | `false` |

Du kan lagre svaret i en variabel:

```js
const alder = 16;
const erMyndig = alder >= 18;
console.log(erMyndig);   // false
```

### `=` eller `===`?

- `=` **setter** en verdi: `let x = 5;`
- `===` **sjekker** om to verdier er like: `x === 5`

Å blande disse er en av de vanligste feilene.

### `===` eller `==`?

Du vil se `==` (to likhetstegn) i noe kode. Den gjør om datatypene før den sammenligner, og det gir rare resultater:

```js
console.log(5 == "5");    // true  😬
console.log(5 === "5");   // false ✅ (tall og tekst er ikke det samme)
```

**Bruk alltid `===` og `!==`.**

Tekst kan også sammenlignes. Store og små bokstaver er forskjellige:

```js
console.log("hei" === "hei");   // true
console.log("Hei" === "hei");   // false
```

## 3. Logiske operatorer

Logiske operatorer kombinerer flere `true`/`false`-verdier.

| Operator | Navn | Betydning |
|---|---|---|
| `&&` | OG | `true` bare hvis **begge** sider er `true` |
| `\|\|` | ELLER | `true` hvis **minst én** side er `true` |
| `!` | IKKE | Snur verdien: `!true` er `false` |

Tenk på det som regler:

```js
const alder = 17;
const harBillett = true;
const erVIP = false;

// Kommer inn hvis 18 år OG har billett
const kommerInn = alder >= 18 && harBillett;          // false

// Gratis hvis under 12 ELLER over 67
const gratis = alder < 12 || alder > 67;              // false

// Trenger billett hvis IKKE VIP
const trengerBillett = !erVIP;                        // true
```

Sannhetstabell for `&&` og `||`:

| a | b | `a && b` | `a \|\| b` |
|---|---|---|---|
| true | true | true | true |
| true | false | false | true |
| false | true | false | true |
| false | false | false | false |

### Sjekke om et tall er mellom to verdier

I matte skriver vi `13 ≤ alder ≤ 19`. I JavaScript må det deles i to sammenligninger med `&&`:

```js
const erTenaaring = alder >= 13 && alder <= 19;
```

> ❌ `13 <= alder <= 19` gir **ikke** en feilmelding, men gir feil svar. Bruk `&&`.

## Oppsummering

- `+ - * / % **` regner. `%` gir resten og er nyttig for å sjekke partall.
- `+=`, `-=`, `++` og `--` er kortversjoner for å endre en variabel.
- `=== !== > < >= <=` sammenligner og gir `true` eller `false`.
- Bruk `===`, ikke `==`.
- `&&` (og), `||` (eller) og `!` (ikke) kombinerer betingelser.
