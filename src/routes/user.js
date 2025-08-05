const createUserSchema = {
    body: {
        type: 'object',
        required: ['name', 'email', 'password'],
        properties: {
            name: {
                type: 'string'
            },
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            },
        },
    },
};

async function userRouter(fastify, opts) {
    fastify.post("/api/users", {schema: createUserSchema}, (req, reply) => {
        //Validate User Request
        return {
            message: "User created!!!",
        };
    });
}

/**
 * Registers user routes with Fastify.
 * @function
 * @param {FastifyInstance} fastify - The Fastify instance to register routes with.
 * @param {Object} opts - The options to pass to the route registration.
 * @returns {void}
 */
export default userRouter;