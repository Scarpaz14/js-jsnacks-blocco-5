
const zucchina = [
    {
        varieta: verde,
        peso: 3,
        lunghezza: 10,
    },
    {
        varieta: blu,
        peso: 6,
        lunghezza: 10,
    },
    {
        varieta: rossa,
        peso: 5,
        lunghezza: 10,
    },
    {
        varieta: gialla,
        peso: 3,
        lunghezza: 10,
    },
    {
        varieta: arancione,
        peso: 6,
        lunghezza: 10,
    },
    {
        varieta: rosa,
        peso: 7,
        lunghezza: 10,
    },
    {
        varieta: lilla,
        peso: 2,
        lunghezza: 10,
    },
    {
        varieta: viola,
        peso: 1,
        lunghezza: 10,
    },
    {
        varieta: azzurra,
        peso: 2,
        lunghezza: 10,
    },
    {
        varieta: gialla,
        peso: 5,
        lunghezza: 10,
    }
]

let pesoTotale =0;

for ( let i=0; i <zucchina.length; i++){
    pesoTotale =+ zucchina[i].peso;
}

console.log(pesoTotale + "g");