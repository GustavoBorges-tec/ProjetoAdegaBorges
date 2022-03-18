//Importação do módulo express
const express = require("express");

const conexao = require("../data/conexao");


const verificarToken = require("../middleware/verificarToken");

const router = express.Router();

/* Para o produto, teremos as seguintes rotas:
   
  - /listar -> Listar todos os produtos cadastrados      Verbo GET
  - /buscar/:id -> Buscar um produto por ID              Verbo GET
  - /cadastrar -> Cadastrar o produto                    Verbo POST
  - /atualizar/id -> Atualizar o produto usando o ID     Verbo PUT

*/

router.get("/listar", (req, res) => {
    conexao.query(
      "SELECT * FROM dbadega.produto WHERE tipo='Energético'",
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorno: `Erro interno ->${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.get("/buscar/tipo", (req, res) => {
    conexao.query(
      "SELECT * FROM produto WHERE tipo='Energético' ORDER BY tipo='Energético' DESC",
      [req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorn: `Erro interno -> ${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });
  
  router.post("/cadastrar", verificarToken, (req, res) => {
    conexao.query("INSERT INTO produto SET tipo='Energético'", [req.body], (erro, resultado) => {
      if (erro)
        return res.status(500).send({ retorno: `Erro interno -> ${erro}` });
      res.status(201).send({ retorno: resultado });
    });
  });
  
  router.put("/atualizar/:tipo", verificarToken, (req, res) => {
    conexao.query(
      "UPDATE produto SET ? WHERE tipo='Energético'",
      [req.body, req.params.id],
      (erro, resultado) => {
        if (erro)
          return res.status(500).send({ retorn: `Erro interno -> ${erro}` });
        res.status(200).send({ retorno: resultado });
      }
    );
  });

  
  module.exports = router;