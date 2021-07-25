const express=require ('express')
const router =express.Router()
const commande = require('../controllers/commandeControllers') 
router.get('/getCommande',commande.getCommande)
router.post('/addCommande',commande.addCommande)
router.put('/:id/updateCommande',commande.updateCommande)
router.delete('/:id/deleteCommande',commande.deleteCommande)
module.exports=router