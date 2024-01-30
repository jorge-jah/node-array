import Fastify from 'fastify';

const fastify = Fastify({
    loger: false
})

const PORT = 3000

fastify.get('/', (request, reply) => {
    reply.send('Server is OK.')
})

fastify.listen({ port: PORT }, (err, address) => {
    if (err) throw err
    console.log(`Server is now listening on ${address}`)
})
