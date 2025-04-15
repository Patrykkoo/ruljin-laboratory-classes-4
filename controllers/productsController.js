const Product = require("../models/Product");
const { MENU_LINKS } = require("../constants/navigation");
const { STATUS_CODE } = require("../constants/statusCode");

const getProductsView = (_request, response) => {
  const products = Product.getAll();
  response.render("products.ejs", {
    headTitle: "Shop - Products",
    path: "/",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products,
  });
};

const getAddProductView = (_request, response) => {
  response.render("add-product.ejs", {
    headTitle: "Shop - Add product",
    path: "/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add",
  });
};

const addNewProduct = (request, response) => {
  const { name, description } = request.body;
  const product = new Product(name, description);
  Product.add(product);
  response.status(STATUS_CODE.FOUND).redirect("/products/new");
};

const getNewProductView = (_request, response) => {
  const newestProduct = Product.getLast();
  response.render("new-product.ejs", {
    headTitle: "Shop - New product",
    path: "/new",
    activeLinkPath: "/products/new",
    menuLinks: MENU_LINKS,
    newestProduct,
  });
};

const getProductView = (request, response) => {
  const { name } = request.params;
  const product = Product.findByName(name);

  if (!product) {
    return response.status(STATUS_CODE.NOT_FOUND).send("Product not found");
  }

  response.render("product.ejs", {
    headTitle: `Shop - ${product.name}`,
    path: "/products/:name",
    activeLinkPath: "/products",
    menuLinks: MENU_LINKS,
    product,
  });
};

const deleteProduct = (request, response) => {
  const { name } = request.params;
  Product.deleteByName(name);
  response.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
  getProductsView,
  getAddProductView,
  addNewProduct,
  getNewProductView,
  getProductView,
  deleteProduct,
};
