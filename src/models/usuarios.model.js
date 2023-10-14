import mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
    Nombre: String,
    Email: String,
    Contrasena: String,
    Rol: String
  });

  const usuarioModel = mongoose.model("Usuarios", usuarioSchema);

  export default usuarioModel;