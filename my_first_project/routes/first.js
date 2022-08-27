var express=require('express')
var router=express.Router()
router.get('/first_action',function(req,res){
    res.render("helloworld",{name:'saksham',city:'pune-hadrabad',designation:'junior engineer'})
})
module.exports=router
