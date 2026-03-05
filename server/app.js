import express from "express";
import cors from 'cors';
import getJSON from "./utils/readJson.js";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

const movies = getJSON()

app.get('/', (req,res) => {
    res.send("hello from router")
    console.log("hello from router");
})

app.get("/api/movies", async (req,res) => {
    res.json(movies)
    console.log(movies);
    
})



app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})