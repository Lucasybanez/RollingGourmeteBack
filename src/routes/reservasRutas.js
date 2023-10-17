import { express } from "express"
const routerReservas = express.Router();
import { postReserva, getAllReservas, getUnaReserva, putReserva, deleteReserva} from "../controllers/reservaController";
import routerUsuarios from "./usuariosRutas";

// GET
routerReservas.get("/Reservas", getAllReservas);

// GET
routerReservas.get("Reservas/:id", getUnaReserva);

// POST
routerReservas.post("/Reservas", postReserva);

// PUT
routerReservas.put("/Reservas/:id", putReserva);

// DELETE
routerReservas.delete("/Reservas/:id", deleteReserva);

export default routerReservas;