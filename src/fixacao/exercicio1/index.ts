//  EXERCÍCIO DE FIXAÇÃO
// 1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
//   a. nome, que é uma string;
//   b. idade, que é um número;
//   c. corFavorita, que é uma string.

type TPessoa = { 
  nome: string,
  idade: number,
  corFavorita: string
}

const pessoa: TPessoa = {
  nome: "Thamiris",
  idade: 32,
  corFavorita: "Vermelho"
}


// 2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima.
// Crie um type Pessoa para garantir
// que todos os objetos tenham as mesmas propriedades.

// type Pessoa = {
//   name: string,
//   age: number,
//   favoriteColor: string
// }
// 3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. 
// Utilize um enum para isso.
// Vermelho.
// Laranja.
// Amarelo.
// Verde.
// Azul.
// Anil (ou índigo)
// Violeta.

enum CORESDOARCOIRIS {

  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  INDIGO = "indigo",
  PURPLE = "purple"
}

type Pessoa = {
  name: string
  age: number
  favoriteColor: CORESDOARCOIRIS
}

const pessoa1: Pessoa ={
  name: "Vinicius",
  age: 32,
  favoriteColor: CORESDOARCOIRIS.INDIGO
}

const pessoa2: Pessoa = {
  name: "Vitor",
  age: 25,
  favoriteColor: CORESDOARCOIRIS.GREEN
}

const pessoa3: Pessoa = {
  name: "Karoline",
  age: 24,
  favoriteColor: CORESDOARCOIRIS.BLUE
}

console.log(pessoa)
console.log(pessoa1, pessoa2, pessoa3)
