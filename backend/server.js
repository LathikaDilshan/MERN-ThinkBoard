import express from 'express';
import apiRoutes from './routes/apiRoutes.js';

const app = express();

app.use("/api", apiRoutes);


app.listen(5000, () => {
    console.log("server is running on port 5000")
});