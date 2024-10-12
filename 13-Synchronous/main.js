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
/*  const myUsers={
    userList:[]
}

const users =async()=>{
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const usersData =  await response.json()
  anotherFunction(usersData)
   return usersData
   
}
const anotherFunction =(data)=> {async()=>{
  const data = await users()
  myUsers.userList=data
  
  console.log(data)
  return data
  
}}
 */
/* const users=fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
     return response.json()
}).then(users=>{
    users.forEach(users=>{
        console.log(users)
    })
})
console.log(users) */
 const jokeObject={id: 'FYTv41LmbFd', joke: 'You will never guess what Elsa did to the balloon. She let it go.'}

const postDatJoke=async (jokeObj)=>{
  const response= await fetch ("https://httpbin.org/post" , {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(jokeObj)
  })
  const respponseData=await response.json()
  console.log(respponseData.headers)
}

postDatJoke(jokeObject)