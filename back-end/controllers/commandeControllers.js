COMMANDE=require('../models/commandeModels')
module.exports={
    //get All Commande
    getCommande:async(req,res)=>{
      try {
        const commande = await COMMANDE.find();
        res.json(commande);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
    },

    // add new Commande
    addCommande: async (req, res) => {
      const num = req.body.num
      const date = req.body.date
      const ordre = req.body.ordre
      

    
      try {
        commande = new COMMANDE({
          num,
          date,
          ordre
        });
        await commande.save();
        res.json(commande);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }        },
    

      //update Commande
      updateCommande:async(req,res)=>{
        try {
          const commande = await COMMANDE.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
          );
          res.json(commande);
        } catch (error) {
          console.error(error.message);
        }
    },

      //delete Commande
      deleteCommande:async(req,res)=>{
        try{
          const commande = await COMMANDE.findByIdAndDelete(req.params.id)
        res.json(commande)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("server error");
        }
    }

}