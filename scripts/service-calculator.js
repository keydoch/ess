console.log("Type help() for available options.");

function calculate() {
  var itemAmount = document.getElementById("ipt1").value;
  var itemCost = document.getElementById("ipt2").value;
  
  var perItem = perItemCharge(itemCost);
  var totalCost = findCharge(itemAmount, itemCost);
  var serviceFee = myTurnout(itemAmount, itemCost);

  function b() {
    return ("gp\n\r");
  }

  alert(
    "Amount of Items : " + itemAmount + "\n\r" +
    "Price per raw item: " + itemCost + b() +
    "Price per finished item: " + perItem + b() +
    "How much to charge: " + totalCost + b() +
    "Labor cost: " + serviceFee + "gp"
    );
}

function perItemCharge(price) {
  let fprice = price;
  let discount = undefined;
  let fee = undefined;
  discount = fprice * .10;
  fprice -= discount;
  fprice *= 1;
  fee = fprice * .25;
  fprice += fee;
  fprice = Math.trunc(fprice);
  return (fprice);
}

function findCharge(price, amount) {
  let fprice = price;
  let discount = undefined;
  let fee = undefined;
  discount = fprice * .10;
  fprice -= discount;
  fprice *= amount;
  fee = fprice * .25;
  fprice += fee;
  fprice = Math.trunc(fprice);
  return (fprice);
}

function myTurnout(price, amount) {
  let fprice = price;
  let discount = undefined;
  let fee = undefined;
  discount = fprice * .10;
  fprice -= discount;
  fprice *= amount;
  fee = fprice * .25;
  fprice = fee;
  fprice = Math.trunc(fprice);
  return (fprice);
}
