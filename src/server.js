const express = require("express")
const server = express()

// pegar o banco de dados
const db = require("./database/db")

//CONFIG pasta:public
server.use(express.static("public"))
server.use(express.urlencoded("extended: true"))

//Ultilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

//CONFIGURAR CAMINHOS DA APLICAÇÃO
//PAGINA INICIAL
//req: requesição
//res: resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})



server.get("/cadastro", (req, res) => {
    
    console.log(req.query)

    return res.render("cadastro.html")
})
server.post("/savepoint", (req, res) =>{

    //req.body: o corpo do formulario
    
    //inserir dados no banco de dados
    const query = `      
        INSERT INTO places (
            image,
            name,
            email,
            contat,
            state,
            city,
            address,
            address2,
            items
        ) VALUES (?,?,?,?,?,?,?,?,?);
    `    
    const values = [
       req.body.image,
       req.body.name,
       req.body.email,
       req.body.contat,
       req.body.state,
       req.body.city[0],
       req.body.address,
       req.body.address2,
       req.body.items
    ]   
    
    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("cadastro.html", {saved: true})
    }
    db.run(query, values, afterInsertData)

    

})



server.get("/search-results", (req, res) => {

    const search = req.query.search

    // pegar os dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
        if(err){
            return console.log(err)
        }

        const total = rows.length
        //mostrar a página html com os dados
        return res.render("search-results.html", {places: rows, total: total})
    })
})



//LIGAR O SERVIDOR
server.listen(3000)