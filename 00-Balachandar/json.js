//JSON Javascript object Notation
//text format
//to send and recieve data in many programing languages


const myobject={
  name:"Naveen",
  content:["learn","travel","enjoy"]
  ,sub: function(){
    console.log("thanks for clicking bell button")
  }
};
console.log(myobject);
console.log(myobject.name);
myobject.sub();

const sendJSON=JSON.stringify(myobject);
console.log(sendJSON);

console.log(typeof myobject);
console.log(typeof sendJSON);


const recieveJSON=JSON.parse(sendJSON);
console.log(recieveJSON.name);

console.log(typeof recieveJSON)