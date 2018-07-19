<template>
    <div class="row contenu" id="concerts">

        <h2 class="subtitle">Gestion des dates de concert</h2>

        <ul class="filters">
            <li><a href="#" :class="{selected: filter === 'past'}" @click="filter = 'past'">Précédentes</a></li>
            <li><a href="#" :class="{selected: filter === 'coming'}" @click="filter = 'coming'">À venir</a></li>
            <li><a href="#" :class="{selected: filter === 'all'}" @click="filter = 'all'">Toutes</a></li>
        </ul>

        <div class="row ajout-contact">
            <h3>Ajouter un concert :</h3>
            <input class="form-control" type="text" placeholder="Nom du concert" v-model="newConcert.name">
            <input class="form-control" type="datetime-local" v-model="newConcert.date">
            <gmap-autocomplete
                    class="form-control"
                    style="width:70vw; margin:auto;"
                    :value="newConcert.lieu"
                    @place_changed="setPlace">
            </gmap-autocomplete>
            <button class="btn alert-success" @click="addConcert">Valider</button>
        </div>

        <div class="liste-concert" v-if="concerts">
            <div class="concert row" v-for="concert in sortedConcerts" v-bind:key="concert['.key']" :class="{editingConcert: concert === editing}">
                <div class="concert-name col-md-3 col-sm-12">
                    <label class="hide-editing">{{concert.name}}</label>
                    <input type="text" class="show-editing form-control" v-model="concert.name">
                </div>
                <div class="col-md-9 col-sm-12">
                    <div class="row">
                        <div class="col-lg-4 col-sm-12 concert-date">
                            <label class="hide-editing"><span>{{ concert.date | moment("dddd Do MMMM  YYYY - HH[h]") }}</span></label>
                            <input class="show-editing form-control" type="datetime-local" v-model="concert.date">
                        </div>
                        <div class="col-lg-5 col-sm-12">
                            <label class="hide-editing">{{concert.lieu}}</label>
                            <div class="show-editing form-control">
                                <gmap-autocomplete
                                        :value="concert.lieu"
                                        @place_changed="resetPlace">
                                </gmap-autocomplete>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-12">
                            <button class="button alert-primary hide-editing" @click="editConcert(concert)">Modifier</button>
                            <button class="button alert-danger hide-editing" @click="destroyConcert(concert)">Supprimer</button>
                            <button class="button alert-success show-editing" @click="doneEdit">Valider</button>
                            <button class="button alert-danger show-editing" @click="cancelEdit">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import {concertsRef} from '../firebase'

    export default {
        data () {
            return {
                newConcert: {
                    date: null,
                    lieu: null,
                    lat: null,
                    lng:null,
                    name:null
                },
                oldConcertDate: null,
                oldConcertLieu: null,
                oldConcertName: null,
                editing: null,
                filter: 'all'
            }
        },
        firebase: {
            concerts: concertsRef
        },
        methods: {
            dateFormat (date) {
                return this.$moment(date).format('YYYY-MM-DD[T]HH:mm')
            },
            addConcert () {
                concertsRef.push({
                    date: this.dateFormat(this.newConcert.date),
                    lieu: this.newConcert.lieu,
                    lat: this.newConcert.lat,
                    lng: this.newConcert.lng,
                    name: this.newConcert.name
                })
                this.newConcert = {}
            },
            destroyConcert (concert) {
                concertsRef.child(concert['.key']).remove()
            },
            editConcert (concert) {
                this.editing = concert
                this.oldConcertDate = concert.date
                this.oldConcertLieu = concert.lieu
                this.oldConcertName = concert.name
            },
            doneEdit () {
                concertsRef.child(this.editing['.key']).update({
                    date: this.dateFormat(this.editing.date),
                    lieu: this.editing.lieu,
                    lat: this.editing.lat,
                    lng: this.editing.lng,
                    name: this.editing.name})
                this.editing = null
            },
            cancelEdit () {
                this.editing.date = this.oldConcertDate
                this.editing.lieu = this.oldConcertLieu
                this.doneEdit()
            },
            setPlace(place) {
                this.newConcert.lat = place.geometry.location.lat()
                this.newConcert.lng = place.geometry.location.lng()
                this.newConcert.lieu = place.name + " - " + place.formatted_address
            },
            resetPlace(place) {
                this.editing.lat = place.geometry.location.lat()
                this.editing.lng = place.geometry.location.lng()
                this.editing.lieu = place.name + " - " + place.formatted_address
            },
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

</style>