class carro {
    constructor(marca, modelo, preco, IPVA) {
        this.marca  = marca;
        this.modelo = modelo;
        this.preco  = preco;
        this.IPVA   = IPVA;
    };

    modelocarro(){
        console.log(`modelo do carro é: ${this.modelo} \nda marca: ${this.marca}`);
    
    }
    somBuzina(){
        return 'Bip Bip';
    }
}
let car1 = new carro('Chevrolet', 'Camaro 2012', 198.762, true);
let car2 = new carro('Fiat', 'uno', 25.000, true);

car1.modelocarro();

console.log(car1.somBuzina);
