require("dotenv").config();
require('./config/db');
const authRouter = require("./routes/authRoutes");
const otpRouter = require("./routes/otpRoutes");
const folderRouter = require("./routes/folderRoutes");
const express = require("express");
const cors = require("cors");
const verifyToken =  require('./middlewares/verifyToken');
const filefolderRouter = require("./routes/filefolderRoutes");
const fileRouter = require("./routes/fileRoutes");


const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World! App is running');
})

app.use("/api/v1/auth", authRouter);
app.use(verifyToken);
app.use("/api/v1/auth", otpRouter);
app.use("/api/v1/folder", folderRouter);
app.use("/api/v1/fileFolder", filefolderRouter);
app.use("/api/v1/file", fileRouter);

app.listen(process.env.port,()=>{
    console.log("server is running on port " + process.env.port);
})
