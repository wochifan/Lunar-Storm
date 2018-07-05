<template>
  <div id="app">

    <header>
        <div class="socialmedia">
            <ul>
                <li><a target="_blank" href="https://www.facebook.com/lunarstormparis/"><img src="./assets/img/FB-logo.svg" alt="Facebook"></a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UCsZpQZ8PyQGqAXMEbsNVHTg"><img src="./assets/img/YT-logo.svg" alt="Youtube"></a></li>
                <li><a target="_blank" href="https://www.instagram.com/lunarstorm_paris/"><img src="./assets/img/IG-logo.svg" alt="Instagram"></a></li>
            </ul>
        </div>
        <div class="web-title"><h1 class="band-title">Lunar Storm</h1>
        <nav class="nav justify-content-center">
            <ul class="nav">
                <li id="accueil-menu"><router-link :to="{name: 'root'}" >Accueil</router-link></li>
                <li><router-link :to="{name: 'ecoute'}">Nous écouter</router-link></li>
                <li><router-link :to="{name: 'concerts'}">Nos concerts</router-link></li>
                <li><router-link :to="{name: 'actualites'}">Nos actualités</router-link></li>
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
