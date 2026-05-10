const {
  getProductStats,
} = require("../../../8.mongo-inter/controllers/productController");

const products = [
  {
    id: 1,
    title: "Laptop",
    category: "Electronics",
    price: 999,
    inStock: true,
  },
  {
    id: 2,
    title: "Smartphone",
    category: "Electronics",
    price: 699,
    inStock: true,
  },
  {
    id: 3,
    title: "Headphones",
    category: "Electronics",
    price: 199,
    inStock: false,
  },
  {
    id: 4,
    title: "Running Shoes",
    category: "Sports",
    price: 89,
    inStock: true,
  },
  {
    id: 5,
    title: "Yoga Mat",
    category: "Sports",
    price: 35,
    inStock: false,
  },
  {
    id: 6,
    title: "Coffee Maker",
    category: "Kitchen",
    price: 149,
    inStock: true,
  },
  {
    id: 7,
    title: "Desk Lamp",
    category: "Home",
    price: 45,
    inStock: true,
  },
  {
    id: 8,
    title: "Backpack",
    category: "Accessories",
    price: 79,
    inStock: false,
  },
  {
    id: 9,
    title: "Mechanical Keyboard",
    category: "Electronics",
    price: 129,
    inStock: true,
  },
  {
    id: 10,
    title: "Water Bottle",
    category: "Sports",
    price: 25,
    inStock: true,
  },
];

module.exports = products;
