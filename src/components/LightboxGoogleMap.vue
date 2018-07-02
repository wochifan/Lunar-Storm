<template>
    <div class="lightbox-Gmap" v-if="state.concert" @click="closeGMap">
        <div class="Gmap" @click.stop>
            <GmapMap
                    :center="{lat:state.concert.lat, lng:state.concert.lng}"
                    :zoom="15"
                    map-type-id="terrain"
                    style="width: 600px; height: 450px">
                <GmapMarker
                        :position="{lat:state.concert.lat, lng:state.concert.lng}"
                        :clickable="true"
                        @click="center={lat:state.concert.lat, lng:state.concert.lng}"
                />
            </GmapMap>
        </div>
        <div class="lightbox__close" @click="closeGMap"></div>
    </div>
</template>

<script>
    import store from './Store'

    export default {
        data () {
            return {
                state: store.state
            }
        },
        methods: {
            closeGMap () {
                store.close()
            }
        }
    }
</script>

<style>


</style>