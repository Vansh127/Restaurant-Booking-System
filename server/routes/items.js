const express = require('express');
const router = express.Router();

const dishes = [
  { id: 1, name: 'Pizza Margherita', price: 299, img: '/images/pizza.jpg' },
  { id: 2, name: 'Cheese Burger', price: 199, img: '/images/burger.jpg' },
  { id: 3, name: 'Creamy Pasta', price: 249, img: '/images/pasta.jpg' },
  { id: 4, name: 'Veggie Salad', price: 150, img: '/images/salad.jpg' },
  { id: 5, name: 'Chicken Wings', price: 349, img: '/images/chicken_wings.jpg' },
  { id: 6, name: 'Spaghetti Bolognese', price: 299, img: '/images/spaghetti.jpg' },
  { id: 7, name: 'Garlic Bread', price: 99, img: '/images/garlic_bread.jpg' },
  { id: 8, name: 'Chocolate Cake', price: 199, img: '/images/cake.jpg' },
  { id: 9, name: 'French Fries', price: 120, img: '/images/fries.jpg' },
  { id: 10, name: 'Tacos', price: 250, img: '/images/tacos.jpg' },
];

router.get('/', (req, res) => {
  res.json(dishes);
});

module.exports = router;
