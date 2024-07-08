const { Product } = require('../models');

const productData = [
  {
    product_name: 'Laptop',
    price: 1000.00,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Refrigerator',
    price: 600.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'T-shirt',
    price: 20.00,
    stock: 100,
    category_id: 3,
  },
  {
    product_name: 'Basketball',
    price: 30.00,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Novel',
    price: 15.00,
    stock: 80,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
