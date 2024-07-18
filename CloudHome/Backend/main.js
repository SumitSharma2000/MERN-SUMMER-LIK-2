require("dotenv").config();
require('./config/db');
const authRouter = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({origin: true}));

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello World! App is running');
})

app.use("/api/v1/auth", authRouter);

app.listen(process.env.port,()=>{
    console.log("server is running on port " + process.env.port);
})
