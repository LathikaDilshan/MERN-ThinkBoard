import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello from the backend server i am anumi ")
});


router.post("/", (req, res) => {
    res.status(201).json({message: "node ceated successfully"});  
});


router.put("/:id", (req, res) => {
    res.status(200).json({message: "node updated successfully"});
});

router.delete("/:id", (req, res) => {
    res.status(200).json({message: "node deleted successfully"});
});

export default router;


