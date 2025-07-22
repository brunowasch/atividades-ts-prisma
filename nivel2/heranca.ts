import { Carro } from './classe';

class CarroEletrico extends Carro {
    autonomiaBateria: number;

    constructor (
        marca: String,
        modelo: String,
        ano: number,
        autonomiaBateria: number
    ) {
        super(marca, modelo, ano);
        this.autonomiaBateria = autonomiaBateria;
    }
    obterDetalhes(): String {
        return `Carro elétrico cadastrado! ${super.obterDetalhes()}, Autonomia da bateria: ${this.autonomiaBateria}km`;
    }
}

const carroEletrico = new CarroEletrico("Chevrolet", "Bolt EV", 2023, 416);
console.log(carroEletrico.obterDetalhes());