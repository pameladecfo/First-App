/*
* Exemplo de aplicação Node.js com MongoDB
* Autor: Wellington Wagner F. Sarmento
* 
*
* Este exemplo foi baseado no código escrito em:
* Utilizando a engine EJS para aplicações em NodeJS 
* (https://www.codementor.io/@nulldreams/utilizando-a-engine-ejs-para-aplicacoes-em-nodejs-dok81l3si)
*
*
*/

const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");


const port=3030;
const address = "localhost";

const utils = require("./utils");

let toggleBol=true;


global.users =[
    {ntira:24,keyword:"Bicicleta",prota:"Roger",date:"2021-04",publi:true},
    {ntira:10,keyword:"Futuro",prota:"Bia",date:"2021-06",publi:true},
    {ntira:34,keyword:"Chuva",prota:"Zé Patinhas",date:"2021-05",publi:true},
    {ntira:14,keyword:"Brincadeira",prota:"Pam",date:"2021-03",publi:false}
    ];


//ativa uso do EJS e do Express-ejs-layouts
app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); //prepara a aplicacao para receber dados na forma de query string
app.use(express.json()); //prepara a aplicacao para receber dados no formato JSON


//Criando usando rotas simples que estão no arquivo routes.js
app.use('/',routes);

//Criando um servidor simples com o Node.js e o Express
const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço ${host} e porta ${port}`);
});