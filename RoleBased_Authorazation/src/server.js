const express = require("express")
const dot = require("dotenv").config()
const Connection  = require("./Config/db")
const AuthRouter = require("./Routes/auth")

const app = express()
app.use(express.json())


const PORT = process.env.PORT || 8001

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.use('/api/post',AuthRouter)  

app.listen(PORT,()=>{
    console.log(`server is rurring on ${PORT}`);
    Connection()
})
