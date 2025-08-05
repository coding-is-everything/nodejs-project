import Fastify from 'fastify';
import userRouter from './src/routes/user.js';

const fastify = new Fastify({
    logger: true
});

fastify.register(userRouter);

//Route Services
fastify.get("/", (req, reply) => {
    return {
        message: "Welcome to auth service!!!",
    };
});

const start = async () => {
    const PORT = process.env.PORT || 4000;
    try {
        await fastify.listen({ port: PORT });
        console.log(`Server listening on port ${PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();