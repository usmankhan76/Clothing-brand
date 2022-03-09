const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const path=require('path');
if(process.env.NODE_ENV!=='production') require('dotenv').config()

const stripe=require('stripe')(process.env.STRIPE_SECRET_KEY) //we can use process.env.STRIPE_SECRET_KET because of upper line
const compression=require('compression');
const app=express();  //it will create the new express application
const port=process.env.PORT||5000; // server run on process.env.PORT it will create process port on deployment and on localhost 5000 

 app.use(compression())
 app.use(bodyParser.json())  //any requests coming it process their body tag and convert into the json

 app.use(bodyParser.urlencoded({extended:true}))// it remove the spaces and symbols from the Url 

 app.use(cors()); //cors stand for cross origin request, it block the cross origin requests

if(process.env.NODE_ENV==="production"){ // to understand this step watch the video module# 23 video# 3 

    app.use(express.static(path.join(__dirname,'client/build')))
    app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  }); //it will pass the build html file 
}

app.listen(port,error=>{
    if(error) throw error;
    console.log('Server running on port'+ port );
})

app.post('/payment',(req,res)=>{
    const body={
        source:req.body.token.id,
        amount:req.body.amount,
        currency:'usd'
    }
     
    stripe.charges.create(body,(stripeErr,stripeRes)=>{
         
        if(stripeErr) {
            res.status(500).send({error:stripeErr})}
        else{
            res.status(200).send({success:stripeRes})
        }
    })
})// first we make route so when request come from the client it have the token which contain all the information, we make the object so some information taking from the requset and pass it into the stripe, so what is stripe , when we require the stripe it return us the fucntion ,the fucntion excepts a argument as the first parameter is the stripe secret key we can actually pass the stripe secret key using .env so it return us the object that we can use to make the charger, and we pass it the body object as the first parameter and second parameter is the callback function, the call back represent the request and response object that we get back from the stripe Api request to make the charge (line #37) and after getting the request and responce from charger we also tell our client site application whether or not we got error or successfull (means we also have to responce to the route that is coming from the client side(line#40 and 42))

