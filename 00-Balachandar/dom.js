const view1= document.getElementById("view1");
console.log(view1);

const view2= document.querySelector("#view2");
console.log(view2);

view2.style.display="none";


const view= document.getElementsByClassName("view");

console.log(view);

const sameview = document.querySelectorAll(".view")

console.log(sameview);

const evenDivs= view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs[4].style.backgroundColor="purple";

for (i=0; i<evenDivs.length; i++){
  evenDivs[i].style.width="150px";
  evenDivs[i].style.backgroundColor="green";
}


const navText= document.querySelector("nav h1");
console.log(navText);
navText.textContent="hello World";

const navBar= document.querySelector("nav");
navBar.innerHTML = '<h1> Dhuddu </h> <p>Subscribe<p>';
console.log(navBar);
navBar.style.display="flex";
navBar.style.flexDirection="column";

view2.style.display="flex";
view1.style.display="none";

