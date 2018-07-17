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
        <div class="web-title">
            <h1 class="band-title">Lunar Storm</h1>
            <nav class="nav justify-content-center">
            <ul class="nav font-menu">
                <li id="accueil-menu"><router-link :to="{name: 'root'}" >Accueil</router-link></li>
                <li><router-link :to="{name: 'ecoute'}">Nous ecouter</router-link></li>
                <li><router-link :to="{name: 'concerts'}">Nos concerts</router-link></li>
                <li><router-link :to="{name: 'actualites'}">Nos actualites</router-link></li>
            </ul>
        </nav>
        </div>
    </header>
      <div class="container">
          <transition name="swipe-transition">
              <ecoute v-show="ecoute"></ecoute>
          </transition>
          <transition name="swipe-transition">
              <router-view></router-view>
          </transition>

      </div>
  </div>
</template>

<script>
    import Ecoute from './components/Ecoute'

    export default {
    name: 'app',
    data () {
        return {
            ecoute: false
        }
    },
    components: {
        Ecoute
    },
    watch: {
        '$route': 'fetchEcoute'
    },
    methods: {
        fetchEcoute () {
                this.ecoute = (this.$route.name === 'ecoute')
            }
    },
        created () {
            this.fetchEcoute()
        }
}
</script>

<style lang="scss">
@import 'assets/sass/app.scss';

</style>
