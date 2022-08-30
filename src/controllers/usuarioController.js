import usuarios from "../models/usuarios.js";

class UsuarioController{

  static NovoUsuario = (req, res) => {
    let usuario = new usuarios(req.body);

    usuario.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
      } else {
        res.status(201).send(usuario.toJSON())
      }
    })
  }

  static AtualizaUsuario = (req, res) => {
    const id = req.params.id;

    usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (err) {
        res.status(200).send({message: "Usuario atualizado com sucesso"})
      } else {
        res.status(500).send({message: `${err.message}`})
      }
    })
  }

  static Login = (req, res) => {
    let login = req.body.login;
    let senha = req.body.senha;

    usuarios.findOne({ 'cpf': login, 'senha': senha}, {}, (err, usuario) => {
      if (usuario) {
        res.status(200).send(usuario)
      }else {
        res.status(404).json({message: 'Usuario ou senha incorretos.'})
      }

    })
  }
  
  static GetUsuario = (req, res) => {
    const id = req.params.id;

    usuarios.findById(id)
    .exec((err, usuario) =>{
      if (!err){
        res.status(200).send(usuario)
      } else{
        res.status(404).send({message: 'Usuario não localizado.'})
      }
    })

  }
}

export default UsuarioController