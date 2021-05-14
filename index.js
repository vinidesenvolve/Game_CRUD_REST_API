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

app.listen(8001, () => {
    console.log("Serve is on!")
})