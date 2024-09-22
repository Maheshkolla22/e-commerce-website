
document.querySelector('.navbar').addEventListener('click', function() {
  this.classList.toggle('active');
});

let cartCount = 0;
let cart = [];

function updateCartCount() {
  const cartIcon = document.querySelector('.cart-icon');
  cartIcon.textContent = 'Cart (${cart.length})';
}

document.querySelector('.btn-primary').addEventListener('click', function() {
  alert('Redirecting to Shop!');
});

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.getAttribute('data-product-id');
    addToCart(productId);
  });
});

function addToCart(productId) {
  if (cart.includes(productId)) {
    alert('Product is already in the cart!');
  } else {
    cart.push(productId);
    alert('Product added to the cart!');
    updateCartCount();
  }

  console.log(cart); 
}


document.querySelectorAll('.btn-category').forEach(button => {
  button.addEventListener('click', function() {
    alert('You are now exploring the ${this.previousElementSibling.textContent} category!');
  });
});




function validateEmail() {
  const emailInput = document.getElementById('email').value;
  const errorMessage = document.getElementById('error-message');


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {

    errorMessage.style.display = 'none';
    alert("Thank you for subscribing to our newsletter!");
    return true;
  } else {
  
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }
}