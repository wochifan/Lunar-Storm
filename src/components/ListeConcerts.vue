<template>
    <div class="row contenu" id="concerts">
        <table class="table" v-if="concerts">
            <h2>Nos dates</h2>
            <tr v-for="concert in concerts" v-bind:key="concert['.key']">
                <td>{{ concert.date | moment("dddd Do MMMM  YYYY - HH:MM") }}</td>
                <td><a href="#" @click.prevent="openGMap(concert)">{{concert.lieu}}</a></td>
            </tr>
        </table>
        <lightbox-google-map></lightbox-google-map>
    </div>
</template>
<script>

    import store from './Store'
    import {concertsRef} from '../firebase'
    import LightboxGoogleMap from './LightboxGoogleMap'


export default {
    components: {
        LightboxGoogleMap
    },
    firebase: {
        concerts: concertsRef
    },
    methods: {
        openGMap (concert) {
            store.open(concert)
        },
        closeGMap () {
            store.close()
        }
    }
}
</script>
<style lang="scss">
    .table{
        td{
            width:30em;
        }
    }
</style>