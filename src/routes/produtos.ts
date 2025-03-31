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

router.get("/:codigo", (req, res) => {
    const { codigo } = req.params;
    const produto = repo.obterPorCodigo(codigo)
    res.status(200).send(produto);
})

export default router;
