// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = product.querySelector('.quantity input').value;
  let result = price * quantity;
  let subtotal = product.querySelector(".subtotal span").innerHTML = result;
  return subtotal;
}


function calculateAll() {

  // ITERATION 2 AND 3
  let productRow = Array.from(cart.getElementsByClassName("product"));
  let pricesArray = [];
  productRow.forEach(element => {
    pricesArray.push(updateSubtotal(element));
    return updateSubtotal(element);
  });

  let totalPrice = pricesArray.reduce((a, b) => a + b);
  document.querySelector("#total-value span").innerHTML = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
