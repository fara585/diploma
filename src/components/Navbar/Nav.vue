<script setup>
import { ref } from "vue";
const catalog = ref(true)
const lang = ref(true)
</script>

<template>
    <nav class="nav">
        <div class="nav__top">
            <div class="container">
                <div class="nav__top-loc">
                    <i class="fas fa-map-marker-alt"></i>
                    <select class="nav__top-loc-slc">
                        <option selected>Toshkent</option>
                        <option>Sirdaryo</option>
                        <option>Jizzax</option>
                        <option>Samarqand</option>
                        <option>Buxoro</option>
                        <option>Termiz</option>
                        <option>Qarshi</option>
                        <option>Navoiy</option>
                        <option>Farg'ona</option>
                        <option>Andijon</option>
                        <option>Namangan</option>
                    </select>
                </div>

                <div class="nav__top-rgh">
                    <div class="nav__top-rgh-call">
                        <span>Contact center:</span>
                        <a href="tel:+998940046221">+99894 004 62 21</a>
                    </div>
                    <button class="nav__top-rgh-lang" @click="lang = !lang">
                        <img src="@/assets/img/uslang.png" alt="" v-if="lang">
                        <img src="@/assets/img/rulang.png" alt="" v-else>
                        <span>{{ lang ? 'En' : 'Ru' }}</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="nav__center">
            <div class="container">

                <router-link to="/" class="nav__center-logo">
                    <img src="@/assets/img/logo.png" alt="">
                </router-link>

                <button @click="catalog = !catalog">
                    <div class="icon">
                        <i class="fas fa-bars" v-if="catalog"></i>
                        <i class="fas fa-times" v-else></i>
                    </div>
                    <span>Catalog</span>
                </button>

                <form @submit.prevent>
                    <i class="far fa-search"></i>
                    <input type="text" placeholder="Search...">
                </form>


                <div class="nav__center-rgh">
                    <router-link class="nav__center-rgh-block" to="/">
                        <i class="far fa-user"></i>
                        <span>Login</span>
                    </router-link>
                    <router-link class="nav__center-rgh-block" to="/favourite">
                        <i class="far fa-heart"></i>
                        <span>Favorites</span>
                    </router-link>
                    <router-link class="nav__center-rgh-block" to="/basket">
                        <i class="fal fa-shopping-cart"></i>
                        <span>Basket</span>
                    </router-link>
                </div>

            </div>
        </div>

        <div class="nav__btn">
            <div class="container">
                <router-link class="nav__btn-box" to="/products">
                    <img src="@/assets/img/fire.png" alt="">
                    <span>products</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <span>electronics</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <span>perfumery</span>
                </router-link>
                <router-link class="nav__btn-box" to="/foods">
                    <span>foods</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <span>movies</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <span> House and garden</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <img src="@/assets/img/crone.png" alt="">
                    <span>premium</span>
                </router-link>
                <router-link class="nav__btn-box" to="/">
                    <span>clothes</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>