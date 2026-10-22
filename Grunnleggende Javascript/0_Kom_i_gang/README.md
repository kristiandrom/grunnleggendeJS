# Tema 0 – Kom i gang

## Hva er et program?

Et program er en liste med instruksjoner som datamaskinen følger, én etter én, ovenfra og ned. Datamaskinen er veldig rask, men den er ikke smart. Den gjør *nøyaktig* det du skriver, ikke det du mente. Derfor må vi være presise.

Vi skal skrive programmer i språket **JavaScript**, og vi kjører dem med et verktøy som heter **Node.js**.

## Ditt første program

Lag en fil som heter `hei.js` og skriv dette i den:

```js
console.log("Hei, verden!");
```

Lagre filen. Åpne terminalen i VS Code og skriv:

```
node 0_Kom_i_gang/hei.js
```

Da skal du se dette i terminalen:

```
Hei, verden!
```

Gratulerer, du har skrevet og kjørt ditt første program! 🎉

> **Tips:** `node` kjører filen du skriver etter. Stien (`0_Kom_i_gang/hei.js`) forteller hvilken mappe filen ligger i. Du kan trykke **Tab** for å fullføre filnavn automatisk, og **pil opp** for å hente forrige kommando.

## `console.log()`

`console.log()` skriver ut det du putter inni parentesene til terminalen (også kalt *konsollen*). Det er det viktigste verktøyet ditt, både for å vise resultater og for å finne ut hva programmet ditt egentlig gjør.

```js
console.log("Dette er tekst");   // Tekst må stå i anførselstegn
console.log(42);                 // Tall skrives uten anførselstegn
console.log(2 + 3);              // Skriver ut 5, fordi JavaScript regner ut svaret først
console.log("2 + 3");            // Skriver ut 2 + 3, fordi det er tekst
```

Legg merke til:

- Tekst står i anførselstegn: `"slik"` eller `'slik'`.
- Hver instruksjon avsluttes med semikolon `;`. JavaScript klarer seg ofte uten, men det er en god vane.
- Programmet kjører linje for linje, ovenfra og ned.

## Kommentarer

En kommentar er tekst i koden som datamaskinen hopper over. Den er skrevet for mennesker, for eksempel for å forklare hva koden gjør.

```js
// Dette er en kommentar på én linje

/*
   Dette er en kommentar
   over flere linjer
*/

console.log("Denne linjen kjører"); // Kommentarer kan også stå på slutten av en linje
// console.log("Denne linjen kjører ikke");
```

> **Tips:** I VS Code kan du markere en linje og trykke **Ctrl + /** (Windows) eller **Cmd + /** (Mac) for å gjøre den om til en kommentar. Det er nyttig når du vil «skru av» en linje for å teste noe.

## Feilmeldinger er vennen din

Alle som programmerer gjør feil hele tiden. Det viktige er å kunne lese feilmeldingen. Se på dette programmet:

```js
console.log("Hei";
```

Når vi kjører det, får vi:

```
/.../feil.js:1
console.log("Hei";
            ^^^^^

SyntaxError: missing ) after argument list
```

Feilmeldingen forteller oss tre ting:

1. **Hvor** feilen er: filen `feil.js`, linje `1`.
2. **Hva slags** feil det er: `SyntaxError` betyr at koden er skrevet feil, litt som en skrivefeil i en setning.
3. **Hva** som er galt: `missing ) after argument list` betyr at det mangler en `)`.

Vanlige feil i starten:

| Feilmelding | Betyr som regel |
|---|---|
| `SyntaxError: missing ) after argument list` | Du har glemt en parentes eller et anførselstegn. |
| `SyntaxError: Invalid or unexpected token` | Et anførselstegn er ikke lukket, eller du har brukt et tegn JavaScript ikke forstår. |
| `ReferenceError: x is not defined` | Du bruker et navn JavaScript ikke kjenner. Ofte en skrivefeil, eller at du har glemt anførselstegn rundt tekst. |
| `TypeError: console.Log is not a function` | Du har skrevet noe nesten riktig. JavaScript skiller mellom store og små bokstaver: `log` er ikke det samme som `Log`. |

**Slik gjør du når noe ikke virker:**

1. Les feilmeldingen. Hvilken linje? Hvilken type feil?
2. Gå til den linjen og se nøye etter. Feilen er ofte på linjen før.
3. Gjør én endring og kjør på nytt.

## Oppsummering

- Et program er instruksjoner som kjøres ovenfra og ned.
- Du kjører et program med `node filnavn.js`.
- `console.log()` skriver ut til terminalen.
- Kommentarer (`//` og `/* */`) er for mennesker og blir ikke kjørt.
- Feilmeldinger forteller *hvor* og *hva* som er galt.

Nå: kjør `eksempler.js`, og gjør `oppgaver.js`.
