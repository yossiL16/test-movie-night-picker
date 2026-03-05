import express from "express";
import cors from 'cors';
import movies from './DB/data.json' with { type: "json" }

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/', (req,res) => {
    res.send("hello from router")
    console.log("hello from router");
})

app.get("/api/movies", async (req,res) => {
    try {
    res.json(movies)
    } catch(err){
        res.json(err)
    }
})


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
})