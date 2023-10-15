import mongoose from "mongoose";
import { Schema } from "mongoose";

const usuarioSchema = new Schema({
   /*
    Nombre: String,
    Email: String,
    Contrasena: String,
    Rol: String*/
    Nombre: {
      type: String,
      required: true,
      max: 100,
      min: 3 
    },
    Email: {
      type: String,
      unique: true,
      required: true,
      max: 100,
      min: 5
    },
    Contrasena: {
      type: String,
      required: true,
      max: 100,
      min: 5
    },
      Rol: {
      type: String,
      max: 100,
      min: 5
    }
  });

  const usuarioModel = mongoose.model("Usuarios", usuarioSchema);

  export default usuarioModel;