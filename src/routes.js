const express = require('express');

const routes = express.Router();

const TradeController = require('./controllers/TradeController');


routes.post('/trades', TradeController.create);
routes.get('/trades', TradeController.index);



module.exports = routes;