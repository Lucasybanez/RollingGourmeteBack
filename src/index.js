import express from "express";
import 'dotenv/config'
import cors from 'cors'
import morgan from "morgan";
import connectDb from "./database/db";
import routerUsuarios from "./routes/usuariosRutas";
import routerReservas from "./routes/reservasRutas";

// creamos una instancia de express
const app=express();

//configuramos el puerto en el que se ejecutará el backend

app.set('port', process.env.PORT || 5050);

//inicializamos nuestro backend

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

// MIDDLEWARES: Configuraciones extras del backend antes de que se ejecuten las rutas

// 1-middle nativo de express

app.use(express.json());
app.use(express.urlencoded({extended: true})); //permite recibir parámetros en las rutas

// 2- middle de terceros

app.use(morgan("dev")); // Brinda detalles en la terminal
app.use(cors()); // permite recibir peteciones remotas

app.use("/api", routerUsuarios);
app.use("/api", routerReservas);