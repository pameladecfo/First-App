const express = require("express");
const router = express.Router();

//Especifica a pasta contendo arquivos estáticos. 
//O nome 'public' não precisará ser colocado na rota 
//Para serem alcançados os arquivos e pastas que estão dentro dele. 
//Por isso na imagem que está na página home.ejs só há o indicativo para 'images'
router.use(express.static('public'));


//Req é um objeto que recebe dados da requisição HTTP feita (request). Res permite enviar uma resposta ao navegador (Response)
router.get('/',(req,res)=>{ //callback - funcao que trata dado evento GET
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ //callback - funcao que trata dado evento  GET

    res.render('pages/about');
});

router.get('/personagens',(req,res)=>{ //callback - funcao que trata dado evento  GET

    res.render('pages/personagens');
});

router.get('/cadastro',(req,res)=>{ //callback - funcao que trata dado evento  GET

    //a funcao render pode receber um pametro na forma de objeto literal
    //no caso, ela irá receber um objeto com campo chamado users e com valor igual ao vetor users
    res.render('pages/cadastro',{users:users}); 
});

router.post('/cadastro/remove',(req,res)=>{
    //let item =req.body.id; //pega o valor passado através do parâmetro id e atribui a variável item. 
    let ntira = req.body.ntira;

    if(users.length==0){
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500).json({
            status:'error',
            error:`Removed element: ${ntira}`
        });

    } else {
        for(let cont=0;cont<users.length;cont++){
            if(users[cont].ntira==ntira){
                users.splice(cont,1);
                console.log("Elemento Removido: ",ntira);
                return res.status(200).json({
                    status:'sucess',
                    data:users
                });
                //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
            } else if(cont==users.length-1){
                console.log("Erro ao remover elemento: ",ntira);
                return res.status(400).json({
                    status:'error',
                    error:`Didn't Remove element: ${ntira}`
                });
            }
        }
    }
    
    
    //users.splice(item,1); //este método permite adicionar ou remover um item do vetor em uma dada posição. 
    //res.render('pages/cadastro',{users:users});
    //res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    //res.send(JSON.stringify({sucess:`Elemento removido com sucesso: ${name}`}));
    //console.log("Elemento Removido: ",name);
    
});


router.post('/cadastro/update',(req,res)=>{
    //substitui os valores armazenados no item do vetror dado por id, por valores fornecidos como parametro vindos do navegador.
    //recebe dados do cliente na forma de um objeto JSON

    users[req.body.id].ntira=req.body.ntira; //ID do objeto ou Tag: name
    users[req.body.id].keyword=req.body.keyword;
    users[req.body.id].prota=req.body.prota;
    users[req.body.id].date=req.body.date;
    users[req.body.id].publi=req.body.publi;
    

    res.sendStatus(200); //envia mensagem 200 significando que as modificacoes foram ok
    console.log("Dados recebidos: ",req.body);//mostra no console do servidor os dados recebidos
});

router.get('/cadastro/list',(req,res)=>{

    console.log("Lista: ",users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    //captura os dados de usuários (users) e transforma o vetor de objetos em uma string JSON, para ser enviada ao cliente
    res.send(JSON.stringify(users));
    // res.status(200).json({
    //     status:'sucess',
    //     data: `Lista foi adiocionado com sucesso!`
    // });
});

router.post('/cadastro/add',(req,res)=>{
    
    let user={ ntira: "", keyword: "", prota: "", date: "", publi: ""};

    user.ntira = req.body.ntira;
    user.keyword = req.body.keyword;
    user.prota = req.body.prota;
    user.date = req.body.date;
    user.publi = req.body.publi;

    users.push(user);
    console.log("Usuário cadastrado: ", user);
    console.log("Lista dos usuários: ", users); //nao use esta linha se tiver muitos elementos em users pois causara lentidao no servidor
    res.sendStatus(200);
    res.status(200).json({
        status:'sucess',
        data: `Usuário ${user} foi adiocionado com sucesso!`
    });

});

//Essa linha permite que este código seja exportado como um módulo e possa ser usado em outras partes da aplicação.
module.exports = router;