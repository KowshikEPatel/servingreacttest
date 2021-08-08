const express = require("express")
const path = require("path")
const app  = express()
const port  = process.env.PORT||8000
app.use(express.json())

var htmlPath = path.join(__dirname, 'frontend','build');
app.use(express.static(htmlPath))
app.use(express.static("public"));

app.listen(port,()=>{console.log("server started")})