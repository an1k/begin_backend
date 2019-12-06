const express=require('express');
const router=express.Router();
const backendHelper=require('../helpers/backendHelper');

router.post('/monitoring',(req, res, next)=>{

        let j={
            msg:req.body.msg
        }
        //console.log(req.body)
        res.send(j)

});

router.get('/test',(req,res,next)=>{

        res.send("test successful")

})

router.post('/getBayDetails',(req,res,nex)=>{
        let bayID=req.body.bayID
        res.send(backendHelper.fetchDetailsByBayID(bayID))
        
});


module.exports=router;
