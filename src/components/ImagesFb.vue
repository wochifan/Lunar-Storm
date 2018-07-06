<template>

    <div class="row albumRs">
        <div class="row" v-if="photos_fb">
                <div v-for="photo in photos_fb" :key="photo" class="col-lg-3 col-md-4 col-sm-6 photoRs">
                    <img :src="photo" class="img-fluid">
                </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {APIKEY_FB} from "../APIKeys";

    export default {
        name: 'ImagesFb',
        data() {
            return {
                errors: [],
                photos_fb : [],
                view_fb : false
            }
        },
        methods: {
            recupImagesFb: function (albums_fb) {
                if (this.photos_fb.length === 0) {
                    for (let i = 0; i < albums_fb.length; i++) {
                        for (let j = 0; j < albums_fb[i].photos.data.length; j++) {
                            this.photos_fb.push(albums_fb[i].photos.data[j].images[0].source);
                        }
                    }
                }
            }
        },
        created() {
            let AuthStr = 'Bearer '.concat(APIKEY_FB);
            axios.get('https://graph.facebook.com/1949308802052732?fields=albums{photos.limit(10){images}}',
                {headers : {Authorization : AuthStr} })
                .then(response => {
                    this.recupImagesFb(response.data.albums.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>
