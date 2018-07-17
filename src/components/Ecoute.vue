<template>
    <div class="row contenu" id="a-lecoute">
        <div class="col-md-6 col-sm-12 bandcamp">
            <iframe style="border: 0; width: 400px; height: 406px;"
                    src="https://bandcamp.com/EmbeddedPlayer/album=3891024960/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/"
                    seamless><a href="http://lunarstormparis.bandcamp.com/album/so-far-from-home">So Far From Home by Lunar Storm</a></iframe>
        </div>
        <div class="col-md-6 col-sm-12">
            <div class="row">
                <div class="col-lg-6 col-sm-6 trademarks" v-for="mark in trademarks" :key="mark.name">
                    <a :href=mark.url>
                        <img class="img-fluid" :src=mark.image>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                trademarks: [
                    {
                        name: "Itunes",
                        image: require('../assets/img/Itunes-logo.svg'),
                        url: "https://itunes.apple.com/fr/album/so-far-from-home/1379061591"
                    },
                    {
                        name: "Google Play",
                        image: require('../assets/img/GooglePlay-logo.png'),
                        url: "https://play.google.com/store/music/album/Lunar_Storm_So_Far_from_Home?id=Bytg6qpb77445kpiqgunkqpbtb4"
                    },
                    {
                        name: "Amazon",
                        image: require('../assets/img/Amazon-logo.png'),
                        url: "https://music.amazon.fr/albums/B07CSFBW3N/CATALOG?ref=dm_wcp_albm_link_pr_s"
                    },
                    {
                        name: "Spotify",
                        image: require('../assets/img/Spotify-logo.png'),
                        url: "https://open.spotify.com/album/3SyIc5653O4bV7HY3mGrXZ?si=10YbrLQ2Rv6LBa-UUOXQRA"
                    },
                    {
                        name: "Deezer",
                        image: require('../assets/img/Deezer-logo.png'),
                        url: "https://www.deezer.com/fr/artist/14709265"
                    },
                ]
            }
        }
    }
</script>