import cors from "cors"; 
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();


//middleware

if(process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: "http://localhost:5173", // allow requests from frontend
    }));
}

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter)


//somple custom middleware to log request details
app.use((req, res, next) => {
    console.log(`request method: ${req.method}, request url: ${req.url}`);
    next(); 
});

app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")));


    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running on port :", PORT);
    })
});