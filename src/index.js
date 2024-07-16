//import 
const express = require("express")
const cors = require("cors")
const mysql = require("mysql2/promise")
const pa2th = require("path");
require("dotenv").config();


//crear mi server
const server = express();
server.use(cors());
server.use(express.json( {limit: '20mb' }));
server.set("view engine", "ejs");
require('dotenv').config();

//configuración del servidor
const PORT = process.env.PROJ_PORT || 5001;



server.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});

//crear servidor de estático con la ruta de carpeta css
server.use(express.static('./src/css'));

async function connectDB(){  

    const conex = await mysql.createConnection({  
      
        host: "sql7.freesqldatabase.com",
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "sql7720167"
    });
    await conex.connect() 
    return conex;
}



//endpoints

server.get("/getBooks", async (req, res) => {
    const conn = await connectDB();
    const select = `SELECT * FROM Book INNER JOIN author on Book.fkAuthor= author.idAuthor`;
    const [result] = await conn.query(select);
    res.json({ data: result, count: result.length });
    conn.end();
});

 //endpoint para añadir libro
server.post("/addBook", async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const conn = await connectDB();
    const insertAuthor = 'INSERT INTO author (name, country, photo) values(?, ?, ?)';
    const [resultAuthor] = await conn.query(insertAuthor, [data.name, data.country, data.photo]);
    //insertId
    const authorId = resultAuthor.insertId;
    const insertProject = 'INSERT INTO Book (title, published, shop, reviews, genre, descr, image, fkAuthor) values (?, ?, ?, ?, ?, ?, ?, ?)';
    const [resultProject] = await conn.query(insertProject, 
        [data.title, 
            data.published, 
            data.shop, 
            data.reviews, 
            data.genre, 
            data.descr, 
            data.image, 
            authorId])
    const requiredFields = ["name", "country", "photo", "title", "published", "shop", "reviews", "genre", "descr", "image"]; for (const field of requiredFields) { if (!data[field]) { return res.status(400).json({ success: false, message: `El campo ${field} es obligatorio` }); } }

    //insert BD
    res.json({ 
        bookURL: `${PORT}detailBook/${resultProject.insertId}`,
        success: true  })
    
    conn.end()
});

//motor de plantilla para renderizar el detalle
server.get("/detailBook/:idBook", async (req, res) => {
    const conn = await connectDB();
    const {idBook} = req.params;
    const findBook = 'SELECT * FROM Book INNER JOIN author on Book.fkAuthor = author.idAuthor WHERE idBook = ?';
    const [resultBook] = await conn.query(findBook, [idBook]);
    console.log(resultBook[0]);
    res.render('detail', { detail: resultBook[0] });
    conn.end();
});

//endpoint delete 
server.delete("/deleteBook/:idBook", async (req, res) => {
    try{
        const conn = await connectDB();
        const {idBook} = req.params;
       
        const deleteBook  = "DELETE FROM Book WHERE idBook = ?;"
        
        const [result] = await conn.query(deleteBook, [idBook]);

        if(result.affectedRows > 0){
            res.status(200).json({succes: true});
        } else {
            res.status(200).json({succes: false, message: "No existe ese libro"});
        }

    } catch(error){
        res.status(400).json(error);
    }
 });


//rutas estáticas
const staticUrl = "./src/public";
server.use(express.static(staticUrl));


