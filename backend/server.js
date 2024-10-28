import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js'

const app = express()
const port = process.env.PORT || 5000

connectDB() //Connect to mongodb


app.get('/',(req, res)=>{
    res.send('Api is Running')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})

app.get('/api/products/:id',(req ,res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})


app.listen(port ,()=>console.log(`Server is runnng on port ${port}`))