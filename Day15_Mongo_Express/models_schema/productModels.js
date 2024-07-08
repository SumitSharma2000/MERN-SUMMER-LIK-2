const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ["Electronics", "Fashion", "Food", "Home", "Sports"],
  },
  stock:{
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default: Date.now
  }
});

const ProductModel = mongoose.model("products", productSchema);

// ek new schema hai temporary check ke liye
// const productSchema = new mongoose.Schema({
//   pizza_name: String,
//   pizza_category: String,
//   pizza_size: String,
//   total_price: Number
// });

// const ProductModel = mongoose.model("pizzas", productSchema);


module.exports= ProductModel;


 
