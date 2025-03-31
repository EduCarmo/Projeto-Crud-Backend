import { Router } from "express";
import RepositorioProdutos from "../core/produtos/RepositorioProdutos";

const router = Router();
const repo = new RepositorioProdutos();

router.get("/", (req, res) => {
    const dados = repo.obterTodos();
    res.status(200).send(dados);
})

router.post("/", (req, res) => {
    const { nome, preco } = req.body
    repo.novo(nome, preco)
    res.status(201).send();
})

export default router;
