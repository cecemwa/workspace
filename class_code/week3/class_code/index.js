import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// app.use(express.json());



app.get("/", (req, res) => {
    res.send("Welcome to the server (GET)");
});

app.post("/", (req, res) => {
    res.send("Welcome to the server (POST)");
});

app.put("/", (req, res) => {
    res.send("Welcome to the server (PUT)");
});

app.delete("/", (req, res) => {
    res.send("Welcome to the server (DELETE)");
});



app.get("/watch", (res, req) =>{
    console.log("URL call:")
    console.log(req.url)
    console.log("Method call:")
    console.log(req.method)
    console.log("Header call:")
    console.log(req.header)
    console.log("Query call:")
    console.log(req.query)
    console.log("Param call:")
    console.log(req.params)
    console.log("Body call:")
    console.log(req.body)

    res.send("Welcome to the watch list")
})

app.get("/itm", (req, res)=>{

    console.log("Query call:")
    console.log(req.query)
    console.log("Param call:")
    console.log(req.params)
    console.log("Body call:")
    console.log(req.body)

    res.send("Welcome to the watch list")

})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
