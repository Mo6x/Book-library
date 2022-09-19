"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    AuthorName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    PhoneNumber: { type: String, required: true }
}, {
    timestamps: true
});
// export const User = mongoose.model<UserType>('User', userSchema)
const User = mongoose_1.default.model('User', userSchema);
module.exports = User;
