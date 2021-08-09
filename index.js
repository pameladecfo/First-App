const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");

const port=3000;
const address = "localhost";

//Ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

//Criando e usando rotas simples com o Node.js e o Express
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express

const server = app.listen(port,address,()=>{
     let host = server.address().address;
     let port = server.address().port;
 console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});
