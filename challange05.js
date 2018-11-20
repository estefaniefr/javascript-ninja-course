/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var variavel = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function retornaArray(arg) {
	return arg;
}


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
retornaArray()[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function retornaArrayComIndice(argArray, argPosicao) {
	return argArray[argPosicao];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var variavel2 = [1,2,3,4,5]; 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
retornaArray(variavel2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
	var book = {
		LivroUm: {
			quantidadePaginas: 100,
			autor: "eu",
			editora: "nos"
		},
		LivroDois: {
			quantidadePaginas: 200,
			autor: "eu 2",
			editora: "nos 2"
		},
		LivroTres: {
			quantidadePaginas: 300,
			autor: "eu 3",
			editora:"nos 3"
		}		
	};
	
	if(bookName != undefined) {	
	
		return book[bookName];
	}
	
	return book;
	
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
"O livro LivroUm tem " + book("LivroUm").quantidadePaginas + " páginas!"

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro LivroUm é " + book("LivroUm").autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro LivroUm foi publicado pela editora " + book("LivroUm").editora; 



