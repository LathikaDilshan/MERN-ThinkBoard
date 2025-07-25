import express from 'express';

const app = express();

app.get("/api", (req , res) =>{
    res.send("Hello from the backend server")
});

app.listen(5000, () => {
    console.log("server is running on port 5000")
});