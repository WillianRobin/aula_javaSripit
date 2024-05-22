
let cel1 = {
    modelo: 'A11',
    marca: 'Samsung',
    preco: 700,
    memoria: '3GB',
};
// CLASS:

class Celular {
    constructor(modelo, marca, preco, memoria) {
        this.modelo = modelo;
        this.marca  = marca;
        this.preco  = preco;
        this.memoria    = memoria;
    }

    desbloquear() {
        console.log(`celular foi desbloqueado`);
    }
}

let cel2 = new Celular('S20', 'Samsung', 1800, '8GB')

console.log(cel1);
console.log(cel2.modelo);

// Métodos:

cel2.desbloquear();


console.log("---- ---- ---- ---- ---- ---- ----");
// Herança:

class celularGamer extends Celular {
    constructor(modelo, marca, memoria, tela, rgb) {
        super(modelo, marca, memoria);
        this.tela   = tela;
        this.rgb    = rgb;
    }
}

let celu1 = new celularGamer('POCO 6Pro', 'Xiaomi', '8GB', '120hz', false)

console.log(celu1);

console.log('---- ---- ---- ---- ---- ---- ----');

class GamerPremium extends celularGamer {
    constructor(modelo, marca, memoria, tela, rgb, cooler) {
        super(modelo, marca, memoria, tela, rgb);
        this.cooler = cooler;
    }
}

let celu2 = new GamerPremium('Red Magic Pro', 'Nubia', '24GB', '120hz', true, true);

console.log(celu2);