import express, { request, response } from "express";
const routerUsuarios = express.Router();
import {postUsuario, getAllUsuarios, getUnUsuario, putUsuario, deleteUsuario, login} from "../controllers/usuarioController";

routerUsuarios.get("/Usuarios", getAllUsuarios);

routerUsuarios.get("/Usuarios/:id", getUnUsuario);

routerUsuarios.post("/Usuarios", postUsuario);

routerUsuarios.post("/Usuarios/login", login)

routerUsuarios.put("/Usuarios/:id", putUsuario);

routerUsuarios.delete("/Usuarios/:id", deleteUsuario);

export default routerUsuarios;