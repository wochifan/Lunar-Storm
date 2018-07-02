<template>
    <div class="row contenu" id="concerts">
        <h2>Gestion des dates de concert</h2>

        <table class="table" v-if="concerts">
            <tr>
                <th>
                Ajouter un concert :
                </th>
            </tr>
            <tr>
                <th>
                <input type="datetime-local" v-model="newConcert.date">
                </th>
                <th>
                    <gmap-autocomplete
                            :value="newConcert.lieu"
                            @place_changed="setPlace">
                    </gmap-autocomplete>
                </th>
                <th>
                <button class="btn alert-success" @click="addConcert">Valider</button>
                </th>
            </tr>

            <tr v-for="concert in concerts" v-bind:key="concert['.key']" :class="{editingConcert: concert === editing}">
                <td>
                    <label class="hide-editing"><span>{{ concert.date | moment("dddd Do MMMM  YYYY - HH:MM") }}</span></label>
                    <input class="show-editing" type="datetime-local" v-model="concert.date">
                </td>

                <td>
                    <label class="hide-editing">{{concert.lieu}}</label>
                    <div class="show-editing">
                        <gmap-autocomplete
                                :value="concert.lieu"
                                @place_changed="resetPlace">
                        </gmap-autocomplete>
                    </div>
                </td>

                <td>
                    <button class="button alert-primary hide-editing" @click="editConcert(concert)">Modifier</button>
                    <button class="button alert-danger hide-editing" @click="destroyConcert(concert)">Supprimer</button>
                    <button class="button alert-success show-editing" @click="doneEdit">Valider</button>
                    <button class="button alert-danger show-editing" @click="cancelEdit">Annuler</button>
                </td>
            </tr>
        </table>
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
                    lng:null
                },
                oldConcertDate: null,
                oldConcertLieu: null,
                editing: null
            }
        },
        firebase: {
            concerts: concertsRef
        },
        methods: {
            addConcert () {
                concertsRef.push({
                    date: this.newConcert.date,
                    lieu: this.newConcert.lieu,
                    lat: this.newConcert.lat,
                    lng: this.newConcert.lng
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
            },
            doneEdit () {
                concertsRef.child(this.editing['.key']).update({
                    date: this.editing.date,
                    lieu: this.editing.lieu,
                    lat: this.editing.lat,
                    lng: this.editing.lng})
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
        mounted(){

        }
    }
</script>
<style lang="scss">
    .table{
        td{
            width:30em;
        }
    }
    .hide-editing{
        display:inline-block;
    }
    .show-editing{
        display:none;
    }

    .editingConcert{
        .hide-editing{
            display:none;
        }
        .show-editing{
            display:inline-block;
        }
    }
</style>