// Tema 5 – Eksempler
// Kjør filen med: node 5_Betingelser/eksempler.js


// ---------- if ----------

const alder = 20;

if (alder >= 18) {
    console.log("Du kan stemme ved valget.");
}
console.log("Denne linjen kjører alltid.");


// ---------- if ... else ----------

const harBillett = false;

if (harBillett) {
    console.log("Velkommen inn!");
} else {
    console.log("Du må kjøpe billett først.");
}


// ---------- if ... else if ... else ----------

const poeng = 72;

if (poeng >= 90) {
    console.log("Karakter 6");
} else if (poeng >= 75) {
    console.log("Karakter 5");
} else if (poeng >= 60) {
    console.log("Karakter 4");   // Denne kjører, og resten hoppes over
} else if (poeng >= 45) {
    console.log("Karakter 3");
} else if (poeng >= 30) {
    console.log("Karakter 2");
} else {
    console.log("Karakter 1");
}


// ---------- Kombinerte betingelser ----------

const elevAlder = 16;
const harForeldresamtykke = true;

if (elevAlder >= 18 || harForeldresamtykke) {
    console.log("Du kan bli med på turen.");
}


// ---------- if inni if ----------

const erLogget = true;
const erAdmin = false;

if (erLogget) {
    if (erAdmin) {
        console.log("Velkommen til adminpanelet.");
    } else {
        console.log("Du har ikke tilgang til adminpanelet.");
    }
} else {
    console.log("Du må logge inn først.");
}


// ---------- switch ----------

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


// ---------- Ternary ----------

const status = elevAlder >= 18 ? "myndig" : "ikke myndig";
console.log(`Du er ${status}.`);


// ---------- Med input fra brukeren ----------
// Fjern /* og */ for å prøve dette.
/*
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const svar = prompt("Liker du pizza? (ja/nei) ");

if (svar.toLowerCase() === "ja") {
    console.log("Samme her! 🍕");
} else if (svar.toLowerCase() === "nei") {
    console.log("Ok, mer til meg.");
} else {
    console.log("Jeg forstod ikke svaret ditt.");
}
*/
