const express=require('express');
const app=express();
const cors=require("cors");
require("dotenv").config();

const {connection}=require("./db");
const port=process.env.port || 3000;

app.use(express.json());
app.use(cors({
  origin: 'https://book-store-application-mern.vercel.app/', // Replace with your Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

//Defining routes
const bookroute=require("./routes/bookroutes");
app.use("/book",bookroute);

const authroute=require('./routes/authroute')
app.use('/user',authroute);

app.listen(port,async (req,res)=>{
    try {
        await connection;
        console.log("database is connected");
      } catch (error) {
        console.log(error);
      }
    console.log(`Listening to port: ${port}`);
})