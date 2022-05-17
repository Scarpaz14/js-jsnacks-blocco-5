// Crea un array composto da 10 automobili.
// Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

// Infine stampa separatamente i 3 array.


const auto = [
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "diesel"
    },
    {
        marca: "ford",
        modello: 500,
        alimentazione: "benzina"
    },
    {
        marca: "toyota",
        modello: 500,
        alimentazione: "gpl"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "gpl"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "benzina"
    },
    {
        marca: "fiat",
        modello: 500,
        alimentazione: "diesel"
    },
]



const macchineBenzina = auto.filter((elements) => elements.alimentazione == "benzina");
const macchineDiesel = auto.filter((elements) => elements.alimentazione == "diesel");
const altro = auto.filter((elements) => elements.alimentazione !== "diesel" && elements.alimentazione !== "benzina");

console.log(macchineBenzina, macchineDiesel, altro)