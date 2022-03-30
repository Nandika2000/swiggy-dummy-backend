const data = require('../fixtures/data.json');
const models =require('../../models');
const restaurants = require('../../models/restaurants');
const data_massage_rest = async() => {
    const d = await models.restaurants.findAll();
    if(d.length!==0)
    {
        return;
    }
    const rest_data = data.reduce((acc,element) => {
            const obj={
            restaurantName:element.fullName,
            costForTwo:element.costForTwo,
            location:element.Location
            };
            acc.push(obj);
            return acc;
    },[]);
    await models.restaurants.bulkCreate(rest_data);
}
const data_massage_dishes = async()=> {
    const d = await models.dishes.findAll();
    if(d.length!==0)
    {
        return;
    }
    const dishes_data = data.reduce((acc,element)=> {
        const reduced_data= element.menu.reduce((acc1,d)=> {
             const obj = {
                 dishName:d.name,
                 rating:d.rating,
                 price:d.price,
                 restaurantId:element.id
             };
             acc1.push(obj);
             return acc1;
         },[]);
         acc.push(...reduced_data);
         return acc;
      },[] );
      await models.dishes.bulkCreate(dishes_data);
}
const getRestaurants = async()=> {
    const restaurants = await models.restaurants.findAll({attributes:['restaurantName','costForTwo','location','id'] });
    return restaurants;
}
const getMenu = async(rest_id) => {
    const menu = await models.dishes.findAll({where:{restaurantId:`${rest_id}`}, attributes: ['dishName','price','rating']});
    return menu;
}
const getByDishName = async(dishName) =>{
    const restDish = await models.dishes.findAll({where:{dishName:`${dishName}`}, include:[{model:models.restaurants,attributes:['restaurantName']}],attributes:['dishName','price','rating']});
    return restDish;
}
module.exports={
    data_massage_rest,
    data_massage_dishes,
    getRestaurants,
    getMenu,
    getByDishName
}