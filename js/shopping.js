function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product +'-number');
  let productNumber = productInput.value;
  if (isIncreasing) {
    productNumber = parseInt(productNumber) + 1;
  } else if(productNumber > 0) {
    console.log(isIncreasing);
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  const productTotal = document.getElementById(product +'-total');
  const caseTotalAmount = productTotal.innerText;
  productTotal.innerText = productNumber * price;
  updateCalculation();
}

function getUpdateNumber(product) {
  const phoneInput =  document.getElementById(product +"-number");
  const phoneNumber = parseInt(phoneInput.value);
  return phoneNumber;
}

function updateCalculation(){
  const phoneNumber = getUpdateNumber('phone') * 1219;
  const caseNumber = getUpdateNumber('case') * 59;
  const subTotal = phoneNumber + caseNumber;
  const tax = subTotal / 10;
  const total = subTotal + tax;
  document.getElementById('sub-total').innerText = subTotal;
  document.getElementById('tax-amount').innerText = tax;
  document.getElementById('total').innerText = total;

}

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber('case', 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});
