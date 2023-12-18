import express, { response } from 'express';
import mysql from 'mysql';
import cors from 'cors'

import cookieParse from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParse());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "deportiva"
})

app.post('/register', (req, res) =>{
    const nombre_cliente = req.body.nombre_cliente;
    const apellido_p = req.body.apellido_p;
    const apellido_m = req.body.apellido_m;
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
        db.query('INSERT INTO clientes (nombre_cliente,apellido_p,apellido_m,correo,contraseña) VALUES(?,?,?,?,?)',[nombre_cliente, apellido_p, apellido_m, correo, contraseña],
        (err,result)=>{
            if(err) return res.json({Error: "Error al registrar datos"});
            return res.json({Status: "Success"});
        })
    })

app.post('/login', (req, data)=>{
    const correo = req.body.correo;
    const contraseña = req.body.contraseña;
    db.query('SELECT * FROM clientes WHERE correo = ? AND contraseña = ?', [correo, contraseña], (err, reusult) =>{
        if(err) return res.json({Error: "Error al registrar datos"});
        return data.json({Status: "Success"});
    })
})

app.get("/visualizar", (req, res) =>{
    db.query('SELECT * FROM productos', (err, result)=>{
        if (err){
            console.log(err);
        } else {
            res.json(result);
        }
    });
});

app.listen(8081,()=>{
    console.log("Corriendo en el puerto 8081")
});