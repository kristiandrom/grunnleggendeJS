# Grunnleggende programmering i JavaScript – VG1

Dette er et selvstendig kurs for deg som aldri har programmert før. Når du er ferdig, har du grunnlaget du trenger for å fortsette med programmering på VG2.

## Hvordan kurset er bygd opp

Hvert tema ligger i sin egen mappe og har tre filer:

| Fil | Hva den er |
|---|---|
| `README.md` | Forklaringen. Les den først. |
| `eksempler.js` | Kode som viser det du nettopp leste om. Kjør den og les kommentarene. |
| `oppgaver.js` | Oppgavene du skal løse. Skriv koden din rett i filen. |

Oppgavene er delt inn i nivåer:

- 🟢 **Forutsi**: Les koden og gjett hva som skrives ut *før* du kjører den.
- 🟡 **Finn feilen**: Koden virker ikke. Finn ut hvorfor og rett den.
- 🟠 **Endre**: Ta kode som virker og få den til å gjøre noe nytt.
- 🔴 **Skriv selv**: Lag koden fra bunnen av.
- ⭐ **Utfordring**: For deg som vil ha mer.

Det finnes ofte mange riktige løsninger. Læreren har løsningsforslag og deler dem når dere har prøvd selv.

## Temaene

| # | Tema | Du lærer |
|---|---|---|
| 0 | [Kom i gang](0_Kom_i_gang/README.md) | Kjøre kode, `console.log`, kommentarer, lese feilmeldinger |
| 1 | [Variabler](1_Variabler/README.md) | `let`, `const`, gode navn |
| 2 | [Output og input](2_Output_og_input/README.md) | Skrive ut tekst pent, template literals, spørre brukeren |
| 3 | [Datatyper](3_Datatyper/README.md) | Tekst, tall, boolean, `undefined`, `null`, `typeof` |
| 4 | [Operatorer](4_Operatorer/README.md) | Regne, sammenligne, `&&`, `\|\|`, `!` |
| 5 | [Betingelser](5_Betingelser/README.md) | `if`, `else if`, `else`, `switch` |
| 6 | [Løkker](6_Lokker/README.md) | `for`, `while`, `break`, `continue` |
| 7 | [Funksjoner](7_Funksjoner/README.md) | Lage egne funksjoner, parametere, `return` |
| 8 | [Arrays](8_Arrays/README.md) | Lister med data |
| 9 | [Objekter](9_Objekter/README.md) | Samle data som hører sammen |
| 10 | [Sluttprosjekt](10_Sluttprosjekt/README.md) | Bruk alt du har lært i ett program |

Ta temaene i rekkefølge. Hvert tema bygger på de forrige.

## Før du starter

1. Installer **Node.js** (LTS-versjonen) fra <https://nodejs.org>.
2. Installer **Visual Studio Code** fra <https://code.visualstudio.com>.
3. Åpne denne mappen (`VG1`) i VS Code.
4. Åpne terminalen i VS Code (menyen *Terminal → New Terminal*) og skriv:

   ```
   npm install
   ```

   Dette trenger du bare å gjøre én gang. Det installerer en liten pakke som gjør at programmene dine kan stille spørsmål til brukeren (tema 2).

Så starter du med [tema 0](0_Kom_i_gang/README.md).

## Videre på VG2

På VG2 repeterer dere tema 1–9 og går videre med JSON, filer, async/await, feilhåndtering og moduler.
