//importar a dependencia do sqlite3
const sqlite3 =require("sqlite3").verbose()

//criar o objeto de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o objeto, para nossas operações
//db.serialize(() => {
    //criar uma tabela
    //db.run(`
    //    CREATE TABLE IF NOT EXISTS places (
    //        id INTEGER PRIMARY KEY AUTOINCREMENT,
    //        image TEXT,
    //        name TEXT,
    //        email TEXT,
    //        contat TEXT,
    //        state TEXT,
    //        city TEXT,
    //        address TEXT,
    //        address2 TEXT,
    //        items TEXT
    //    );
    //`)
    //inserir dados na tabela
    //const query = `      
    //    INSERT INTO places (
    //        image,
    //        name,
    //        email,
    //        contat,
    //        state,
    //        city,
    //        address,
    //        address2,
    //        items
    //    ) VALUES (?,?,?,?,?,?,?,?,?);
    //`    
    //const values = [
    //    "http://localhost:3000/assets/empresa2.jpeg",
    //    "Papersider",
    //    "pvs@hotmail.com",
    //    "99999999999",
    //    "Santa Catarina",
    //    "Rio di Sul",
    //    "Guilherme Gemballa, Jardin América",
    //    "N° 260",
    //    "Eletrônicos, Lâmpadas",
    //]   
    
    //function afterInsertData(err){
    //    if(err){
    //        return console.log(err)
    //    }

    //    console.log("Cadastrado com sucesso")
    //    console.log(this)
    //}
    //db.run(query, values, afterInsertData)

    //consultar os dados

    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows) 
    })
    //deletar um dado

   //deletar um dado

   //db.run(`DELETE FROM places WHERE id=?`, [6], function(err) {
   //     if(err) {
   //         return console.log(err)
   //     }
   //     console.log("Registro deletado com sucesso")
   // })



//})