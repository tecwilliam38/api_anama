import express from "express";
import cors from "cors";
import router from "./routers.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

