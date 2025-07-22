export class Carro {
    constructor (
        public marca: String,
        public modelo: String,
        public ano: number
    ) {}
    obterDetalhes(): String{
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
}

const carro = new Carro("Volkswagen", "Fusca", 1975);
console.log("Carro Cadastrado!", carro.obterDetalhes())