import express from "express";
import rotasProdutos from "./routes/produtos";
import cors from "cors";
const app = express();
const porta = 4000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/produtos", rotasProdutos);

app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
