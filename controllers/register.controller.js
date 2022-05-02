const bcrypt = require('bcryptjs')

const User = require("../models/user.model")

module.exports.register = async (req, res, next) => {
    var validEmail = /\S+@\S+\.\S+/;
    const {name, email, password, confirmpassword} = req.body
    if(!name){
        return res.status(422).json({message: "O nome é obrigatório!"})
    }
    if(!email){
        return res.status(422).json({message: "O endereço de e-mail é obrigatório!"})
    }
    if(validEmail.test(email) == false){
        return res.status(422).json({message: "O endereço de e-mail é inválido!"})
    }
    if(!password){
        return res.status(422).json({message: "A senha é obrigatória!"})
    }
    if(password.length < 8){
        return res.status(422).json({message: "A senha necessita no mínimo 8 caracteres!"})
    }
    if(!confirmpassword){
        return res.status(422).json({message: "Confirme a senha!"})
    } 
    if(password != confirmpassword){
        return res.status(422).json({message: "As senhas devem ser iguais!"})
    }
    
    const userExists = await User.findOne({email: email})
    if(userExists){
        return res.status(422).json({message: "Esse endereço de e-mail já está sendo utilizado!"})
    }

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try{
        await user.save()
        res.status(201).json({message: "Usuário foi cadastrado com sucesso!"})
    }catch(e){
        console.log(e)
        return res.status(500).json({message: "Erro no servidor, tente novamente mais tarde!"})
    }
}