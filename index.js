const express = require("express")
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

var DB = {
    games: [
        {
            id: "1",
            title: "Call of duty",
            year: "2019",
            price: 300
        },
        {
            id: "2",
            title: "Skyrim",
            year: "2013",
            price: 130
        },
        {
            id: "3",
            title: "Tetris",
            year: "1989",
            price: 30
        }
    ]
}

app.get("/games", (req, res) => {
    
    res.json(DB)
    res.statusCode(200)
})

app.get("/game/:id", (req, res) => {
    const id = req.params.id

    if(isNaN(id)){

        res.sendStatus(400)

    }else{
        
        let game = DB.games.find(g => g.id == id)

        if(game != undefined || game != null){

            res.send(game)
            res.sendStatus(200)

        }else{

            res.sendStatus(404)
        }
    }
})

app.post("/game", (req, res) => {
    
    let {id, title, year, price} = req.body

   //validation 

    DB.games.push({ id, title, year, price })

    res.json(DB)
    res.sendStatus(200)
    
})

app.delete("/game/:id", (req, res) => {

    const id = req.params.id

    if(isNaN(id)){

        res.sendStatus(400)

    }else{

        let gameId = DB.games.findIndex(g => g.id == id)

            if(gameId == -1){
                res.sendStatus(404)
            }else{
                DB.games.splice(gameId, 1)
                res.sendStatus(200)
            }
    }
})

app.listen(8001, () => {
    console.log("Serve is on!")
})