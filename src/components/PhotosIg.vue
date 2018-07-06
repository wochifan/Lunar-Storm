<template>
    <div>
        <pre>
            <div class="row" v-for="photo in photosIg" :key="photo">
                <img :src="photo" alt="">
            </div>

        </pre>


    </div>
</template>

<script>
    import axios from 'axios'
    import {APIKEY_IG} from '../APIKeys'

    export default {
        data () {
            return {
                photosIg: []
            }
        },
        methods: {
          recupPhotosIg (albums_IG) {
              if (this.photosIg.length === 0) {
                  for (let i = 0; i < albums_IG.data.length; i++) {
                      this.photosIg.push(albums_IG.data[i].images.standard_resolution.url)
                  }
              }
          }
        },
        created() {
            axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='.concat(APIKEY_IG))
                .then(response => {
                    this.recupPhotosIg(response.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style>

</style>