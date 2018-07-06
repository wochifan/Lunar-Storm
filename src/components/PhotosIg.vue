<template>
            <div class="row  albumRs">
                <div v-if="photosIg" class="row">
                    <div  v-for="photo in photosIg" :key="photo" class="col-lg-3 col-md-4 col-sm-6 photoRs">
                        <img :src="photo" class="img-fluid">
                    </div>
                </div>
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