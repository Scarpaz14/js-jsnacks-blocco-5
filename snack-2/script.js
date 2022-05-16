const zucchine= [
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

let zucchineCorte = [];
let zucchineLunghe = [];
let pesototale =0;
let pesoZucchinecorte = 0;
let pesoZucchinelunghe = 0;

for ( let i=0; i < zucchine.length; i++){
    pesototale += zucchine[i].peso;
    if (zucchine[i].lunghezza < 15){
        zucchineCorte.push(zucchine[i]);
        pesoZucchinecorte += pesototale;
    } else {
        zucchineLunghe.push(zucchine[i]);
        pesoZucchinelunghe += pesototale;
    }
}


console.log(pesoZucchinecorte);
console.log(pesoZucchinelunghe);



