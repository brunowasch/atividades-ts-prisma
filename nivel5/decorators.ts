function logTempoExecucao(target: any, key: string, descriptor: PropertyDescriptor) {
  const metodoOriginal = descriptor.value;
  descriptor.value = function (...args: any[]) {
    const inicio = Date.now();
    const resultado = metodoOriginal.apply(this, args);
    const fim = Date.now();
    console.log(`${key} executado em ${fim - inicio}ms`);
    return resultado;
  };
  return descriptor;
}

export class Carro {
  constructor(
    public marca: String,
    public modelo: String,
    public ano: number
  ) {}

  @logTempoExecucao
  obterDetalhes(): String {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
  }
}

const carro = new Carro("Volkswagen", "Fusca", 1975);
console.log("Carro Cadastrado!", carro.obterDetalhes());
