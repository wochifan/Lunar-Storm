<template>

    <div class="row contenu" id="social">
        <div v-if="albums">
            <button @click="recupImagesFb(albums)" v-if="view_fb === false">Afficher les images FB</button>
            <button @click="view_fb = false" v-if="view_fb">Masquer les images FB</button>
            <div class="row" v-if="view_fb">
                <div v-for="photo in photos_fb" :key="photo" class="col-4">
                    <img :src="photo" alt="" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import {APIKEY_FB} from "../APIKeys";

    export default {
        data() {
            return {
                albums: null,
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
                this.view_fb = true;
            }
        },
        created() {

            let AuthStr = 'Bearer '.concat(APIKEY_FB);

            axios.get('https://graph.facebook.com/AshtagoCom?fields=albums{photos{images}}',
                {headers : {Authorization : AuthStr} })
                .then(response => {
                    return this.albums = response.data.albums.data;
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>
