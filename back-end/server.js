const express=require('express')
const app = express()
const db = require('./config/db')
db();
const cors =require('cors')
app.use(cors())
const body = require('body-parser')
app.use(express.json())

const users = require('./router/usersRouter')
const commande = require('./router/commandeRouter')
const plat = require('./router/platRouter')
app.use('/resto/users',users)
app.use('/resto/commande',commande)
app.use('/resto/plat',plat)

//  Config server
app.listen(4000,(err)=>{
    if(err){
        console.log('server is not running')
    }
    else {
        console.log(`server is running on port 4000` )
    }
})