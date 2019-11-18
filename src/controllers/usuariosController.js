const usuarios = require("../model/usuarios.json")

exports.get = (request,response) => {
    console.log(request.url)
    response.status(200).send(usuarios)
} 
exports.getUsuario = (request,response) => {
    const nome = request.params.nome
    response.status(200).send(usuarios.filter(usuario => usuario.nome == nome))
} 

