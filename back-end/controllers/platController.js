PLAT=require('../models/platModels')
module.exports={
    //get All Plat
    getPlat:async(req,res)=>{
      try {
        const plat = await PLAT.find();
        res.json(plat);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    },

    // add new Plat
    addPlat: async (req, res) => {
      const nom = req.body.nom
      const type = req.body.type
      const quantite = req.body.quantite
      const prix = req.body.prix

    
      try {
        plat = new PLAT({
          nom,
          type,
          quantite,
          prix
        });
        await plat.save();
        res.json(plat);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
        },
    

      //update Plat
      updatePlat:async(req,res)=>{
               try {
          const plat = await PLAT.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(plat);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete Plat
      deletePlat:async(req,res)=>{
        try{
          const plat = await PLAT.findByIdAndDelete(req.params.id)
        res.json(plat)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}