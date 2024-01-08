const {Router} = require('express')
const router = Router();

const movies1 = require("./sample1.json")

 
router.get("/",(req , res)=>{
    res.json(movies1);

});



 
module.exports = router;
