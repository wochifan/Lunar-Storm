<template>
  <div id="app">

    <header>
        <div class="web-title"><h1 class="band-title">Lunar Storm</h1>
        <nav class="nav justify-content-center">
            <ul class="nav">
                <li><router-link :to="{name: 'root'}" >Accueil</router-link></li>
                <li><router-link :to="{name: 'ecoute'}">Nous écouter</router-link></li>
                <li><router-link :to="{name: 'concerts'}">Nos concerts</router-link></li>
                <li><router-link :to="{name: 'contacts'}">Nous contacter</router-link></li>
            </ul>
        </nav>
        </div>
    </header>
      <div class="container">
          <transition name="swipe-transition">
              <router-view></router-view>
          </transition>
          <router-view name="another"></router-view>
      </div>
  </div>
</template>

<script>

export default {
    name: 'app',

}
</script>

<style lang="scss">
@import 'assets/sass/app.scss';

</style>
