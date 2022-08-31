const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const sessionStorage=require('sessionstorage')
var request = require('request');

// app.get('',(req,res)=>{
//     res.send('Hello express');
// })
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/index.html");
})
app.get('/builder',(req,res)=>{
  res.sendFile(__dirname+"/views/builder.html");
})
app.get('/recruit',(req,res)=>{
  res.sendFile(__dirname+"/views/recruit.html")
})
app.get('/r/:id',(req,res)=>{
  res.sendFile(__dirname+"/views/recruit.html");
  var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://local-1-29sharma.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': "Basic " + Buffer.from('mohit'+ ':' + 'mohit29#').toString('base64')
  },
  body: JSON.stringify({
    "operation": "search_by_value",
    "schema": "users",
    "table": "recruiter",
    "search_attribute": "email",
    "search_value": "mohit",
    "get_attributes": [
        "email",
        "password"
    ]
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  var x=response.body;
  console.log(x)
  
});
})
app.get('/candidates',(req,res)=>{
  res.sendFile(__dirname+"/views/test.html");
})
app.get('/login',(req,res)=>{
  res.sendFile(__dirname+"/views/login.html");
})
const port=process.env.PORT || 4000
app.listen(port,()=>{
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

app.post('/dashboard',(req,res)=>{
  res.sendFile(__dirname+"/views/dashboard.html");
  sessionStorage.setItem("user",req.body.username)
  var options = {
    'method': 'POST',
    'url': 'https://local-1-29sharma.harperdbcloud.com',
    'headers': {
      'Content-Type': 'application/json',
      'Authorization':  "Basic " + Buffer.from('mohit'+ ':' + 'mohit29#').toString('base64')
    },
    body: JSON.stringify({
      "operation": "insert",
      "schema": "users",
      "table": "recruiter",
      "records": [
          {   
              "email":req.body.username,
              "password":req.body.pwd,
              "jobs":0
          }
      ]
  })
  
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
  });
})
