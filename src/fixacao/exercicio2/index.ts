/* EXERCÍCIO DE FIXAÇÃO
Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui um 
autor e um texto. Abaixo, temos um exemplo de array de posts em JS!

Tendo isso em mente, faça o que se pede:

1. Crie um type para representar um post;
2. Utilize o tipo criado acima para fazer a tipagem do array posts;

*/

type TPost = {
  autor: string,
  texto: string
}

const posts: TPost[] = [
  {
    autor: 'Alvo Dumbledore',
    texto: 'Não vale a pena viver sonhando e se esquecer de viver'
  },
  {
    autor: 'Severo Snape',
    texto: 'Menos 10 pontos para Grifinória'
  },
  {
    autor: 'Hermione Granger',
    texto: 'É levi-ô-sa, não levio-sá!'
  },
  {
    autor: 'Dobby',
    texto: 'Dobby é um elfo livre!'
  },
  {
    autor: 'Lord Voldemort',
    texto: 'Avada Kedavra!'
  }
]

// 3. Analise a função buscarPostsPorAutor, escrita em JS:
//   a. Quais são as entradas e saídas dessa função? 
//   b. Faça a tipagem da função. type BirthDate = number | string | undefined;

// function user (name: string, birthDate: BirthDate){
//   //lógica aqui
// }

// function userProfile (name: string, age: number, birthDate: BirthDate){
//  //lógica aqui
// }

// //dessa forma, as funções podem receber a data de nascimento (birthDate) como
// //número ou string ou undefined, sem quebrar nosso código 🎆

function buscarPostsPorAutor(posts: TPost[], autorInformado: string): TPost[] {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
console.log(buscarPostsPorAutor(posts, "Dobby"))
console.log(buscarPostsPorAutor(posts, "Severo Snape"))