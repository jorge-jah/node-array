import { produtos } from "../db/produtos.js";

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
           return produtos.push(produtoReq)
        
    },
    editarProdutoPorId: (req, reply) => {
        reply.send("Screen is ready POST in\n PRODUTO.");
    },
    removerProdutoPorId: (req, reply) => {
        reply.send("Screen is ready DELETE in\n ID DE PRODUTO.");
    },

}