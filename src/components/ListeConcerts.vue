<template>
    <div class="contenu" id="concerts">
        <h2>Nos dates</h2>
        <div class="col-12">
        <ul class="filters">
            <li><a href="#" :class="{selected: filter === 'past'}" @click="filter = 'past'">Précédentes</a></li>
            <li><a href="#" :class="{selected: filter === 'coming'}" @click="filter = 'coming'">À venir</a></li>
            <li><a href="#" :class="{selected: filter === 'all'}" @click="filter = 'all'">Toutes</a></li>
        </ul>
        </div>
        <div class="liste-concert" v-if="concerts">
            <div class="concert row" v-for="concert in sortedConcerts" v-bind:key="concert['.key']">
                <div class="concert-name col-md-3 col-sm-12">
                    {{concert.name}}
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 concert-date">
                            <p class="concert-date">{{ concert.date | moment("dddd Do MMMM  YYYY - HH[h]") }}</p>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <p class="concert-lieu"><a href="#" @click.prevent="openGMap(concert)">{{concert.lieu}}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
    data () {
        return {
            filter: 'coming',
        }
    },
    firebase: {
        concerts: concertsRef,
    },
    methods: {
        openGMap (concert) {
            store.open(concert)
        },
        closeGMap () {
            store.close()
        }
    },
    computed: {
        filteredConcerts () {
            if (this.filter === 'coming') {
                return this.concerts.filter(concert => ((this.$moment().valueOf()) < (this.$moment(concert.date, "YYYY MM DD").valueOf())))
            } else if (this.filter === 'past') {
                return this.concerts.filter(concert => ((this.$moment().valueOf()) > (this.$moment(concert.date, "YYYY MM DD").valueOf())))
            } else {
                return this.concerts
            }
        },
        sortedConcerts () {
            let vm = this;
            return vm.filteredConcerts.sort( function(a, b){
                if (vm.filter === 'past') {
                    return (vm.$moment(b.date, "YYYY MM DD").valueOf()) - (vm.$moment(a.date, "YYYY MM DD").valueOf())
                } else {
                    return (vm.$moment(a.date, "YYYY MM DD").valueOf()) - (vm.$moment(b.date, "YYYY MM DD").valueOf())
                }
            })
        },
    },
}
</script>
<style lang="scss">
    .table{
        td{
            width:30em;
        }
    }
</style>