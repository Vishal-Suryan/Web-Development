const Product = require("../models/Product");

const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Yoga Mat",
        category: "Sports",
        price: 35,
        inStock: true,
        tags: ["fitness", "yoga"],
      },
      {
        name: "Coffee Maker",
        category: "Kitchen",
        price: 149,
        inStock: true,
        tags: ["appliance", "coffee"],
      },
      {
        name: "Desk Lamp",
        category: "Home",
        price: 45,
        inStock: false,
        tags: ["lighting", "office"],
      },
      {
        name: "Backpack",
        category: "Accessories",
        price: 79,
        inStock: true,
        tags: ["travel", "bag"],
      },
      {
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 129,
        inStock: true,
        tags: ["computer", "peripherals"],
      },
      {
        name: "Water Bottle",
        category: "Sports",
        price: 25,
        inStock: false,
        tags: ["hydration", "fitness"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      success: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};

const getProductStats = async (req, res) => {
  try {
    const result = await Product.aggregate([
      //stage 1
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },
      //stage 2
      {
        $group: {
          _id: "$category",
          avgPrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: "$price",
          },
          averagePrice: {
            $avg: "$price",
          },
          maxProductPrice: {
            $max: "$price",
          },
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
