const express = require('express');
const { getProducts , createProduct, deleteProduct, updateProduct, checkId,replaceProduct , listProduct} = require('../controllers/productControllers');

const productRouter = express.Router();

// http://localhost:1400/api/v1/products/kuchbhilike  hamara code upar se niche check karta hai 
// ab product/list likha to chal jaega get method se kyuki vo check karega kya kuch hai product ke baad jo get method se attached ho hai to chal jaega

// productRouter.route('/list').get((req,res) => {
//    console.log("hello")  // chalega jab hum get request se hamara url call karega aur chalega
// })

// put ke kase me to chalega per invalid id dega kyuki vo dekha kya kuch likha hai ha use mila put ke baad id likhi hai aur vo chal jaega

productRouter.route('/').get(getProducts).post(createProduct).delete(deleteProduct)
productRouter.route('/list').get(listProduct)
productRouter.route('/:id').put(checkId, replaceProduct).patch(checkId,updateProduct)


module.exports = productRouter
