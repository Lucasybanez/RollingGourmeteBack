import express from "express";

const routerAdmin = express.Router();

routerAdmin.get("/admin", (req, res)=>{
    res.json(
        {
            data:{
                title: "Ruta privada",
                user: req.usuario
            }
        }
    );
});

export default routerAdmin;