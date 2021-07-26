const mongoose=require ('mongoose')
const Schema = mongoose.Schema
const platSchema=new Schema({
    nom:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    quantite:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    }
})

module.exports = plat = mongoose.model('plat', platSchema);