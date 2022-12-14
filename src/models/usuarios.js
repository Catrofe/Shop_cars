import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true},
    cpf: {type: String, required: true},
    email: {type: String, required: true},
    celular: {type: String, required: true},
    senha: {type: String, required: true},
  }
);

const usuarios = mongoose.model('usuarios', UsuarioSchema);

export default usuarios;