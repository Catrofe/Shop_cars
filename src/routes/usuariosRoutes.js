import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router
  .post("/usuario", UsuarioController.NovoUsuario)
  .post("/usuario/login", UsuarioController.Login)
  .put("/usuario/:id", UsuarioController.AtualizaUsuario)
  .get("/usuario/:id", UsuarioController.GetUsuario)
  // .delete("/autores/:id", AutorController.excluirAutor)


export default router;   