import { Router } from "express";
import RepositorioProdutos from "../core/produtos/RepositorioProdutos";

const router = Router();
const repo = new RepositorioProdutos();

router.get("/", (req, res) => {
    const dados = repo.obterTodos();
    res.status(200).send(dados);
})

export default router;
