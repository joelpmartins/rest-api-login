const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require("../models/user.model")

module.exports.login = async (req, res, next) => {
    var validEmail = /\S+@\S+\.\S+/;
    const {email, password} = req.body

    if(!email){
        return res.status(422).json({message: "O endereço de e-mail é obrigatório!"})
    }
    if(!password){
        return res.status(422).json({message: "A senha é obrigatória!"})
    }
    if(validEmail.test(email) == false){
        return res.status(422).json({message: "O endereço de e-mail é inválido!"})
    }

    const user = await User.findOne({email: email})

    if(!user){
        return res.status(404).json({message: "Esse endereço de e-mail não está cadastrado"})
    }

    const checkpassword = await bcrypt.compare(password, user.password)
    
    if(!checkpassword){
        return res.status(422).json({message: "Senha incorreta!"})
    }

    try{
        const secret = process.env.SECRET
        const options = {
            expiresIn: '7d'
        }
        const token = jwt.sign(
            {
                id: user._id
            },
            secret,
            options,
        )
        res.status(200).json({message: "Autentificação realizada com sucesso", token})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "Erro no servidor, tente novamente mais tarde!"})
    }
}