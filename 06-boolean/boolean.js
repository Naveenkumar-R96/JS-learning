true
false

console.log(3>5);
console.log(5=='5.00');
console.log(5==='5.00');

if(false) {
  console.log('hello');
}else{
  console.log('else')
}

const age=15;

if (age>=16){
  console.log('you are eligible')
  console.log('congrats')
}
else if(age>=14){
  console.log('Almost there')
}
else{
  console.log('you can not drive');
}


/////////Logical Operators


console.log(true&&false);
console.log(0.2 >=0 && 0.2<1/3);

console.log(true || false);

console.log(!true);

/////Truthy and fasy values

if (0) {
  console.log('truthy')
}
const carQuantity=5;

if (carQuantity){
  console.log('cart has products')
}

console.log(!0);

console.log('text '/5)

//////Ternary Operator

const result= true? 'truthy ': 'falsy';
console.log(result);

const result1= 0? 'truthy ': 'falsy';
console.log(result1);

false&& console.log('hello');

const message= 5 && 'hello';
console.log(message);