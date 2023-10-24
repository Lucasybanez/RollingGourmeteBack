import express, { request, response } from "express";
const routerReservas = express.Router();
import { postReserva, getAllReservas, getUnaReserva, putReserva, deleteReserva, getDisponibilidad} from "../controllers/reservaController";


routerReservas.get("/Reservas", getAllReservas);

routerReservas.post("/Reservas/ocupadas", getDisponibilidad);

routerReservas.post("/Reservas", postReserva);

routerReservas.put("/Reservas/:id", putReserva);

routerReservas.delete("/Reservas/:id", deleteReserva);

export default routerReservas;