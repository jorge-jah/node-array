import { produtos } from "../db/produtos.js";

 let objResponse = {
    message: '',
    data: []
 }

export const produtoService = {
    buscarProdutos: (req, reply) => {
        return produtos;
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
        // reply.send("Screen is ready POST in\n PRODUTO.");   
        let produtoReq = req.body        
           return produtos.push(produtoReq);
        
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