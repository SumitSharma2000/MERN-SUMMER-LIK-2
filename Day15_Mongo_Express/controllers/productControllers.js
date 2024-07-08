// const mongodb = require("mongodb");
// const { productCollection } = require("../config/db");

// const getProducts = async (req, res) => {
//   const products = await productCollection.find().toArray();
//   res.json({
//     status: "success",
//     message: "data fetched",
//     data: {
//       //   products: products,
//       products,
//     },
//   });
// };

// const createProducts = async (req, res) => {
//   const { name, price, description } = req.body;
//   // Basic validation
//   if (!name || !price || !description) {
//     return res.status(400).json({
//       status: "error",
//       message: "All fields are required",
//     });
//   }

//   const product = { name, price, description };

//   // existing product
//   const existingProduct = await productCollection.findOne(product);
//   if (existingProduct) {
//     return res.status(409).json({
//       status: "error",
//       message: "Product already present",
//     });
//   }

//   const result = await productCollection.insertOne(product);
//   res.status(201).json({
//     status: "success",
//     message: "data posted",
//     data: {
//       product: result,
//     },
//   });
// };

// // delete product
// const deleteProduct = async (req, res) => {
//   const { id } = req.body;
//   console.log("id", id);
//   if (!id) {
//     return res.status(400).json({
//       status: "error",
//       message: "Product ID is required",
//     });
//   }

//   const delPro = await productCollection.deleteOne({
//     _id: new mongodb.ObjectId(id),

//   });

//   if (delPro.deletedCount === 0) {
//     return res.status(404).json({
//       status: "error",
//       message: "Product not found",
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     message: "data deleted",
//     data: {
//       product: delPro,
//     },
//   });
// };

// // update in products
// const updateProduct = async (req, res) => {
//   const { id, name, price, description, category, stock } = req.body;

//   console.log("id", id);
//   if (!id) {
//     return res.status(400).json({
//       status: "error",
//       message: "Product ID is required",
//     });
//   }

//   if (!name || !price || !description || !category || !stock) {
//     return res.status(400).json({
//       status: "error",
//       message: "All fields are required",
//     });
//   }

//   const product = await productCollection.updateOne(
//   { _id: new mongodb.ObjectId(id) },
//   { $set: { name, price, description, category, stock } }
// );

//   if (product.modifiedCount === 0) {
//     return res.status(404).json({
//       status: "error",
//       message: "Product not found",
//     });
//   }
//   res.status(200).json({
//     status: "success",
//     message: "data updated",
//     data: {
//       product: product,
//     },
//   });
// };

// module.exports = {
//   getProducts,
//   createProducts,
//   deleteProduct,
//   updateProduct,
// };

// yaha se mongoose ka code hai
const mongoose = require("mongoose");
const ProductModel = require("../models_schema/productModels");

// middleware chaining
//middleware is a function that runs before the route handler function is executed
const checkId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    if (!product)
      return res.status(404).json({
        status: "fail",
        message: "Product not found by this id",
      });
    next();
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid product id",
      });
    }
    res.status(500);
    res.json({
      status: "fail",
      err: "Internal Server Error",
    });
  }
};

// Getting products function
const getProducts = async (req, res) => {
  try {
    // const products = await ProductModel.find({});
    const products = await ProductModel.find({}).limit(10); // ye new schema ke liye hai temp schema ke liye change kiya hai
    res.json({
      status: "success",
      message: "Data fetched",
      data: {
        products: products,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching products",
    });
  }
};

// Create product function
const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;

  if (!name || !price || !description || !category || !stock) {
    return res.status(400).json({
      status: "error",
      message: "All fields are required",
    });
  }

  try {
    const existingProduct = await ProductModel.findOne({
      name,
      price,
      description,
    });
    if (existingProduct) {
      return res.status(409).json({
        status: "error",
        message: "Product already present",
      });
    }

    const newProduct = new ProductModel({
      name,
      price,
      description,
      category,
      stock,
    });
    const result = await newProduct.save();

    res.status(201).json({
      status: "success",
      message: "Product created successfully",
      data: {
        product: result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating the product",
    });
  }
};

// Delete product function
const deleteProduct = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({
      status: "error",
      message: "Product ID is required",
    });
  }

  try {
    const delPro = await ProductModel.deleteOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (delPro.deletedCount === 0) {
      return res.status(404).json({
        status: "error",
        message: "Product not found",
      });
    }

    res.status(204).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the product",
    });
  }
};

// Update product function without middleware chaining
// const updateProduct = async (req, res) => {
//   const { id, name, price, description, category, stock } = req.body;

//   if (!id) {
//     return res.status(400).json({
//       status: "error",
//       message: "Product ID is required",
//     });
//   }

