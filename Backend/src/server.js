const express = require("express")
const cors = require("cors")
const app = express()
// import notesRoute from ".src/routes/notesRoute.js"  we are using commonjs
const notesRoute = require("./routes/notesRoute.js");
const {connectDB} = require("./config/db.js")
const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT  || 5000


//middleware
app.use(express.json())
app.use(cors());

connectDB()
app.use("/api/notes",notesRoute)
app.listen(PORT,()=>{
    console.log("Server Started on PORT:",PORT);
});

