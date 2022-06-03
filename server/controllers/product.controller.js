// CONTROLLER = CRUD 
// MAKING QUERIES TO THE DB 
// USING THE MODEL 


const req = require("express/lib/request");
const { Product } = require("../models/product.model") //import our model

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
// =================== CREATE =============================
module.exports.createProduct = (request, response) => {
    const { title, price, description } = request.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err))
}

// ---------------- READ  ----------------------------------
module.exports.findAllProducts = (request, response) => {
    Product.find()
        .then(allProducts => {
            console.log("allProducts is" + allProducts);
            return response.json({ message: "ok", allProducts: allProducts }); //key of allProducts: with allProducts value
            // response.json(allProducts); this would just return allProducts whereas the above would return an object with the key value pairs allProducts
        })
        .catch(err => response.json({ message: "Something went wrong with find all products", error: err }));
};

module.exports.findOneProduct = (request, response) => { // look at repo from today 
    Product.findOne({_id: request.params.id})
    // Product.findById(request.params.id) //alternate way of doing the above line 
        .then(oneSingleProduct => {
            console.log("One Single Product is" + oneSingleProduct);
            return response.json({ message: "ok", oneSingleProduct: oneSingleProduct });// added return //key of oneSingleProduct: with oneSingleProduct value
            // response.json(oneSingleProduct); this would just return oneSingleProduct whereas the above would return an object with the key value pairs oneSingleProduct
        })
        .catch(err => response.json({ message: "Something went wrong with find one product controller", error: err }));
};

// ================== UPDATE =================================

module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ updatedProduct: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// ================== DELETE =================================

// DELETE
module.exports.deleteAnExistingProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
