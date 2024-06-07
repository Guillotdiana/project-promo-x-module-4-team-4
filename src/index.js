//import 
const express = require("express")
const cors = require("cors")
const mysql = require("mysql2/promise")

//crear mi server
const server = express();
server.use(cors());
server.use(express.json());

//configuración del servidor
const PORT = 5001;
server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
});

async function connectDB(){  

    const conex = await mysql.createConnection({  
      
        host: "sql.freedb.tech",
        user: "freedb_books4you_admin",
        password: "!q*ENzEAC6rdCgb",
        database: "freedb_books4you"
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
    const data = req.body;
    const conn = await connectDB();
    const insertAuthor = 'INSERT INTO author (name, country, photo) values(?, ?, ?)';
    const [resultAuthor] = await conn.query(insertAuthor, [data.name, data.country, data.img]);
    //insertId
    const insertProject = 'INSERT INTO Book (title, published, shop, reviews, genre, descr, image, fkAuthor) values (?, ?, ?, ?, ?, ?, ?, ?)';
    const [resultProject] = await conn.query(insertProject, [data.title, data.published, data.shop, data.reviews, data.genre, data.descr, data.image, data.fkAuthor, resultAuthor.insertId])

    //insert BD
    res.json({ 
        bookURL: `http://localhost:5001/detailBook/${resultProject.insertId}`,
        success: true  })
});


server.get("/detailBook", (req, res) => {
    //para renderizar el detalle
});

server.delete("/delete", () =>{

});

//rutas estáticas
const staticUrl = "./src/public";
server.use(express.static(staticUrl));
