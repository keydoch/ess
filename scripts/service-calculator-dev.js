console.log("Type help() for available options.");

function calculate() {
  var itemAmount = document.getElementById("ipt1").value;
  var itemCost = document.getElementById("ipt2").value;
  var totalCost = 0;
  var serviceFee = 0;
  

  totalCost = findCharge(itemAmount, itemCost);
  serviceFee = myTurnout(itemAmount, itemCost);

  alert("You will charge " + totalCost + " gp." + "\n\rYour service fee is " + serviceFee + " gp.");
}

function help() {
  console.log("Commands:")
  console.log("findCharge(gePrice, itemAmount)");
  console.log("myTurnout(gePrice, itemAmount)");
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
  fprice = Math.round(fprice);
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
  fprice = Math.round(fprice);
  return (fprice);
}
