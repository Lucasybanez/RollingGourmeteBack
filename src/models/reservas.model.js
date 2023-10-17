import mongoose from "mongoose";
import { Schema } from "mongoose";

const reservaSchema = new Schema({
    Fecha: {
        type: String,
        required: true,
        max: 8,
        min: 6
    },
    CantidadDePersonas:{
        type: Number,
        required: true,
        max: 5
    },
    Hora: {
        type: String,
        required: true,
        max: 5,
        min: 3
    },
    Responsable: {
        type: String,
        required: true,
        max: 50,
        min: 5
    }
});

const reservaModel = mongoose.model("Reservas", reservaSchema);
export default reservaModel;