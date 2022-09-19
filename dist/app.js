"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
//import db from "./config/database.config";
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const book_1 = __importDefault(require("./routes/book"));
mongoose_1.default.connect("mongodb+srv://moses:sunday1993@moses-database.dq1c16a.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Database connected successfuly"))
    .catch((err) => console.log(err));
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
exports.app.use((0, cors_1.default)(corsOptions));
// view engine setup
exports.app.set("views", path_1.default.join(__dirname, "..", "views"));
exports.app.set("view engine", "ejs");
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use((0, cookie_parser_1.default)());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
exports.app.use('/public/images/', express_1.default.static('/public/images/'));
exports.app.use("/api", user_1.default);
exports.app.use("/", book_1.default);
// app.use("/api", bookRouter);
exports.app.get("/home", (req, res) => {
    res.render("./home");
});
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
exports.app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
exports.default = exports.app;
