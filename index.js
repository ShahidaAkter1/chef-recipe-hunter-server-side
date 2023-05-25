const express=require ('express');
const app=express();

const port=process.env.Port || 5000;

const cors=require('cors')
app.use(cors())


const chef=require('./data/chef.json');

app.get('/',(req,res)=>{
    res.send('Server is running');
})

app.get('/chef',(req,res)=>{
    res.send(chef);
})

 

app.get('/chef/:id',(req,res)=>{
    // res.send('Server is running in ');
    const chefId=parseInt(req.params.id);
    console.log(chefId);
    const individualId=chef.find(n=>n.id===chefId);
    console.log(individualId);
    res.send(individualId);
  
})

app.listen(port,()=>{
    console.log(`Server is running n port ${port}`);
})

