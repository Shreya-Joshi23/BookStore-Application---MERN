const mongoose=require("mongoose");

const bookSchema=mongoose.Schema({
    name:String,
    price:String,
    category:String,
    image:String,
    title:String,
});

const Book=mongoose.model("Book",bookSchema);
module.exports={
    Book,
}