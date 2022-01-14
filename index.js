const express = require("express");
const app = express();
app.use(express.json());
let customer = [];
let rooms = [];


app.post('/roomdetails',function(req,res){
    rooms.push(req.body);
    
    res.json({
        message: 'Room details'
    })
    })

app.get('/rooms',function(req,res){
   
    res.json(rooms);

})

app.post('/customer_details',function(req,res){
    req.body.id = customer.length + 1;
    customer.push(req.body)
    res.json({
        message: 'customer added'
    })
   
})

app.get('/customers',function(req,res){
    customer.push(req.body)
    res.json(customer)
})


app.get('/room_booking_customer',function(req,res){
    customer.push(req.body)
    const output = customer.map(({status, ...remove})=> remove)
    res.json(output)
        

})



app.listen(3001);