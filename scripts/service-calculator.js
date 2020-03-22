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

function calculate() {
  var itemAmount = document.getElementById("ipt1").value;
  var itemCost = document.getElementById("ipt2").value;
  var totalCost = 0;
  var serviceFee = 0;
  var calculatorResult = document.getElementById("calculatorResult");
  

  totalCost = findCharge(itemAmount, itemCost);
  serviceFee = myTurnout(itemAmount, itemCost);

  
  calculatorResult.innerHTML = "<p>Your service fee is <u>" + serviceFee + "</u> gp.</p><br><p>You will charge <u>" + totalCost +"</u> gp.</p>";
}
