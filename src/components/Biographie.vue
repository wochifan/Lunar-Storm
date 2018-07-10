<template>
    <div class="row contenu" id="a-lecoute">
        <div class="col-md-6 col-sm-12">

            <iframe class="bandcamp"
                    style="border: 0; height: 406px; margin-top:35px;"
                    src="https://bandcamp.com/EmbeddedPlayer/album=3891024960/size=large/bgcol=ffffff/linkcol=63b2cc/artwork=small/transparent=true/"
                    seamless><a href="http://lunarstormparis.bandcamp.com/album/so-far-from-home">So Far From Home by Lunar Storm</a></iframe>
        </div>

        <div class="col-md-6 col-sm-12">
            <p><span class="band-title">Et Lunar Storm fut</span></p>
            <p class="biography">{{biographie}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                biographie: "Lunar Storm, c’est d’abord la rencontre musicale de " +
                "deux collègues devenus amis, Pierre (guitariste) et Antoine (bassiste). " +
                "Entre travail et séance studio le duo commence à composer quelques musiques dans le courant de l’année 2016 " +
                "avant d’être rejoint par Florent (batterie) et Adrien (guitare/chant)." +
                " Joséphine (chant) rejoindra le groupe dans le courant de l’été 2017. " +
                "Ensemble les 5 membres ont une quinzaine de chansons à leur actif et décident d’enregistrer un EP au studio la Canopée " +
                "(Chatenay-Malabris) dans le courant du mois de février 2018 et de faire quelques concerts. Lunar Storm a une gestion " +
                "totalement indépendante et autoproduite par les cinq musiciens."
            }
        }
    }
</script>