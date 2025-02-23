import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postsRoutes from "./routes/postsRoutes";
import connectdb from "./connection/connect";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/posts", postsRoutes);



app.get("/", (req, res) => {
    res.send("HI");
});

const port = process.env.PORT || 5000;


const startServer = async () => {
    await connectdb();
    app.listen(port, () => {
        console.log(`blog website listening on port ${port}`);
    });
};

startServer();


