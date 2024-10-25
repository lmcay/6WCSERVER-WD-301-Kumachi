<template>
  <main>
    <section class="hero__container">
      <div class="hero__section__featured">
        <h1>Kumachi Products</h1>
        <p class="coffee__pastries">
          ───── &nbsp;&nbsp; COFFEE PASTRIES &nbsp;&nbsp;─────
        </p>
      </div>
    </section>

    <section id="cart-sidebar" class="cart">
      <h3>Your Cart</h3>
      <button class="cart-close">✕</button>
      <div id="cart-items"></div>
      <div id="cart-total"></div>
      <button class="clear-cart">Clear Cart</button>
      <router-link to="/confirmation"
        ><button class="checkout">Checkout</button></router-link
      >
    </section>

    <section class="products__container">
      <div class="products__section" id="products__section">
        <!-- Search and Filter -->
        <div class="search-filter">
          <input
            type="text"
            id="search-input"
            placeholder="Search for a product..."
          />
          <select id="filter-type">
            <option value="all">All</option>
            <option value="drink">Drinks</option>
            <option value="pastries">Pastries</option>
          </select>
        </div>
        <div class="products">a</div>
      </div>
    </section>

    <section id="product-modal" class="modal">
      <div class="modal-content">
        <img id="modal-product-image" src="" alt="Product Image" />
        <h2 id="modal-product-name"></h2>
        <p id="modal-product-price"></p>
        <p id="modal-product-description"></p>
        <p id="modal-product-rating"></p>
        <button class="close-modal button__colored">Back</button>
      </div>
    </section>

    <section class="cta__container">
      <div class="cta__section pad-top-5">
        <h3 class="text__center">
          Elevate Your Coffee Journey with the<span><br /></span> Ultimate
          Experience Today!
        </h3>
        <img
          src="../assets/images/Logo-Bear-Icon.webp"
          alt="Kumachi Logo"
          class="bear__icon"
        />
        <p class="cta__p text__center">
          Immerse yourself in a warm and welcoming atmosphere where every
          cup<span><br /></span>is brewed to perfection using only the finest
          ingredients.
        </p>
        <router-link to="/products#products__section"
          ><button class="button__colored">Grab a Coffee</button></router-link
        >
      </div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const alreadyReloaded = localStorage.getItem("pageReloaded");

      if (!alreadyReloaded) {
        localStorage.setItem("pageReloaded", "true");
        location.reload();
      } else {
        localStorage.removeItem("pageReloaded");
      }
    });
  },
  mounted() {
    var desktopHeader = document.getElementById("header");

    // DOM Elements
    const cartIcon = document.querySelectorAll(".cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");
    const cartCountElement = document.querySelectorAll(".cart-count");
    const cartClose = document.querySelector(".cart-close");
    const cartClear = document.querySelector(".clear-cart");

    let searchInput;

    const filterType = document.getElementById("filter-type");

    const modal = document.getElementById("product-modal");
    const modalClose = document.querySelector(".close-modal");
    const modalProductImage = document.getElementById("modal-product-image");
    const modalProductName = document.getElementById("modal-product-name");
    const modalProductPrice = document.getElementById("modal-product-price");
    const modalProductDescription = document.getElementById(
      "modal-product-description"
    );
    const modalProductRating = document.getElementById("modal-product-rating");

    // Cart data
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;
    const products = [
      {
        id: 1,
        name: "Matcha Cookies/pc",
        price: 40,
        type: "pastries",
        image: "../images/product1.webp",
        description:
          "Indulge in the perfect balance of earthy matcha and creamy white chocolate in every bite of our matcha cookies.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 2,
        name: "Crookies/pc",
        price: 80,
        type: "pastries",
        image: "../images/product2.webp",
        description:
          "Savor the delightful fusion of two beloved classics of croissants and chocolate chip cookies.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 3,
        name: "Blueberry Cheesecake/slice",
        price: 140,
        type: "pastries",
        image: "../images/product3.webp",
        description:
          "Our creamy, rich, decadent cheesecake topped with blueberries.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 4,
        name: "Biscoff Cheesecake/slice",
        price: 140,
        type: "pastries",
        image: "../images/product4.webp",
        description:
          "Soft and creamy cheesecake layered with Biscoff biscuits. Perfect for any occasion.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 5,
        name: "Sea Salt Latte",
        price: 75,
        type: "drink",
        image: "../images/product5.webp",
        description: "Creamy espresso with hints of caramel and salt.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 6,
        name: "Peka-Mayap",
        price: 75,
        type: "drink",
        image: "../images/product6.webp",
        description:
          "Shaken espresso with white chocolate and caramel sauce. One of our best-selling drinks.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 7,
        name: "Matcha Latte",
        price: 100,
        type: "drink",
        image: "../images/product7.webp",
        description: "Grinded green tea mixed with creamy milk and vanilla.",
        rating: { good: 0, bad: 0 },
      },
      {
        id: 8,
        name: "Kuti Berry",
        price: 90,
        type: "drink",
        image: "../images/product8.webp",
        description: "Refreshing drink with strawberry bits, soda, and yakult.",
        rating: { good: 0, bad: 0 },
      },
      // Add more products as needed
    ];

    // event listeners
    for (var i = 0; i < cartIcon.length; i++) {
      cartIcon[i].addEventListener("click", toggleCart);
    }
    cartClose.addEventListener("click", toggleCart);
    cartClear.addEventListener("click", clearCart);

    // Initialization
    updateCartDisplay();
    // (kapag nasa products page lang)
    if (window.location.pathname == "/products") {
      console.log("Nasa products page");
      searchInput = document.getElementById("search-input");
      searchAndFilterProducts();
      // Event listeners for products only
      searchInput.addEventListener("input", searchAndFilterProducts);
      filterType.addEventListener("change", searchAndFilterProducts);
      modalClose.addEventListener("click", closeModal);

      // Function to add a product to the cart
      function addToCart(id, name, price, image) {
        if (typeof price !== "number" || isNaN(price) || price <= 0) {
          console.error("Invalid price:", price);
          return;
        }
        if (typeof image !== "string" || !image) {
          console.error("Invalid image URL:", image);
          return;
        }

        const existingItem = cart.find((item) => item.id === id);

        if (existingItem) {
          existingItem.quantity += 1;
          const apiURL = `http://localhost:4000/api/update-item/${id}`;
          axios
            .put(apiURL, { quantity: existingItem.quantity })
            .then(updateCartDisplay())
            .catch((error) => {
              console.log("Error updating quantity:", error);
            });
        } else {
          cart.push({ id, name, price, image, quantity: 1 });

          //   ********* INSERT TO BACKEND

          let apiURL = "http://localhost:4000/api/insert-item";
          const lastItem = cart[cart.length - 1];

          const cartItemData = {
            _id: lastItem.id,
            name: lastItem.name,
            price: lastItem.price,
            image: lastItem.image,
            quantity: lastItem.quantity,
          };

          // Send the individual item to the backend
          axios
            .post(apiURL, cartItemData)
            .then(() => {
              console.log(`Item with id ${lastItem.id} added successfully.`);
              updateCartDisplay();
            })
            .catch((error) => {
              console.log(`Error adding item with id ${lastItem.id}:`, error);
            });
        }

        saveCartToLocalStorage();
        updateCartDisplay();
      }

      // Function to render products dynamically
      function renderProducts(products) {
        const productContainer = document.querySelector(".products");
        productContainer.innerHTML = ""; // Clear existing products

        products.forEach((product) => {
          // Validate product data
          if (
            !product.name ||
            typeof product.price !== "number" ||
            !product.image
          ) {
            console.error("Invalid product data:", product);
            return;
          }

          const productElement = `
                        <div class="product" data-id="${
                          product.id
                        }" data-name="${product.name}" data-price="${
            product.price
          }" data-image="${product.image}">
                            <img src="${product.image}" alt="${
            product.name
          } Image" class="product-image">
                            <div class="product-partition">
                                <p class="product-name">${product.name}</p>
                                <p class="product-price">₱${
                                  product.price
                                }.00</p>
                            </div>

                            <div>
                                <p class="gray">${capitalize(product.type)}</p>
                                <p class="gray">Rating: Good (${
                                  product.rating.good
                                }) | Bad (${product.rating.bad})</p>
                            </div>

                            <div>
                                <button class="add-to-cart-btn">Add to Cart</button>
                                <div class="rate-product">
                                    <button class="rate-btn" data-rating="good" data-id="${
                                      product.id
                                    }">Good</button>
                                    <button class="rate-btn" data-rating="bad" data-id="${
                                      product.id
                                    }">Bad</button>
                                </div>
                            </div>
                        </div>
                    `;

          productContainer.innerHTML += productElement;
        });

        attachEventListeners();
      }

      function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }

      function getOverallRating(good, bad) {
        if (good === 0 && bad === 0) return "No Ratings Yet";
        return good > bad ? "Good" : "Bad";
      }

      // Function to attach event listeners to dynamically rendered products
      function attachEventListeners() {
        document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
          button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".product");
            const id = productElement.getAttribute("data-id");
            const name = productElement.getAttribute("data-name");
            const price = parseFloat(productElement.getAttribute("data-price"));
            const image = productElement.getAttribute("data-image");
            desktopHeader.style.top = "0";
            desktopHeader.style.backgroundColor = "var(--secondary-color)";
            addToCart(parseInt(id), name, price, image);
          });
        });

        document.querySelectorAll(".product-image").forEach((image) => {
          image.removeEventListener("click", handleImageClick);
          image.addEventListener("click", handleImageClick);
        });

        document.querySelectorAll(".rate-btn").forEach((button) => {
          button.addEventListener("click", (event) => {
            const rating = event.target.getAttribute("data-rating");
            const productId = event.target.getAttribute("data-id");
            rateProduct(productId, rating);
          });
        });
      }

      // Function to rate a product
      function rateProduct(id, rating) {
        const product = products.find((p) => p.id == id);

        if (product) {
          if (rating === "good") {
            product.rating.good += 1;
          } else if (rating === "bad") {
            product.rating.bad += 1;
          }
          renderProducts(products);
        }
      }

      // Function to search and filter products
      function searchAndFilterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const filter = filterType.value;

        const filteredProducts = products.filter((product) => {
          return (
            (filter === "all" || product.type === filter) &&
            (product.name.toLowerCase().includes(searchTerm) ||
              product.description.toLowerCase().includes(searchTerm))
          );
        });

        renderProducts(filteredProducts);
      }

      // Function to handle image click for modal display
      function handleImageClick() {
        const productElement = this.closest(".product");
        const id = parseInt(productElement.getAttribute("data-id"));
        const product = products.find((prod) => prod.id === id);

        if (product) {
          modalProductImage.src = product.image;
          modalProductName.textContent = product.name;
          modalProductPrice.textContent = `Price: ₱${product.price}`;
          modalProductDescription.textContent = product.description;
          modalProductRating.textContent = `Rating: Good (${product.rating.good}) | Bad (${product.rating.bad})`;

          modal.style.display = "flex"; // Show modal
        }
      }

      // Function to close the product modal
      function closeModal() {
        modal.style.display = "none";
      }

      // Initialize product display
      renderProducts(products);
    }

    // ===========

    function toggleCart() {
      var cart = document.querySelector(".cart");
      cart.classList.toggle("active");
    }

    // Function to update cart display
    function updateCartDisplay() {
      // ***** FETCH FROM BACKEND
      // Fetch the cart items from the backend
      axios
        .get("http://localhost:4000/api/")
        .then((response) => {
          const cart = response.data; // Data from MongoDB
          cartItemsContainer.innerHTML = "";
          let total = 0;

          // If cart is empty
          if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotalElement.textContent = "Total: ₱0.00";
            cartCountElement[0].textContent = "0";
            cartCountElement[1].textContent = "0";
            return;
          }

          // Iterate over the cart items from the backend response
          cart.forEach((item) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            // Create a new cart item display element
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
          <img src="${item.image}" alt="${item.name} Image">
          <p class="cart-item-title">${item.name}</p>

          <div class="quantity-control">
              <button class="decrease-qty" data-id="${item._id}">-</button>
              <span>${item.quantity}</span>
              <button class="increase-qty" data-id="${item._id}">+</button>
          </div>
          <p>Price: ₱${item.price.toFixed(2)}</p>
          <p class="subtotal">Subtotal: ₱${itemTotal.toFixed(2)}</p>
        `;
            cartItemsContainer.appendChild(cartItem);
          });

          // Update total price and quantity display
          cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
          const totalQuantity = cart.reduce(
            (acc, item) => acc + item.quantity,
            0
          );
          cartCountElement[0].textContent = totalQuantity;
          cartCountElement[1].textContent = totalQuantity;
        })
        .catch((error) => {
          console.error("Error fetching cart data:", error);
          cartItemsContainer.innerHTML = "<p>Failed to load cart items.</p>";
        });

      //   cartItemsContainer.innerHTML = "";
      //   total = 0;

      //   if (cart.length === 0) {
      //     cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      //     cartTotalElement.textContent = "Total: ₱0.00";
      //     cartCountElement[0].textContent = "0";
      //     cartCountElement[1].textContent = "0";
      //     return;
      //   }

      //   cart.forEach((item) => {
      //     const itemTotal = item.price * item.quantity;
      //     total += itemTotal;

      //     const cartItem = document.createElement("div");
      //     cartItem.classList.add("cart-item");
      //     cartItem.innerHTML = `
      //                 <img src="${item.image}" alt="${item.name} Image">
      //                 <p class="cart-item-title">${item.name}</p>

      //                 <div class="quantity-control">
      //                     <button class="decrease-qty" data-id="${
      //                       item.id
      //                     }">-</button>
      //                     <span>${item.quantity}</span>
      //                     <button class="increase-qty" data-id="${
      //                       item.id
      //                     }">+</button>
      //                 </div>
      //                 <p>Price: ₱${item.price.toFixed(2)}</p>
      //                 <p class="subtotal">Subtotal: ₱${itemTotal.toFixed(2)}</p>
      //             `;
      //     cartItemsContainer.appendChild(cartItem);
      //   });

      //   cartTotalElement.textContent = `Total: ₱${total.toFixed(2)}`;
      //   cartCountElement[0].textContent = cart.reduce(
      //     (acc, item) => acc + item.quantity,
      //     0
      //   );
      //   cartCountElement[1].textContent = cart.reduce(
      //     (acc, item) => acc + item.quantity,
      //     0
      //   );
    }

    // Function to attach event listeners to quantity buttons
    function attachQuantityControls() {
      cartItemsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("increase-qty")) {
          const id = parseInt(event.target.getAttribute("data-id"));
          changeQuantity(id, 1);
          console.log("Increased quantity");
        } else if (event.target.classList.contains("decrease-qty")) {
          const id = parseInt(event.target.getAttribute("data-id"));
          changeQuantity(id, -1);
          console.log("Decreased quantity");
        }
      });
    }

    function changeQuantity(id, change) {
      // Ensure id is of the same type as the cart item id
      const product = cart.find((item) => item.id === id); // Use strict equality

      if (product) {
        product.quantity += change;
        // Remove the product from the cart if quantity is 0 or less
        if (product.quantity <= 0) {
          // ***** DELETE ITEM IN BACKEND
          cart = cart.filter((item) => item.id !== id);
          let apiURL = `http://localhost:4000/api/delete-item/${product.id}`;
          axios
            .delete(apiURL)
            .then(() => {
              updateCartDisplay();
              console.log("Deleted cart in backend");
            })
            .catch((error) => {
              console.log("Error deleting cart item:", error);
            });
          updateCartDisplay();
        }

        // **** UPDATE QTY IN BACKEND

        let apiURL = `http://localhost:4000/api/update-item/${product.id}`;
        axios
          .put(apiURL, product)
          .then(() => {
            updateCartDisplay();
            console.log("Updated cart qty in backend");
          })
          .catch((error) => {
            console.log("Error updating cart qty:", error);
          });
        updateCartDisplay();
      } else {
        console.log(`Product with id ${id} not found.`);
      }
    }

    function saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    // Initialize
    updateCartDisplay(); // Display cart initially
    attachQuantityControls();
    console.log("Initialized");

    // Function to clear the cart
    function clearCart() {
      if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        // **** DELETE ALL CART ITEMS IN BACKEND
        // special thanks to Hanni Pham for keeping the backend developer inspired hehe
        let apiURL = "http://localhost:4000/api/delete-all";
        axios
          .delete(apiURL)
          .then(() => {
            updateCartDisplay();
            console.log("Deleted cart items");
          })
          .catch((error) => {
            console.log("Error deleting cart:", error);
          });
        saveCartToLocalStorage();
        updateCartDisplay();
      }
    }

    // Function to toggle the cart sidebar
    function toggleCartSidebar() {
      if (cartSidebar.classList.contains("open")) {
        cartSidebar.classList.remove("open");
        cartSidebar.style.transform = "translateX(100%)";
      } else {
        cartSidebar.classList.add("open");
        cartSidebar.style.transform = "translateX(0)";
      }
    }
  },
};
</script>

<style src="../assets/css/products.css">
/* @import '../assets/css/products.css'; */
</style>
