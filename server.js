const express=require('express');
const app=express();
const bodyParser=require('body-parser');
var request = require('request');
// app.get('',(req,res)=>{
//     res.send('Hello express');
// })
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/views/home.html");
})
app.get('/builder',(req,res)=>{
  res.sendFile(__dirname+"/views/builder.html");
})
app.get('/recruit',(req,res)=>{
  res.sendFile(__dirname+"/views/recruit.html");
})
app.listen('4000',()=>{
    console.log("server is listening on port 4000");
})
app.use(express.static(__dirname));
app.use(express.static(__dirname+'/views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/add',(req,res)=>{
res.send('User name is:'+req.body.username);

var options = {
  'method': 'POST',
  'url': 'https://local-1-29sharma.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': "Basic " + Buffer.from('mohit'+ ':' + 'mohit29#').toString('base64')
  },
  body: JSON.stringify({
    "operation": "add_user",
    "role": "super_user",
    "username": req.body.username,
    "password": req.body.pwd,
    "active": true
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});
})

app.get('/info',(req,res)=>{
  var options = {
    'method': 'POST',
    'url': 'https://local-1-29sharma.harperdbcloud.com',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': "Basic " + Buffer.from('mohit'+ ':' + 'mohit29#').toString('base64')
    },
    body: JSON.stringify({
      "operation": "user_info"
  })
  
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
  });
})
