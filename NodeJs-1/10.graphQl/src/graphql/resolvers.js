const products = require("../data/products");

const resolvers = {
  Query: {
    products: () => products,
    product: (_, { id }) => products.find((item) => item.id === Number(id)),
  },
  Mutation: {
    createProduct: (_, args) => {
      const { title, category, price, inStock } = args;

      const newlyCreatedProduct = {
        id: products.length + 1,
        title,
        category,
        price,
        inStock,
      };
      products.push(newlyCreatedProduct);
      return newlyCreatedProduct;
    },
    deleteProduct: (_, { id }) => {
      const index = products.findIndex((product) => product.id === Number(id));
      if (index === -1) return false;
      products.splice(index, 1);
      return true;
    },
    updateProduct: (_, { id, ...updates }) => {
      const index = products.findIndex((product) => product.id === Number(id));
      if (index === -1) return null;
      const updatedProduct = {
        ...products[index],
        ...updates,
      };
      products[index] = updatedProduct;
      return updatedProduct;
    },
  },
};

module.exports = resolvers;
