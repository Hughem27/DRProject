const express = require('express')
const app = express()
const router = express.Router();

//  Added Cors to handle cors errors on server (prevent DDoSing etc)
//npm i cors
const cors = require('cors');

//  Implementing Cors
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//  body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //  If you want to name the db, do it after the /                            \/
  await mongoose.connect('mongodb+srv://g00384389:HD4bksPt35xJGUGp@datarep1.kus8esv.mongodb.net/?retryWrites=true&w=majority');
    console.log('Connected')
  // use `await mongoo
}

// Endpoint to get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find(); // Assuming 'Product' is your model
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Endpoint to add a new product
app.post('/products', async (req, res) => {
  try {
    const newProduct = new Product(req.body); // 'Product' is your Mongoose model
    await newProduct.save();
    res.status(201).send(newProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//  Adding a new schema to follow so the data is structured
const productSchema = new mongoose.Schema({
  name:String,
  price:Number,
  id:Number,
  imgUrl:String,
  description:String,
})

// Endpoint to get all products
router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// Endpoint to add a new product
router.post('/products', async (req, res) => {
  let product = new Product(req.body);
  product = await product.save();
  res.send(product);
});

module.exports = router;

const Product = mongoose.model('Product', productSchema);

module.exports = Product;


app.listen(4000)