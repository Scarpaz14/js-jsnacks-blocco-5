const zucchineLunghe = [
    {
        varieta: 'verde',
        peso: 3,
        lunghezza: 10,
    },
    {
        varieta: 'blu',
        peso: 6,
        lunghezza: 8,
    },
    {
        varieta: 'rossa',
        peso: 5,
        lunghezza: 5,
    },
    {
        varieta:' gialla',
        peso: 3,
        lunghezza: 4,
    },
    {
        varieta: 'arancione',
        peso: 6,
        lunghezza: 7,
    },
]

    const zucchineCorte=[

    {
        varieta: 'rosa',
        peso: 7,
        lunghezza: 16,
    },
    {
        varieta:' lilla',
        peso: 2,
        lunghezza: 18,
    },
    {
        varieta: 'viola',
        peso: 1,
        lunghezza: 19,
    },
    {
        varieta: 'azzurra',
        peso: 2,
        lunghezza: 20,
    },
    {
        varieta: 'gialla',
        peso: 5,
        lunghezza: 17,
    }
]

let pesoZucchineLunghe =0;

for ( let i=0; i <zucchineLunghe.length; i++){
    pesoZucchineLunghe += zucchineLunghe[i].peso;
}

console.log(pesoZucchineLunghe + "g");


let pesozucchineCorte =0;

for ( let i=0; i <zucchineCorte.length; i++){
    pesozucchineCorte += zucchineCorte[i].peso;
}

console.log(pesozucchineCorte + "g");