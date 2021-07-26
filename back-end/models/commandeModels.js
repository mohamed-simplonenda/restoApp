const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const commandeSchema=new Schema({
    num:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    ordre:{
        type:String,
        required:true
    }
})

module.exports = commande = mongoose.model('commande', commandeSchema);