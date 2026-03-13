import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import { connect } from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
dotenv.config();
const PORT = process.env.PORT;
connect();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api", courseRoutes);
app.use("/api", noteRoutes);
app.listen(PORT,()=>{
 console.log(`server listening on port ${PORT}`);
});