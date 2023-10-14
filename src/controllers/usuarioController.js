import usuarioModel from "../models/usuarios.model";
import express, { request, response } from "express";


// GET

const getAllUsuarios = async (request, response) =>{
    try{
        const allUsuarios= await usuarioModel.find();
        response.status(200).json(allUsuarios);
    } catch (error){
        response.status(400).json({message: error.message})
    }
}

// POST
const postUsuario = async (request, response) =>{
    try{
        const usuario = new usuarioModel(request.body );
        await usuario.save();
        response.status(200).json("persona creada");
    } catch (error){
        console.log(error)
    }
}

module.exports = {
    postUsuario,
    getAllUsuarios
}