//   if (!name || !price || !description || !category || !stock) {
//     return res.status(400).json({
//       status: "error",
//       message: "All fields are required",
//     });
//   }

//   try {
//     const product = await ProductModel.updateOne(
//       { _id: new mongoose.Types.ObjectId(id) },
//       { $set: { name, price, description, category, stock }, new: true }
//     );

//     if (product.nModified === 0) {
//       return res.status(404).json({
//         status: "error",
//         message: "Product not found or no changes made",
//       });
//     }

//     res.status(200).json({
//       status: "success",
//       message: "Product updated successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while updating the product",
//     });
//   }
// };

// replace product by id without middleware chaining in validation in id
// const replaceProduct = async (req, res) => {
//   const { id } = req.params;
//   const { name, price, description, category, stock } = req.body;
//   if (!id) {
//     return res.status(400).json({
//       status: "error",
//       message: "Product ID is required",
//     });
//   }
//   if (!name || !price || !description || !category || !stock) {
//     return res.status(400).json({
//       status: "error",
//       message: "All fields are required",
//     });
//   }
//   try {
//     const product = await ProductModel.findOneAndReplace(
//       { _id: new mongoose.Types.ObjectId(id) },
//       { name, price, description, category, stock }
//     );
//     if (!product) {
//       return res.status(404).json({
//         status: "error",
//         message: "Product not found",
//       });
//     }
//     res.status(200).json({
//       status: "success",
//       message: "Product updated successfully",
//       product,
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: "error",
//       message: "An error occurred while updating the product",
//     });
//   }
// };

// replace product using middleware chaining
const replaceProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    body.updatedAt = Date.now();
    const product = await ProductModel.findOneAndReplace(
      {
        _id: id,
      },
      body,
      { new: true }
    );
    if (!product)
      return res
        .status(404)
        .json({ status: "error", message: "Product not found" });
    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid format in request body",
      });
    }
    res.status(500).json({
      status: "error",
      message: "An error occurred while updating the product",
    });
  }
};

// update product using middleware chaining
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    body.updatedAt = Date.now();
    const newproduct = await ProductModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    res.status(200);
    res.json({
      status: "success",
      message: "Product updated successfully",
      data: {
        product: newproduct,
      },
    });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid format in request body",
      });
    }
    res.status(500).json({
      status: "error",
      message: "An error occurred while updating the product",
    });
  }
};

// http://localhost:1400/api/v1/products/list?pizza_size=M&pizza_category=Veggie
// list api calling get method
// const listProduct = async (req, res) => {
//   // const {limit = 10} = req.query;
//   const {limit = 10 , ...filter} = req.query;
//   // const {limit : pizzaname = 10} = req.query;  // destructure me default value and name dono change kardiya
//   const pizzasQuery = ProductModel.find(filter);
//   const limitedPizzas = pizzasQuery.limit(limit);
//   // const limitedPizzas = pizzasQuery.limit(pizzaname);
//   res.json({
//     status: "success",
//     data: {
//       products: await limitedPizzas,
//     }
//   })
// };

// const dataQuery = ProductModel.find({
//   title:{
//     $regex:q,
//   }
// });
// price[$lte]=2499 give price less than 2499 values
// price=2499 pe exact 2499 value vale dega

// query from client -> price[&lte]=2499
// query at server -> {price: { $lite : '2499' }}

// fields=title_price_description ye sirf deta dega aur usme sirf ye 3 fields hoga
const listProduct = async (req, res) => {
  const {
    limit = 10,
    q = "",
    fields = "",
    sort = "",
    page = 1,
    ...filters
  } = req.query;
  // Handling fields selection and sort
  const selectionField = fields.split("_").join(" ");
  const sortField = sort.split("_").join(" ");
  // Initial query setup
  let dataQuery = ProductModel.find(filters);
  // serach functionality
  dataQuery = dataQuery.where("title").regex(q); //search
  dataQuery = dataQuery.select(selectionField); //select field
  dataQuery = dataQuery.sort(sortField); //sort
  // total documents
  const dataQuerys = dataQuery.clone();
  const totalDocuments = await dataQuerys.countDocuments();
  // pagination
  dataQuery = dataQuery.skip((page - 1) * limit); //pagination
  const totalPages = Math.ceil(totalDocuments / limit);
  const limitedData = await dataQuery.limit(limit);
  res.json({
    status: "success",
    result: limitedData.length,
    pagination: {
      currentPage: page,
      totalPages: totalPages,
      totalDocuments: totalDocuments,
    },
    data: {
      products: limitedData,
    },
  });
};

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
  checkId,
  listProduct,
};
