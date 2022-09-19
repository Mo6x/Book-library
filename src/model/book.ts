import mongoose from "mongoose"




// export interface BookType extends mongoose.Document{
//   id:string,
//   imageurl: string
//   Title:string
//   Description:string
//   pageCount: number
//   Genre: string
//   bookId: number
//   Publisher: string

// }


const BookSchema = new mongoose.Schema({
imageurl: {
        type: String,
        required : true
      },
Title: {
        type: String,
        required : true

      },
      Description: {
        type: String,
        required : true
      },
  
      pageCount: {
        type: Number,
        required : true
      },
      Genre: {
        type: String,
        required: true
      },
      bookId: {
        type: String,
        required: true
      },
      Publisher: {
        type: String,
        required : true
      },
},{
  timestamps:true
});

const Book = mongoose.model('Book', BookSchema)
module.exports = Book




