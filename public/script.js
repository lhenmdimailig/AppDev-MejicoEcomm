document.addEventListener('DOMContentLoaded', function() {
  // Sample featured products data
  const featuredProducts = [
      { name: 'Stethoscope', price: 49.99 },
      { name: 'Blood Pressure Monitor', price: 89.99 },
      { name: 'Thermometer', price: 19.99 }
  ];

  // Function to display featured products
  function displayFeaturedProducts() {
      const featuredSection = document.getElementById('featured-products');
      featuredProducts.forEach(product => {
          const productElement = document.createElement('div');
          productElement.innerHTML = `
              <h3>${product.name}</h3>
              <p>$${product.price.toFixed(2)}</p>
              <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
          `;
          featuredSection.appendChild(productElement);
      });
  }

  // Call the function to display products
  displayFeaturedProducts();
});

// Function to simulate adding to cart
function addToCart(name, price) {
  alert(`Added ${name} to cart - $${price.toFixed(2)}`);
  // In a real application, this would update the cart state
}

// JavaScript to set the active class based on current URL
document.addEventListener("DOMContentLoaded", function() {
  const currentPath = window.location.pathname; // Get the current URL path
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active'); // Add 'active' class to matching link
    }
  });
});