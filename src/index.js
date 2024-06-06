//import 
const express = require("express")
const cors = require("cors")

//crear mi server
const server = express();
server.use(cors())

//configuración del servidor
const PORT = 5001;
server.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
});

//endpoints

server.get("/getBooks", (req, res) => {
    const books = [];

    res.json({ data: books, count: books.length });
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
