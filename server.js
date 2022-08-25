const express=require('express');
const app=express();
app.get('',(req,res)=>{
    res.send('Hello express');
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})
app.listen('4000',()=>{
    console.log("server is listening on port 4000");
})
app.use(express.static(__dirname));

var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://local-1-29sharma.harperdbcloud.com',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': "Basic " + Buffer.from('mohit'+ ':' + 'mohit29#').toString('base64')
  },
  body: JSON.stringify({
    "operation": "create_schema",
    "schema": "dev"
})

};
request(options, function (error, response) { 
  if (error) throw new Error(error);
  console.log(response.body);
});

app.get('/send',(req,res)=>{
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
          "username": "hdb_user",
          "password": "password",
          "active": true
      })
      
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        console.log(response.body);
      });
      res.send("hi")
})
