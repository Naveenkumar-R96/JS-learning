/* const myPizza={
  size:"medium",
  crust:"origin",
  bake:function(){
    return console.log(`Baking a ${this.size} ${this.crust} crustpizza.`)
  }

};

myPizza.bake();

class Pizza {
  constructor(){
    this.size= "medium";
    this.crust
  }
} */
/* 
  class Dosa{
    constructor(typeDosa,sizeDosa,crustDosa,topping){
      this.type=typeDosa;
      this.size=sizeDosa;
      this.crust=crustDosa;
      this.topping=topping;
    }
    cook(){
      return console.log(`cooking a ${this.size} ${this.type} ${this.crust} ${this.topping} supehr Dosa`)
    }
  }

  const firstDosa=new Dosa ("Egg" ,"Large","crust", "gee");
  firstDosa.cook(); */


  class Pizza{
    constructor(veg,pizzaname,size,toppping){
      this.type=veg;
      this.name=pizzaname;
      this.size=size;
      this.topping=toppping;
    }
    getSize(){
      return this.size;
    }
    setSize(sizePizza){
      this.size=sizePizza;
      return;
    }
    cook(){
      return console.log(`Baking a ${this.type} and ${this.name} and ${this.size} and ${this.topping}`)
    }
  }

const myPizza=new Pizza("Veg" ,"pottato","Extra Large","cheese")

myPizza.cook()

console.log(setSize("medium"));