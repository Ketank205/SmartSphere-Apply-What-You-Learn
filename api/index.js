import express from "express";
import connectDB from "../config/database.js";
import dotenv from "dotenv";
import router from "../routes/feedbackRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.get("/api/v1/", (req, res) => {
    res.send("Hello World!");
});

app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});