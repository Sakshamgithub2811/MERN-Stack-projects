var express=require('express')
var router=express.Router()

router.get('/productinterface',function(req,res){
    res.render('productinterface',{status:false})
})
router.get('/get_amount',function(req,res){
    console.log("REQUEST",req.query)
    
    var pn=req.query.productname
    var rate=0
    var qty=parseInt(req.query.qty)
    if (pn=='Amul milk')
    {
        rate=55
    }
    else if (pn=='Amul cheese')
    {
        rate=400
    }
    else if (pn=='Amul butter')
    {
        rate=500
    }
    var amt=rate*qty
    
    res.render('productinterface',{ status:true,productname:pn,qty:qty,rate:rate,amount:amt})
})


module.exports=router