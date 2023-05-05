let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 1 - Acesse as chaves nome, sobrenome e titulo – esta encontra-se dentro da chave livrosFavoritos – e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
let pessoa = leitor.nome;
let lastName = leitor.sobrenome
let title = leitor.livrosFavoritos[0].titulo;
console.log(`O livro favorito de ${pessoa} ${lastName} se chama "${title}"`);
console.log('----------------------------------------------------------------------')

// 2 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
    },
);
console.log(leitor)
console.log('-----------------------------------------------------------------------')

// 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.
let quantidade = leitor.livrosFavoritos.length;
console.log(`${pessoa} tem ${quantidade} livros favoritos.`)