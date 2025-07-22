function retornarPrimeiro<T>(arr: T[]): T {
  return arr[0];
}

const numeros = [33, 44, 16];
const nomes = ['Max', 'Lewis', 'Charles'];

console.log(retornarPrimeiro(numeros)); 
console.log(retornarPrimeiro(nomes)); 
