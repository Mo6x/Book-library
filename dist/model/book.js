"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
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
const BookSchema = new mongoose_1.default.Schema({
    imageurl: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    pageCount: {
        type: Number,
        required: true
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
        required: true
    },
}, {
    timestamps: true
});
const Book = mongoose_1.default.model('Book', BookSchema);
module.exports = Book;
