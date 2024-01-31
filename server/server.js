import Fastify from "fastify";
import OS from "os";

const fastify = Fastify({
  loger: false,
});
const networkInterfaces = OS.networkInterfaces();
console.log(networkInterfaces);

const PORT = 3000;
let ipAddress;

// function wifiAddress() {
Object.keys(networkInterfaces).forEach((interfaceName) => {
  const interfaceInfo = networkInterfaces[interfaceName];

  // Itera sobre os endereços IP associados a uma interface específica
  //   interfaceInfo.forEach((info) => {
  for (const info of interfaceInfo) {
    if (!info.internal && info.family === "IPv4") {
      ipAddress = info.address;
      console.log(`Endereço IP da máquina: ${info.address}`);
      //   break;
      // RETIREI O BREAK, POIS COM A CONDIÇÃO DO INFO.INTERNAL == FALSE, O RETORNO É APENAS DO WIFI E NÃO DOS OUTROS IPV4,
      // QUE O LOCALHOST É TRUE.
    }
  }
  // });
});

fastify.get("/", (request, reply) => {
  reply.send("Server is OK!!!.");
});

fastify.get("/login", (request, reply) => {
  reply.send("Login screen is ready!");
});

fastify.listen({ port: PORT, host: ipAddress }, (err, address) => {
  if (err) throw err;
  console.log(`Server is now listening on machine IP: ${address}`);
});
