import express, { request, response } from "express";
const routerUsuarios = express.Router();
import {postUsuario, getAllUsuarios, getUnUsuario, putUsuario, deleteUsuario} from "../controllers/usuarioController";

//GET
routerUsuarios.get("/Usuarios", getAllUsuarios);
// GET 1
routerUsuarios.get("/Usuarios/:id", getUnUsuario);

//POST
routerUsuarios.post("/Usuarios", postUsuario);

// PUT
routerUsuarios.put("/Usuarios/:id", putUsuario);

// DELETE
routerUsuarios.delete("/Usuarios/:id", deleteUsuario);

export default routerUsuarios;