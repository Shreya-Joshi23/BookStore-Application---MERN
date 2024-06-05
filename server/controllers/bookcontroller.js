const {Book}=require("../models/books");

const getbooks=async (req,res)=>{
    try{
        const book=await Book.find({});
        res.status(200).send({
            success:1,
            msg:"books fetched succcessfully",
            data:book,
        });
    }catch(error){
        res.status(500).send({
            success:0,
            msg:error.message
        });
    }
}

module.exports={
    getbooks,
}