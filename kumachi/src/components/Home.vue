<template>
    <main>
        <section class="hero__container" id="hero__section">
            <div class="hero__section">
                <p class="coffee__pastries">───── &nbsp;&nbsp; COFFEE PASTRIES &nbsp;&nbsp;─────</p>
                <h1>Kumachi Coffee<br> and Pastries</h1>
                <p class="hero__description">Discover the art of coffee, perfected in every pour, where every
                    cup<br>tells a story of flavor and warmth.</p>
                <router-link to="/products#products__section"><button class="button__transparent">Get Coffee
                        Now</button></router-link>
            </div>
        </section>

        <section id="cart-sidebar" class="cart">
            <h3>Your Cart</h3>
            <button class="cart-close">✕</button>
            <div id="cart-items"></div>
            <div id="cart-total"></div>
            <button class="clear-cart">Clear Cart</button>
            <button class="checkout">Checkout</button>
        </section>

        <section class="about__us__container">
            <div class="about__us__section">
                <h3 class="text__center">Who we are</h3>
                <p class="about__us__paragraph">Kumachi, a hidden gem from Pandacaqui, Mexico, brews love every evening
                    (7pm to 11pm, closed Wednesdays). Mozarth and Leslie Kessel started online before opening their
                    doors just a month ago. </p>
                <router-link to="/featured"><button class="button__outline__colored">Learn More</button></router-link>
                <img src="../assets/images/kumachi-background.webp" alt="Kumachi place" class="about__us__image">
            </div>
        </section>

        <section class="why__us__container">
            <div class="why__us__section">
                <h2>Of all coffee shops, why choose us?</h2>
                <div class="why__us__grid">
                    <div class="why__us__box">
                        <img src="../assets/images/icons/icon-flower-bouquet.webp" alt="Ambiance Icon"
                            class="why__us__icons">
                        <p class="why__us__title">Ambiance</p>
                        <p class="why__us__paragraph">Our cozy atmosphere creates a welcoming space where you can relax
                            and unwind.</p>
                        <p class="why__us__sub__title">Cozy</p>
                    </div>
                    <div class="why__us__box">
                        <img src="../assets/images/icons/icon-croissant.webp" alt="Quality Logo" class="why__us__icons">
                        <p class="why__us__title">Quality</p>
                        <p class="why__us__paragraph">We use premium ingredients to ensure every cup of coffee delivers
                            exceptional flavor.</p>
                        <p class="why__us__sub__title">Premium</p>
                    </div>
                    <div class="why__us__box">
                        <img src="../assets/images/icons/icon-dollar-currency.webp" alt="Affordability Logo"
                            class="why__us__icons">
                        <p class="why__us__title">Affordability</p>
                        <p class="why__us__paragraph">Our accessible pricing lets you enjoy top-tier coffee without
                            breaking the bank.</p>
                        <p class="why__us__sub__title">Accessible</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="products__container">
            <div class="wrapper">
                <i id="left" class="fa-solid fa-angle-left"></i>
                <ul class="carousel">
                    <li class="card">
                        <img src="../assets/images/carousel-image-1.webp" alt="Picture of an eggpie"
                            class="image__carousell">
                    </li>
                    <li class="card">
                        <img src="../assets/images/carousel-image-2.webp" alt="Coffee image" class="image__carousell">
                    </li>
                    <li class="card">
                        <img src="../assets/images/carousel-image-3.webp" alt="5 Cookies" class="image__carousell">
                    </li>
                    <li class="card">
                        <img src="../assets/images/carousel-image-4.webp" alt="Two Matcha Coffee" class="image__carousell">
                    </li>
                    <li class="card">
                        <img src="../assets/images/carousel-image-5.webp" alt="Kumachi Coffee" class="image__carousell">
                    </li>
                </ul>
                <i id="right" class="fa-solid fa-angle-right"></i>
            </div>
        </section>

        <section class="cta__container">
            <div class="cta__section">
                <h3 class="text__center">Elevate Your Coffee Journey with the<br> Ultimate Experience Today!</h3>
                <img src="../assets/images/Logo-Bear-Icon.webp" alt="Kumachi Logo" class="bear__icon">
                <p class="cta__p text__center">Immerse yourself in a warm and welcoming atmosphere where every cup<br>is
                    brewed to perfection using only the finest ingredients.</p>
                <router-link to="/products#products__section"><button class="button__colored">Grab a Coffee</button></router-link>
            </div>
        </section>
    </main>
</template>

<script>
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
  }
};
</script>

<style src="../assets/css/homepage.css" scoped>
</style>