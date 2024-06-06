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
        user: "freedb_books4you_admi",
        password: "!q*ENzEAC6rdCgb",
        database: "freedb_books4you"
    });
    await conex.connect() 
    return conex;
}



//endpoints

server.get("/getBooks", async (req, res) => {
    const conn = await connectDB();
    const select = `SELECT * FROM Book INNER JOIN author on Book.fkAuthor= author.id`;
    const [result] = await conn.query(select);
    
    res.json({ data: result, count: result.length });
    conn.end();
});

server.post("/addBook", (req, res) => {

    res.json({ success: true, bookURL: "" })
});

server.get("/detailBook", (req, res) => {
    //para renderizar el detalle
});

server.delete("/delete", () =>{

});

//rutas estáticas
const staticUrl = "./src/public";
server.use(express.static(staticUrl));
