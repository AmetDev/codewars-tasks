function mango(quantity, price){
  let qty = quantity - Math.floor(quantity / 3);
  return qty * price;
  
}