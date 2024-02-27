import { produtos } from "../db/produtos.js";

let objResponse = {
    message: '',
    data: []
}

// Ao importar o módulo produto ele se comporat como  readOnly, ou seja, apenas leitura e no método remover
// removerTodoProduto() na linha 47 ao tentar setar produtos como vazio, pegamos o erro, pegamos o erro que não
// podemos setar em uma constante. Para realizarmos o remover desta forma, devemos declarar a variável dentro do escopo
// do arquivo como na linha 13 e não usar mais o import.

//  let produtos = []

export const produtoService = {
    buscarProdutos: (req, reply) => {
        return {
            qtd: produtos.length,
            data: produtos
    }
        // return data;
        // const text = "Screen is ready in\nPRODUTOS!"
        // reply.send(text);
    },
    buscarProdutoPorId: (req, reply) => {
        // reply.send("Screen is ready GET in\n ID DE PRODUTO.");
        let prodId = req.params.id
        let produto = produtos.find(p => p.id === parseInt(prodId))
        console.log(produto)
        return produto
    },

    criarProduto: (req, reply) => {
        try {
            let idNext = produtos.length + 1;
            const { preco } = req.body;

            let produtosBD = {
                id: idNext,
                nome: `Produto ${idNext}`,
                preco,
            }

            return produtos.push(produtosBD);


            // reply.send("Screen is ready POST in\n PRODUTO."); 
            // let produtoReq = req.body        
            // let id = produtos.length + 1;

            // req.body.id = id
            // req.body.nome = `Produto + ${id}`
            //    return produtos.push(produtoReq);

        } catch (error) {
            console.log(error);
        }
    },

    atualizarProdutoParcial: (req, reply) => {
        const prodId = req.params.id;
        let produto = produtos.find((p => p.id === parseInt(prodId)));
        if (!produto) {
            objResponse.message = "Produto não encontrado."
            objResponse.data = []
            reply.status(404).send(objResponse)

            return; // Interrompe caso não haja produto.
        }

        // atualiza cada propriedade do produto
        produto.name = req.body.name ?? produto.nome
        produto.preco = req.body.preco ?? produto.preco

        reply.status(201).send(produto)
    },

    editarProdutoPorId: (req, reply) => {
        reply.send("Screen is ready POST in\n PRODUTO.");
    },
    removerProdutoPorId: (req, reply) => {
        const prodId = req.params.id;
        let produto = produtos.findIndex((p => p.id === parseInt(prodId)));
        if (!produto) {
            objResponse.message = "Produto não encontrado."
            objResponse.data = []
            reply.status(404).send(objResponse)

            return; // Interrompe caso não haja produto.
        }

        // delete(produto)
        produto.splice(produto, 1)
        objResponse.message = "Produto deletado."
        reply.status(200).send(objResponse)

    },

    removerTodosProdutos: (req, res) => {
        return produtos = []
    }

}