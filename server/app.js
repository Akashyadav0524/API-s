const express = require('express')
const connectToDB = require("./config/db")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


connectToDB()

const userRoutes = require("./routes/userROutes")
app.use("/",userRoutes)



app.get("/", (req, res) => {
  res.send("<h1>KYA HAL HAI LADKE</h1>")
})


app.get("/akash.com",(req, res)=>{
    res.json({
        sucesss:true,
        message:"welcome to akash.com"
    })
})

app.get("/youtube",(req, res)=>{
    res.send("<h3>ham youtube che bhaiya</h3>")
})

module.exports =app