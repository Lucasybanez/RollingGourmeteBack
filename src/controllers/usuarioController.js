import usuarioModel from "../models/usuarios.model";
import express, { request, response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// GET
const getAllUsuarios = async (request, response) =>{
    try{
        const allUsuarios = await usuarioModel.find();
        response.status(200).json(allUsuarios);
    } catch (error){
        response.status(400).json({message: error.message});
    }
}

// GET POR ID

const getUnUsuario = async (request, response) =>{
    try{
        const id= request.params.id;
        const usuario = await usuarioModel.findById(id);
        if(usuario){
            response.status(200).json(usuario);
        } else {
            response.status(404).json({error: "usuario no encontrado"});    
        }
        
    } catch (error){
        response.status(404).json({error: "usuario no encontrado"});
    }
}

// POST
const postUsuario = async (request, response) =>{
    const { Nombre, Email, Contrasena, Rol}= request.body;
    const hash = await bcrypt.hash(Contrasena,10);
    try{
        const usuario = new usuarioModel({
            Nombre,
            Email,
            Contrasena: hash,
            Rol
        });
        await usuario.save();
        response.status(200).json("usuario creado");
    } catch (error){
        response.status(400).json({error: "No se pudo crear el usuario"});
    }
}

// LOGUEO

const login = async (request, response) => {
    const usuario= await usuarioModel.findOne({Email: request.body.Email});
    try{
        if (usuario){
            const match = await bcrypt.compare(request.body.Contrasena, usuario.Contrasena);
            
            if (!match){
                response.status(401).json({error: "Contraseña incorrecta"});    
            }
            else {            
                // creamos el token
                const token = jwt.sign({ //PAYLOAD
                    id: usuario._id,
                    Nombre: usuario.Nombre,
                    Rol: usuario.Rol
                },
                process.env.SECRET_KEY, // clave secreta
                {expiresIn: "1d"} // expiración del token
                );
                //response.status(201).json({message: "Acceso concedido"});  
                response.header("auth-token", token).json({
                    error: null,
                    data: {token}
                });
            }
        } else {
            response.status(404).json({error: "usuario incorrecto"});
        }
    } catch (error){
        response.status(400).json({error: "no se pudo procesar el pedido"}, error);
    }
}

// PUT

const putUsuario = async (request, response) => {
    try {
        const id = request.params.id;
        const usuario = await usuarioModel.findById(id);
        if(usuario){
            usuario.Nombre = request.body.Nombre;
            usuario.Email = request.body.Email;
            usuario.Rol = request.body.Rol;
            await usuario.save();
            response.status(200).json("usuario modificado");
        } else {
            response.status(404).json("usuario no encontrada");
        }
    } catch (error){
        response.status(404).json({error: "usuario no encontrado"});
    }
}

const deleteUsuario = async (request, response) => {
    try {
        const id = request.params.id;
        await usuarioModel.findOneAndDelete({_id: id});
        response.status(200).json({message: "usuario eliminado"});
        } catch (error) {
            response.status(404).json({error: "usuario no encontrado"});
        }
}

module.exports = {
    postUsuario,
    getAllUsuarios,
    getUnUsuario,
    putUsuario,
    deleteUsuario,
    login
}
