import express from "express";
import rotasProdutos from "./routes/produtos";
import cors from "cors";
import rotasLogin from "./routes/login";
import dotenv from "dotenv";
import autenticacao from "./middlewares/autenticacao";

dotenv.config();

const app = express();
const porta = 4000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/login", rotasLogin);
app.use("/produtos", autenticacao, rotasProdutos);


app.listen(porta, () => {
    console.log(`rodando na porta ${porta}`);
});
