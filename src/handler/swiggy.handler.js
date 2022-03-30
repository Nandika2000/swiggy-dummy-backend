const service = require('../services/swiggy.service');

const insertData = async (req, res) => {
    try {
      await service.data_massage_rest();
      await service.data_massage_dishes();
      res.json({ message: 'FETCHED AND STORED IN DATABASE' }).status(200);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
   
  };
const getRestaurants = async (req,res) => {
    try {
       const data= await service.getRestaurants();
        res.json({ message: data}).status(200);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
      }
};
const getMenu = async (req,res) => {
    try{
        const data= await service.getMenu(req.params.rest_id);
        res.json({ message: data}).status(200);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
      }
}
const getByDishName = async (req,res) => {
    try{
        const data = await service.getByDishName(req.params.dishName);
        res.json({messgae:data}).status(200);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
      }

}
  module.exports = {
   insertData,
   getRestaurants,
   getMenu,
   getByDishName
  };
  