<template>
      <main>
        <section class="hero__container order__container" id="hero__section">
            <div class="hero__section order__section">  
                <h1>ORDER CONFIRMATION</h1>
                <p class="coffee__pastries">─────  &nbsp;&nbsp; COFFEE PASTRIES &nbsp;&nbsp;─────</p>
            </div>
        </section>

        <section class="main__content order__content">
          <div class="message order__message">
            <img src="../assets/images/timer.png" alt="Timer icon">
            <h2>Thank you for your purchase!</h2><br>
            <p>Your order is in the kitchen!<br>It will be ready in <span id="time">02:30</span>!</p>
          </div>
          <div class="order__summary">
            <h2>Order Summary</h2>
            <div class="ordered__items">
                
            </div>
            <div class="order__total">
                <p class="total__label"><strong>Order Total</strong></p>
                <p class="total__price"><strong>0.00</strong></p>
            </div>
          </div>
        </section> 
    </main>
</template>

<script>
import axios from "axios";
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const alreadyReloaded = localStorage.getItem('pageReloaded');
      
      if (!alreadyReloaded) {
        localStorage.setItem('pageReloaded', 'true');
        location.reload();
      } else {
        localStorage.removeItem('pageReloaded');
      }
    }); 
  },
  mounted() {
    const mainContentMessage = document.querySelector(".main__content .message");

    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = duration;
        }
      }, 1000);
    }

    window.onload = function () {
      var time = 60 * 2.5,
      display = document.querySelector('#time');
      startTimer(time, display);

      setTimeout(changeContent, 152000);
    };

    function changeContent () {
      mainContentMessage.innerHTML = `
      <img src="../images/check.png" alt="Timer icon">
      <h2>Your order is ready!</h2><br>
      <p>Pick up your order at our store located at B21 L10 NHA<br>Pandacaqui, Mexico, San Fernando, Pampanga, Philippines.<br><br>Thank you for choosing us and enjoy your order!</p>
      `;
    };

    let cart = [];
    let total = 0;
    const orderedItems = document.querySelector("main section .ordered__items");
    const totalPrice = document.querySelector("main section .order__total .total__price strong");

    axios
      .get("http://localhost:4000/api/")
      .then((response) => {
        cart = response.data;

        for (let i = 0; i < cart.length; i++) {
          orderedItems.innerHTML += `
          <div class="item">
            <img src="${cart[i].image}" alt="Product Image">
            <div class="item__details">
              <div class="name__price">
                <p>${cart[i].name}</p>
                <p>₱${cart[i].price * cart[i].quantity}</p>
              </div>
              <p class="qty">x${cart[i].quantity}</p> 
            </div>
          </div>
          `;

          total += cart[i].price * cart[i].quantity;
        }

        totalPrice.textContent = `₱${total}`;
      });
  }
};
</script>

<style src="../assets/css/confirmation.css"></style>