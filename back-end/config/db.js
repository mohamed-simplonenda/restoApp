const mongoose = require('mongoose')
const db_connection = () =>{
    mongoose.connect('mongodb+srv://mohamed:simplonenda@cluster0.etfp2.mongodb.net/restoApp?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      }
    )
 .then(() =>{ console.log('data_base connected')})
    .catch(()=>{console.log('error bch a')})

} 
module.exports = db_connection