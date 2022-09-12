const {Router} = require("express")
const {getBranches} = require("../controllers/clients.getBranches")
const {getBenefits} = require("../controllers/clients.getBenefits")
const router = Router()

router.get("/",async (req,res)=> { 
    try{ 
        const {filter} = req.query

       switch(filter) { 
        case "Turismo en Buenos Aires": {
            return getBranches(req,res)
        }
        case "haveVoucher": { 
            return getBenefits(req,res)
        }
            
        default: {
                return null
        }
       }
        

      }catch(e){
        res.json(e)
      }
 })

 module.exports = router;