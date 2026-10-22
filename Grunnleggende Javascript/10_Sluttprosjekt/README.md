# Tema 10 – Sluttprosjekt

Nå skal du bruke alt du har lært til å lage et helt program. Velg **ett** av prosjektene under. Start i `prosjekt.js`.

## Krav til alle prosjektene

Programmet ditt skal bruke:

- [ ] variabler med gode navn (tema 1)
- [ ] input fra brukeren med `prompt()` og output med template literals (tema 2)
- [ ] riktige datatyper, og `Number()` der det trengs (tema 3)
- [ ] betingelser med `if`/`else` (tema 5)
- [ ] minst én løkke (tema 6)
- [ ] minst tre egne funksjoner, der minst én bruker `return` (tema 7)
- [ ] et array med objekter (tema 8 og 9)
- [ ] kommentarer som forklarer de viktigste delene av koden

## Prosjekt A: Quiz

Lag en quiz om et tema du liker.

1. Spørsmålene lagres i et array med objekter, f.eks. `{ sporsmaal: "...", svar: "..." }`.
2. Programmet stiller spørsmålene ett for ett og sier om svaret er riktig eller feil.
3. Til slutt skrives antall poeng ut, og en melding som avhenger av hvor bra det gikk.

**Videre:** Godta svar med både store og små bokstaver. Legg til flervalg (A/B/C). Spør om brukeren vil spille igjen.

## Prosjekt B: Handleliste med meny

Lag et program der brukeren styrer handlelisten sin fra en meny:

```
--- HANDLELISTE ---
1. Vis listen
2. Legg til vare
3. Fjern vare
4. Vis totalpris
5. Avslutt
Velg: _
```

1. Hver vare er et objekt med navn, pris og antall.
2. Menyen vises på nytt helt til brukeren velger «Avslutt».
3. «Vis totalpris» regner ut pris × antall for alle varene.

**Videre:** Gi beskjed hvis brukeren prøver å fjerne en vare som ikke finnes. Øk antallet hvis brukeren legger til en vare som allerede står på listen.

## Prosjekt C: Terningspill

Lag et terningspill for to spillere.

1. Hver spiller er et objekt med navn og poeng.
2. Spillerne kaster terning annenhver gang (trykk Enter for å kaste).
3. Den som først når 30 poeng, vinner. Slår du en ener, mister du alle poengene fra den runden.

**Videre:** La spilleren velge om de vil kaste en gang til eller stoppe og ta vare på poengene sine. Støtt flere enn to spillere.

## Slik jobber du

1. **Planlegg først.** Skriv i kommentarer hva programmet skal gjøre, steg for steg, før du skriver kode.
2. **Bygg litt og litt.** Få én liten del til å virke før du går videre. Kjør programmet ofte.
3. **Lag funksjoner.** Hvis en del av koden gjør én tydelig ting, gjør den til en funksjon med et godt navn.
4. **Test rare input.** Hva skjer hvis brukeren skriver tekst der du venter et tall, eller ingenting?
5. **Står du fast?** Les feilmeldingen, bruk `console.log()` for å se hva variablene dine inneholder, og gå tilbake til temaet det gjelder.
