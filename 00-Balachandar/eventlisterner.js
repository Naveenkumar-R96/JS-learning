/* /* const box=document.querySelector(".box");

const doSomething=()=>{
  alert("iam doing")
}


box.addEventListener("click",doSomething,false);

box.addEventListener("click", function (event){
  console.log(event.target);
  event.target.textContent="subscribed";
}); *//* 


document.addEventListener("readystatechange",(event)=>{
  if(event.target.readyState==="complete"){
    
    console.log("completed");
    initAPP();
  }
})

const initAPP=()=>{
   const box=document.querySelector(".box");
   const p = box.querySelector("p");

   p.addEventListener("click",(event)=>{
    p.style.backgroundColor="blue";
    const myText=event.target.textContent;
    myText==="Kumar"?(event.target.textContent="Naveen"):(event.target.textContent="Kumar")
      
   });

   box.addEventListener("click",(event)=>{
    stop
    box.classList.toggle="orange";
    box.classList.toggle="red";

  
   
   }),true
} */ 

   document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
      console.log("complete");
      initApp();
    }
   })
  
   const initApp=()=>{
    const view3=document.querySelector("#view3");
    const myForm=view3.querySelector("#myForm");
    myForm.addEventListener("submit",(event)=>{
      event.preventDefault();
      console.log("submit event")
    })
   }