const ProductController = require('../controllers/product.controller');

module.exports = function (app) {

    app.get('/api', ProductController.index); // is this being used? 
    app.post("/api/products", ProductController.createProduct) // Product Form CREATE 

    app.get("/api/products", ProductController.findAllProducts) // product list JPX READ 
    app.get("/api/products/:id", ProductController.findOneProduct) // product details page READ 

    // UPDATE --- UPDATE COMPONENT? 
    app.put("/api/products/:id/edit", ProductController.updateExistingProduct) // UPDATE - EDIT JSX 

    // DELETE -- DELETE COMPONENT 
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);

}