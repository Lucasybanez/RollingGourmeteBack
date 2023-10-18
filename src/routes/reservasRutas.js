import express, { request, response } from "express";
const routerReservas = express.Router();
import { postReserva, getAllReservas, getUnaReserva, putReserva, deleteReserva, getDisponibilidad} from "../controllers/reservaController";


// GET
routerReservas.get("/Reservas", getAllReservas);

// GET
//routerReservas.get("/Reservas/:id", getUnaReserva);

// GET DISPONIBILIDAD
routerReservas.post("/Reservas/ocupadas", getDisponibilidad);

// POST
routerReservas.post("/Reservas", postReserva);

// PUT
routerReservas.put("/Reservas/:id", putReserva);

// DELETE
routerReservas.delete("/Reservas/:id", deleteReserva);

export default routerReservas;