import Fastify from "fastify";
import OS from "os";
import { produtoService } from "./services/produtos.service.js";



const fastify = Fastify({
  logger: false,
});


const PORT = 3000;
let ipAddress;

fastify.get("/", (request, reply) => {
  reply.send("Server is OK!!!");
});

fastify.get("/produtos", produtoService.buscarProdutos);

fastify.get("/produto/:id", produtoService.buscarProdutoPorId);

fastify.post("/produto/", produtoService.criarProduto);

fastify.patch("/produto/id/", produtoService.editarProdutoPorId);

fastify.delete("/produto/id/", produtoService.removerProdutoPorId);

fastify.listen({ port: PORT }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on machine IP: ${address}`);
});
