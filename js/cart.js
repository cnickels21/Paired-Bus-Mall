/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');
  for (var i = 0; i < tableRows.length; i++) {
    if (tableRows[i]) {
      tableRows[i].remove();
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
console.log('hi');
  // TODO: Find the table body
  
  for (var i = 0; i < cart.length; i++) {
    var tableBody = document.getElementsByTagName('tbody');
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    var cartItemName = document.createElement('td');
    var cartItemAmount = document.createElement('td');
    cartItemName.textContent = cart[i].product;
    cartItemAmount.textContent = cart[i].quantity;
    tableRow.appendChild(cartItemName);
    tableRow.appendChild(cartItemAmount);

  }
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
console.log(cart);
