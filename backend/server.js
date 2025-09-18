import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import userRouter from "./routes/userRouter.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3003;

connectdb();

app.use("/api/users", userRouter)
app.get("/", (req, res) =>{
    res.send("API is running...");
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}..`);
});