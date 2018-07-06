<template>
    <div class="contenu">
        <h2>Nos nouvelles publications</h2>
        <div class="logos-media">
                <img @click="showFB" src="../assets/img/FB-logo.svg" alt="Facebook">
                <img @click="showYT" src="../assets/img/YT-logo.svg" alt="Youtube">
                <img @click="showIG" src="../assets/img/IG-logo.svg" alt="Instagram">
        </div>
        <div class="iframeFb" v-if="FB">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flunarstormparis%2F&tabs&width=340&height=154&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=672812593087163"
                    width="340" height="154" style="border:none;overflow:hidden" scrolling="no"
                    frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div class="imagesFB" v-if="FB">
            <images-fb></images-fb>
        </div>
        <div class="videoYT" v-if="YT">
            <video-yt></video-yt>
        </div>
        <div class="photosIG" v-if="IG">
            <photos-ig></photos-ig>
        </div>
    </div>
</template>

<script>
    import ImagesFb from './ImagesFb'
    import VideoYt from './VideoYt'
    import PhotosIg from './PhotosIg'

    export default {
        components: {
            ImagesFb,
            VideoYt,
            PhotosIg
        },
        data () {
            return {
                FB : false,
                YT : true,
                IG : false
            }
        },
        methods: {
            showFB () {
                if (this.FB === true) {
                    this.FB = false
                } else {
                    this.FB = true;
                    this.YT = false;
                    this.IG = false
                }
            },
            showYT () {
                if (this.YT === true) {
                    this.YT = false
                } else {
                    this.YT = true;
                    this.FB = false;
                    this.IG = false
                }
            },
            showIG () {
                if (this.IG === true) {
                    this.IG = false
                } else {
                    this.IG = true;
                    this.FB = false;
                    this.YT = false
                }
            }
        }
    }
</script>