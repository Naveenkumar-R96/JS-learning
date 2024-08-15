/* const firstObject={
  name:"Naveen",
  age:20,
  Region:"indian"
}

console.log(firstObject);

console.log(firstObject.Region) */


const movie ={
  actor:"kavin",
  music:"Arr",
  director:"Lokesh",
  producer:"anbu"
}

/* console.log(Object.values(movie))
  

for (let job in movie){
  console.log(Object.keys(movie))
} */

  let{music}=movie;
  music="Anil";
  console.log(music)