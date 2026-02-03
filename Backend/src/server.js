const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
const notesRoute = require("./routes/notesRoute.js");
const {connectDB} = require("./config/db.js")
dotenv.config()

const app = express()

const PORT = process.env.PORT  || 5001;

const rootDir = path.resolve();
if (process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin:"http://localhost:5173"
}));
}
app.use(express.json());
app.use("/api/notes",notesRoute)

if (process.env.NODE_ENV === "production"){
app.use(express.static(path.join(rootDir, "../Frontend/Notes App/dist")));
connectDB()



app.get(/.*/, (req, res) => { 
    res.sendFile(path.join(rootDir, "../Frontend/Notes App/dist/index.html"));
})}
connectDB().then(()=>{
    app.listen(PORT,()=>{
    console.log("Server Started on PORT:",PORT);
});
})
