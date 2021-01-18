  
const bodyParser = require('body-parser');
const { Router } = require('express');
const router = Router();

//item schema
const item = require('../models/item');

router.use(bodyParser.json());

//get method for all elements
router.get('/inventory', async (req, res)=>{
    const data = await item.find({});
    res.send(data);
});

//get single element*
router.get('/inventory/:name',function(req,res)
{
   console.log("Getting one fruit");
   item.findOne({name:name})
   .exec(function(err,fruit)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(fruit);
           res.json(fruit);
       }
   })
});

//post method*
router.post('/inventory', async (req, res)=>{
  const { name, quantity } = req.body;
  if(!err){
    const singleItem =  item.create({ name, quantity });
    res.send(singleItem);
  }
  else{
    console.log(err);
  }
});

//put method for single element
router.put('/inventory/:name',function(req,res)
{
   item.findOneAndUpdate({name:req.params.name},req.body).then(function()
   {
    item.findOne({name:req.params.name}).then(function(fruit)
    {
        console.log(req.body);
        res.send(fruit);
    });
   });
});


//put method for all
router.put('/inventory',function(req,res)
{
   item.updateMany(req.body).then(function()
   {
    item.find({})
    .exec(function(err,fruits)
    {
        if(err)
        {
            res.send('error has occured');
        }else{
            console.log(fruits);
            res.json(fruits);
        }
    })
  
});
});


//delete method for single element*
router.delete('/inventory/:itemName', async (req, res)=>{
    let found = false;
    for(let i=0;i<items.length;i++){
        if(item[i].name==req.params.id){
            found = true;
            items.splice(i,i+1);
        }
    }
    if(found){
        res.send("Item removed successfully");
    }
    else{
        res.send("Cannot find the specified item name");
    }
});

//delete all
router.delete('/inventory/', async (req, res)=>{
    item.remove({},function(err,fruits)
    {
        if(err)
        {
            res.send('error has occured');
        }else{
            console.log(fruits);
            res.json(fruits);
        }
    })
});

module.exports = router;