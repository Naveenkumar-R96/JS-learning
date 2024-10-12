/* console.log("hi")

const myPromise=new Promise((resolve,reject)=>{
    const error=false;
    if(!error){
        resolve("no error")
    }
    else{
        reject("got a error")
    }
})


const myNextPromise=new Promise((resolve,reject)=>{
  setTimeout(function(){
    resolve("myNextPromise resolved")
  },3000)   
})

myNextPromise.then(value=>{
    console.log(value)
})
myPromise.then(value=>{
    console.log(value)
}) */
 const myUsers={
    userList:[]
}

const users =async()=>{
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const usersData =  await response.json()
  
   return usersData
   
}
const anotherFunction = async()=>{
  const data = await users()
  myUsers.userList=data
  anotherFunction()
console.log(myUsers)
  return data
  
}




/* const users=fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
     return response.json()
}).then(users=>{
    users.forEach(users=>{
        console.log(users)
    })
})
console.log(users) */
