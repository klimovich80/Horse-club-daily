const clientModel = require('../models/client');

const getClients = (req, res) => {
    clientModel.find({})
        .then((clients) => {
            res.send(clients);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Internal server error',
                err: err.message,
                stack: err.stack,
            });
        });
};

const getClientById = (req, res) => {
    clientModel.findById(req.params.client_id)
        .then((client) => {
            res.send(client);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Internal server error',
                err: err.message,
                stack: err.stack,
            });
        });
};

const createClient = (req, res) => {
    clientModel.create(req.body)
        .then((client) => {
            res.status(201).send(client);
        })
        .catch((err) => {
            res.status(500).send({
                message: 'Internal server error',
                err: err.message,
                stack: err.stack,
            });
        });
};

module.exports = {
    getClients,
    getClientById,
    createClient,
};
