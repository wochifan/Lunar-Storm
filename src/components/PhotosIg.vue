<template>
    <div>
        {{photos}}
    </div>
</template>

<script>
    import axios from 'axios'
    import {APIKEY_IG} from '../APIKeys'

    export default {
        data () {
            return {
                photos: null
            }
        },
        created() {
            axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token='.concat(APIKEY_IG))
                .then(response => {
                    this.photos = response.data
                })
                .catch(e => {
                    this.errors.push(e)
                })
        }
    }
</script>

<style>

</style>