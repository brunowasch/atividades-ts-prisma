interface Pessoa {
  nome: string;
  email?: string;
  idade: number;
}

const user: Pessoa = {
    nome: "Bruno",
    email: "bruno-6575869@estudante.rs.gov.br",
    idade: 17
}

console.log(user);