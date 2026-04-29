const soma = (x, y) => `A soma de ${x} + ${y} é ${x + y}`;

console.log(soma(5, 5))

const hello_world = () => "hello world";

console.log(hello_world())

const cumprimenta = (nome) => `Ola ${nome} `;
console.log(cumprimenta("Joao"))



console.log("inicio")

setTimeout(function(){
    console.log("texto do meio")
}, 2000)

console.log("final")


console.log('------------------------------')

let produtos = [
    {nome: "teclado", preco: 300},
    {nome: "Mouse", preco: 220},
    {nome: "Memaria RAM", preco: 1159.9}
]

// printa na tela
produtos.forEach(produto => console.log(`Produto: ${produto.nome}`))

//map para alterar elemento

const produtosComDesconto = produtos.map(produto => produto.preco * 0.9)

produtosComDesconto.forEach(produto => console.log(`Produto: ${produto.preco}`))

console.log(produtosComDesconto)

//flitrar

const maisBaratos = produtos.filter(produto => produto.preco < 400)
console.log(maisBaratos)

//somar com reduce

const valorTotal = produtos.reduce((total, produto) => total + produto.preco,0)

console.log(valorTotal)