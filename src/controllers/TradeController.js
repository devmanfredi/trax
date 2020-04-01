const connection = require('../database/connection');

const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    async index(request, response) {
        const { page = 1 } = request.query;
        const [count] = await connection('trades').count();


        const trades = await connection('trades')
            .limit(5)
            .offset((page - 1) * 5).select('*');

        response.header('X-Total-Count', count['count(*)']);

        return response.json(trades);
    },

    async create(request, response) {
        const { type,
            contracts,
            hour,
            trigger,
            triggerType,
            localGraph,
            detail,
            value } = request.body;

        const id = generateUniqueId();

        await connection('trades').insert({
            id,
            type,
            contracts,
            hour,
            trigger,
            triggerType,
            localGraph,
            detail,
            value,
        })

        return response.json({ id });
    }
}