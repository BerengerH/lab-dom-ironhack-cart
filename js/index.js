// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price span').innerHTML);
  let quantity = product.querySelector('.quantity input').value;
  let result = price * quantity;
  let subtotal = product.querySelector(".subtotal span").innerHTML = result;
  return subtotal;
}


function calculateAll() {

  // ITERATION 2
  let productRow = Array.from(cart.getElementsByClassName("product"));
  productRow.forEach(element => {
    return updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here
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
