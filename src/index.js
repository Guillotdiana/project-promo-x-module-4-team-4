//import 
const express = require("express")

//crear mi server
const server = express();

//configuración del servidor
const PORT = 5000;
server.listen(PORT, () => {
    console.log("server is running " + PORT);
});

//rutas estáticas
const staticUrl = "./web/dist";
server.use(express.static(staticUrl));
