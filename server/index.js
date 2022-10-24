const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require('body-parser')
const connectDb = require("./config/db");

const fileRoutes = require("./routes/file.upload")

dotenv.config({ path: "./config/config.env" });

connectDb()


const app = express();

//middlewaes
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true}))

//routes
app.get('/',() => {
    console.log(`server is up and running`);
})
app.use('/api',fileRoutes)

const PORT = process.env.PORT;

const server = app.listen( PORT, () => {
    console.log(`server is up and running on : http://localhost:${PORT}`);
})

process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`);
    console.log("shutting down due to unhandled promise rejection");

    server.close(()=>{
        process.exit(1);
    })
})