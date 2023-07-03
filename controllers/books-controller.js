const Book = require('../model/Book');

//GET request
const getAllBooks = async(req,res,next)=>{
    let books;
    try{
        books = await Book.find();
    }catch(error){
        console.log(error)
    }
    if(!books){
        return res.status(404).json({message:"No products"})
    }
    return res.status(200).json({books})
}

//UPDATE BOOK

const updateBook = async(req,res,next) =>{
    
    const id = req.params.id;
    const {name,author,description,price,available} = req.body;
    let book;
    try{
        book = await Book.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            available
        });
        book = await book.save()
    }catch(error){
        console.log(error)
    }
    if(!book){
        return res.status(500).json({message:'Error'})
    }
    return res.status(201).json({book})
}
//Get specific id
const getByID = async(req,res,next)=>{
    const id = req.params.id
    let book;
    try{
        book = await Book.findById(id);
    }catch(error){
        console.log(error)
    }
    //Schema Validation
    if(!book){
        return res.status(500).json({message:'Error'})
    }
    return res.status(201).json({book})
}

//POST request
const addBook = async(req,res,next) =>{
    const {name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,
            author,
            description,
            price,
            available,
            image
        });
        await book.save();
    }catch(error){
        console.log(error)
    }
    //Schema Validation
    if(!book){
        return res.status(500).json({message:'Error'})
    }
    return res.status(201).json({book})
}

  //Delete Request
  const deleteBook = async(req,res,next)=>{
    const id = req.params.id
    let book;
    try{
        book = await Book.findByIdAndRemove(id);

    }catch(error){
        console.log(error);
    }
    if (!book) {
              return res.status(404).json({ message: "Unable To Delete By this ID" });
            }
            return res.status(200).json({ message: "Product Successfully Deleted" });
  }

  

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getByID = getByID;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook