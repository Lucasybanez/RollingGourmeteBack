import express from "express";
import 'dotenv/config'
import cors from 'cors'
import morgan from "morgan";
import connectDb from "./src/database/db";
import routerUsuarios from "./src/routes/usuariosRutas";
import routerReservas from "./src/routes/reservasRutas";
import comprobacionJwt from "./src/middleware/comprobacionJwt"
import routerAdmin from "./src/routes/admin";

const app=express();


app.set('port', 8001 || 5050);


const initApp = async () => {
    try{
        await connectDb();
        app.listen(app.get('port'), ()=>{
            console.log(`El back está corriendo en el puerto ${app.get('port')}`);
        }).on('error', (error)=> {
            console.log("Algo salió mal",error);
            process.exit(1);
        });
    } catch (error){
        console.log(error);
    }
}

initApp();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(morgan("dev")); 
app.use(cors()); 

app.use("/api", routerUsuarios);
app.use("/api", routerReservas);
app.use("/privado", comprobacionJwt, routerAdmin);

module.exports = app;