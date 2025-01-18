// // ||||||||== <<...WAYS TO INITIALZE FUNCTION..>> ===||||||||||||
/*
Ways to create function

const add = (a,b)=>{
   return a+b;
}

const add = function(a,b){
    return a+b;
}

function add(a,b){
    return a+b;
}

var add = (a,b) => a+b;
*/
// (function(a,b){console.log('hi')})();   // function which run without calling
// ===================================

// ||||||||== <<...WHAT IS CALLBACK FUNCTION...>> ===||||||||||||

/*
function callback() {
  console.log("Addition Completed");
}

const add = (a, b, callback) => {
  var res = a + b;
  console.log(res);

  callback();
};


add(2,4,callback)
*/

/*
const add = (a, b, callback) => {
    var res = a + b;
    console.log(res);
  
    callback();
  };

// add(5,6, function(){console.log("Addition is completed")})
// add(5,6, ()=>console.log("Addition is completed"))
*/

// ||||||||== <<...Learning to ADD new Module: fs ..>> ===||||||||||||
/*
var fs = require('fs');
var os = require('os');


fs.appendFile('greeting.txt','Hi ' + os.userInfo().username + '!\n', ()=>{console.log("file is created")})
*/

//================================================================================


// ||||||||== <<...  Leaning How to import modules..>> ===||||||||||||

/*
console.log("hi")
const note = require('./notes');

console.log(note.num);
console.log(note.add())

*/


//=========================================================================================

// ||||||||== <<...  JSON TO OBJECT && OBJECT TO JSON  ....>> ===||||||||||||

/*
const jsonstr = '{"name":"Mohan", "age":25}';

console.log(typeof jsonstr);

const jsonobj = JSON.parse(jsonstr);  // converting json to obj

console.log(typeof jsonobj);

const jsonewestr = JSON.stringify(jsonobj);

console.log(typeof jsonewestr);   // converting obj to string(JSON)

*/


// ||||||||== <<...  Creating API or Server using express package ....>> ===||||||||||||


const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());


const menuItem = require('./models/menu.js')


app.get('/', function(req,res){
  res.send("This Is your Hotel");
})



//OLD TECHNIQUE

// app.post('/person', (req,res)=>{
//    const data = req.body;

//    const newPerson = new Person(data);
//    newPerson.save((error,savedPerson) =>{
//     if(error){
//          console.log('Error saving person:', error);
//          res.status(500).json({error:'Internal server error'})
//     }
//     else{
//       console.log('data saved successfully');
//       res.status(200).json(savedPerson);
//     }
//    })
// })



const personRoutes = require('./routes/personRoutes');
app.use('/person',personRoutes);

const menuRoutes = require('./routes/menuRoutes');
app.use('/menuitem',menuRoutes);
app.listen(3000,()=>{console.log("Server is listening at 3000")});


//===========================================================================================
