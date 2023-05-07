const express = require("express")
const app = express()
const expressWinston = require("express-winston")
const {transports, format} = require("winston")


app.use(expressWinston.logger({
    transports:[
        new transports.Console()
    ],
    format:format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    )
}))

app.get("/",(req,res)=>{
    res.sendStatus(200)
})

app.listen(4000,()=>{
    console.log("Server is running at port 4000")
})

