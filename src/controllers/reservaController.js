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
            res.status(404).json({error: "persona no encontrada"});
        }
    } catch (error){
        res.status(404).json({error: "persona no encontrada"});
    }
}

// POST

 const postReserva = async (req, res) =>{
    try{
        const reserva = new reservaModel(req.body);
        await reserva.save();
        res.status(200).json("reserva creada");
    } catch (error) {
        console.log(error);
    }
 }

 // PUT

 const putReserva = async (req, res) => {
    try {
        const id = request.params.id;
        const reserva = await reservaModel.findById(id);
        if(reserva){
            reserva.Fecha = req.body.Fecha;
            reserva.CantidadDePersonas = req.body.CantidadDePersonas;
            reserva.Hora = req.body.Hora;
            reserva.Responsable = req.body.Responsable;
            await reserva.save();
            res.status(200).json("reserva modificada");  
        } else {
            res.status(404).json("reserva no encontrado");
        }
    } catch (error){
        res.status(404).json("reserva no encontrado");
    }
 }

 // DELETE

 const deleteReserva = async (req, response) => {
    try{
        const id = req.params.id;
        await reservaModel.findOneAndDelete({_id: id});
        response.status(200).json({message: "reserva eliminada"});
    } catch (error){
        console.log(error);
    }
 }

 module.exports = {
    postReserva,
    getAllReservas,
    getUnaReserva,
    putReserva,
    deleteReserva
    
 }