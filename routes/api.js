const express = require('express');
const router = express.Router();
const vaccine = require('../schema/vaccine')



router.get('/vcn', function(req, res){
    vaccine.find().then(function(vaccineList){
        res.send(vaccineList)
    })
})

router.post('/vcn', function(req, res){
    vaccine.create(req.body).then(function(vaccineList){
        res.send(vaccineList)
    })
    // res.send('this is from post')
})

router.put('/vcn/:id', function(req, res){
    vaccine.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        vaccine.findOne({_id:req.params.id}).then(function(vaccineList){
            res.send(vaccineList)
        })
    })
    // res.send('this is from put')
})

router.delete('/vcn/:id', function(req, res){
    vaccine.findByIdAndDelete({_id:req.params.id}).then(function(vaccineList){
        res.send(vaccineList)
    })
    // res.send('this is from delete')
})


module.exports = router;