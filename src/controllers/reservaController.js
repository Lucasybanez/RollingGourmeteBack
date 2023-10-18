import reservaModel from "../models/reservas.model";

// GET 

const getAllReservas= async (req, res) =>{
    try{
        const allReservas = await reservaModel.find();
        res.status(200).json(allReservas);
    } catch (error){
        res.status(400).json({message: error.message});
    }
}

// GET POR ID 

const getUnaReserva = async (req, res) =>{
    try{
        const id= req.params.id;
        const reserva= await reservaModel.findById(id);
        if (reserva){
            res.status(200).json(reserva);
        } else {
            res.status(404).json({error: "reserva no encontrada"});
        }
    } catch (error){
        res.status(404).json({error: "reserva no encontrada"});
    }
}
// GET DISPONIBILIDAD

const getDisponibilidad = async (req, res) => {
    try {
        const Fecha = req.body.Fecha;
        const Hora = req.body.Hora;
        if (!Fecha || !Hora) {
            return res.status(400).json({ message: "Los parámetros Fecha y Hora son obligatorios." });
        } else {
            const allReservas = await reservaModel.find({ Fecha, Hora });
            res.status(200).json(allReservas);
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error)
    }
}

// POST

 const postReserva = async (req, res) =>{
    try{
        const reserva = new reservaModel(req.body);
        await reserva.save();
        res.status(200).json("reserva creada");
    } catch (error) {
        res.status(400).json({error: "No se pudo crear la reserva"});
    }
 }

 // PUT

 const putReserva = async (req, res) => {

    const id = req.params.id;
    try {
        const reserva = await reservaModel.findById(id);
        if(reserva){
            reserva.Fecha = req.body.Fecha;
            reserva.CantidadDePersonas = req.body.CantidadDePersonas;
            reserva.Hora = req.body.Hora;
            reserva.Responsable = req.body.Responsable;
            await reserva.save();
            res.status(200).json("reserva modificada");  
        } else {
            res.status(404).json("reserva no encontrada");
        }
    } catch (error){
        res.status(400).json("No se puedieron procesar los datos");
    }
 }

 // DELETE

 const deleteReserva = async (req, response) => {
    try{
        const id = req.params.id;
        await reservaModel.findOneAndDelete({_id: id});
        response.status(200).json({message: "reserva eliminada"});
    } catch (error){
        response.status(400).json({error: "No se pudo eliminar la reserva"});
    }
 }

 module.exports = {
    postReserva,
    getAllReservas,
    getUnaReserva,
    putReserva,
    deleteReserva,
    getDisponibilidad
    
 }