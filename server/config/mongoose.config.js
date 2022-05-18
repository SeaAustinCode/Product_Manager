const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) //product_db is schema name 

    .then(()=>console.log("Database connection established"))
    .catch(err=>console.log("There was an error connecting to the database", err));