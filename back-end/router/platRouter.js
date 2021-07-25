const express=require ('express')
const router =express.Router()
const plat = require('../controllers/platController') 
router.get('/getPlat',plat.getPlat)
router.post('/addPlat',plat.addPlat)
router.put('/:id/updatePlat',plat.updatePlat)
router.delete('/:id/deletePlat',plat.deletePlat)
module.exports=router