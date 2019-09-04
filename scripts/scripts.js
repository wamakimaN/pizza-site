//business logic//
var totalPriceArray = [];//global variable
function Order (crust,toppings,topping2,cheese,meat,sauce) {
  this.crust = pizzaCrust;
  this.topping=pizzaTopping;
  this.topping2=pizzaToppingTwo;
  this.cheese = pizzaCheese;
  this.meat=pizzaMeat;
  this.sauce=pizzaSauce;
  this.protoPrice=0;
}
Order.prototype.pizzaPrice = function(){
  if (this.pizzaCrust === "crispy" && size === "small") {
    this.protoPrice += 210;
  }else if (this.pizzaCrust === "crispy" && size === "medium") {
    this.protoPrice += 300;
  }else if (this.pizzaCrust === "crispy" && size === "large") {
    this.protoPrice += 390;
  }
  if (this.pizzaCrust === "stuffed" && size === "small") {
    this.protoPrice += 220;
  }else if (this.pizzaCrust === "stuffed" && size === "medium") {
    this.protoPrice += 310;
  }else if (this.pizzaCrust === "stuffed" && size === "large") {
    this.protoPrice += 400;
  }
  if (this.pizzaCrust === "gluten" && size === "small") {
    this.protoPrice += 230;
  }else if (this.pizzaCrust === "gluten" && size === "medium") {
    this.protoPrice += 320;
  }else if (this.pizzaCrust === "gluten" && size === "large") {
    this.protoPrice += 410;
  }
  if (this.pizzaTopping === "mushrooms" && size === "small") {
    this.protoPrice += 60;
  }else if(this.pizzaTopping === "pineapple" && size === "small") {
    this.protoPrice += 50;
  }else if(this.pizzaTopping === "red-onions" && size === "small") {
    this.protoPrice += 30;
  }else if(this.pizzaTopping === "green-pepper" && size === "small") {
    this.protoPrice += 40;
  }else if(this.pizzaTopping === "olives" && size === "small") {
    this.protoPrice += 60;
  }
  if (this.pizzaTopping === "mushrooms" && size === "medium") {
    this.protoPrice += 70;
  }else if(this.pizzaTopping === "pineapple" && size === "medium") {
    this.protoPrice += 60;
  }else if(this.pizzaTopping === "red-onions" && size === "medium") {
    this.protoPrice += 40;
  }else if(this.pizzaTopping === "green-pepper" && size === "medium") {
    this.protoPrice += 50;
  }else if(this.pizzaTopping === "olives" && size === "medium") {
    this.protoPrice += 70;
  }
  if (this.pizzaTopping === "mushrooms" && size === "large") {
    this.protoPrice += 80;
  }else if(this.pizzaTopping === "pineapple" && size === "large") {
    this.protoPrice += 70;
  }else if(this.pizzaTopping === "red-onions" && size === "large") {
    this.protoPrice += 50;
  }else if(this.pizzaTopping === "green-pepper" && size === "large") {
    this.protoPrice += 60;
  }else if(this.pizzaTopping === "olives" && size === "large") {
    this.protoPrice += 80;
  }
  if (this.pizzaToppingTwo === "mushrooms" && size === "small") {
    this.protoPrice += 60;
  }else if(this.pizzaToppingTwo === "pineapple" && size === "small") {
    this.protoPrice += 50;
  }else if(this.pizzaToppingTwo === "red-onions" && size === "small") {
    this.protoPrice += 30;
  }else if(this.pizzaToppingTwo === "green-pepper" && size === "small") {
    this.protoPrice += 40;
  }else if(this.pizzaToppingTwo === "olives" && size === "small") {
    this.protoPrice += 60;
  }
  if (this.pizzaToppingTwo === "mushrooms" && size === "medium") {
    this.protoPrice += 70;
  }else if(this.pizzaToppingTwo === "pineapple" && size === "medium") {
    this.protoPrice += 60;
  }else if(this.pizzaToppingTwo === "red-onions" && size === "medium") {
    this.protoPrice += 40;
  }else if(this.pizzaToppingTwo === "green-pepper" && size === "medium") {
    this.protoPrice += 50;
  }else if(this.pizzaToppingTwo === "olives" && size === "medium") {
    this.protoPrice += 70;
  }
  if (this.pizzaToppingTwo === "mushrooms" && size === "large") {
    this.protoPrice += 80;
  }else if(this.pizzaToppingTwo === "pineapple" && size === "large") {
    this.protoPrice += 70;
  }else if(this.pizzaToppingTwo === "red-onions" && size === "large") {
    this.protoPrice += 50;
  }else if(this.pizzaToppingTwo === "green-pepper" && size === "large") {
    this.protoPrice += 60;
  }else if(this.pizzaToppingTwo === "olives" && size === "large") {
    this.protoPrice += 80;
  }
  if (this.cheese === "regular" && size === "small") {
    this.protoPrice += 70;
  } else if (this.cheese === "extra" && size === "small") {
    this.protoPrice += 80;
  }
  if (this.cheese === "regular" && size === "medium") {
    this.protoPrice += 80;
  } else if (this.cheese === "extra" && size === "medium") {
    this.protoPrice += 100;
  }
  if (this.cheese === "regular" && size === "large") {
    this.protoPrice += 90;
  } else if (this.cheese === "extra" && size === "large") {
    this.protoPrice += 120;
  }
  if(this.meat === "pepperoni" && size === "small") {
    this.protoPrice += 300;
  } else if (this.meat === "meat-balls" && size === "small") {
    this.protoPrice += 320;
  }else if (this.meat === "chicken" && size === "small") {
    this.protoPrice += 400;
  }else if (this.meat === "beef" && size === "small") {
    this.protoPrice += 350;
  }
  if(this.meat === "pepperoni" && size === "medium") {
    this.protoPrice += 320;
  } else if (this.meat === "meat-balls" && size === "medium") {
    this.protoPrice += 340;
  }else if (this.meat === "chicken" && size === "medium") {
    this.protoPrice += 420;
  }else if (this.meat === "beef" && size === "medium") {
    this.protoPrice += 370;
  }
  if(this.meat === "pepperoni" && size === "large") {
    this.protoPrice += 340;
  } else if (this.meat === "meat-balls" && size === "large") {
    this.protoPrice += 360;
  }else if (this.meat === "chicken" && size === "large") {
    this.protoPrice += 440;
  }else if (this.meat === "beef" && size === "large") {
    this.protoPrice += 390;
  }
  if (this.sauce === "tomato" && size === "small") {
    this.protoPrice += 100;
  } else if (this.sauce === "sweet-pepper" && size === "small") {
    this.protoPrice += 120;
  }
  if (this.sauce === "tomato" && size === "medium") {
    this.protoPrice += 120;
  } else if (this.sauce === "sweet-pepper" && size === "medium") {
    this.protoPrice += 140;
  }
  if (this.sauce === "tomato" && size === "large") {
    this.protoPrice += 140;
  } else if (this.sauce === "sweet-pepper" && size === "large") {
    this.protoPrice += 160;
  }
  return this.protoPrice;
}
Order.prototype.pizzaCost = function () {
  var pizzaTotalPrice = 0;
  for (var i = 0; i < totalPriceArray.length; i ++) {
    pizzaTotalPrice += totalPriceArray[i]
  }
  return pizzaTotalPrice;
  }
  function Address (name, cityName, streetName) {
    this.streetName = streetName;
    this.cityName = cityName;
    this.name = name;
    this.deliveryAdress = (cityName + " " + streetName + ", " + name);
  } 
  
