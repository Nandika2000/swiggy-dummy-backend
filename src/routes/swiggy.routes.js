const express = require('express');

const router = express.Router();
const handler = require('../handler/swiggy.handler');

router.get('/get-details-to-db', handler.insertData);
router.get('/get-restaurants', handler.getRestaurants);
router.get('/get-menu/:rest_id',handler.getMenu);
router.get('/get-restaurant-by-dish/:dishName', handler.getByDishName);

module.exports = {
  swiggyRouter: router,
};
