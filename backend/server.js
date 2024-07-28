import express from "express";
import { PORT, MONGOURL } from "./config.js";
import mongoose from "mongoose";
import router from "./router/NotesRouter.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Notes taking App");
});

app.use("/notes", router);

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log(`Connected to DB`);
    app.listen(PORT, () => {
      console.log(`Server  is listening in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
