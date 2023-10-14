import express, { request, response } from "express";
const routerUsuarios = express.Router();
import {postUsuario, getAllUsuarios} from "../controllers/usuarioController";

//GET
routerUsuarios.get("/Usuarios", getAllUsuarios);
//POST
routerUsuarios.post("/Usuarios", postUsuario);

export default routerUsuarios;