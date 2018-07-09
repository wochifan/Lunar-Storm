<template>
    <div class="bg-login">
        <form class="login" @submit.prevent="checkAuth">
            <p>Cette page nécessite une authentification</p>
            <label>Identifiant</label><input type="text" v-model="logId.name">
            <label>Mot de passe</label><input type="password" v-model="logId.pass">
            <button type="submit">Valider</button><router-link :to="{name: 'root'}" ><button>Retour</button></router-link>
        </form>
    </div>
</template>

<script>
    import {loginRef} from "../firebase";
    import {tokenRef} from "../firebase";

    export default {
        name:"login",
        data () {
            return {
                logId: {
                    name: "",
                    pass:"",
                }
            }
        },
        firebase: {
            correctLogin: loginRef,
            tokenAlea: tokenRef
        },
        methods: {
            checkLogin (arr) {
                return arr.name === this.logId.name && arr.pass === this.logId.pass;
            },
            checkAuth () {
                if (this.correctLogin.some(this.checkLogin)) {
                    let randomNumber = Math.random()
                    localStorage.accessToken = randomNumber
                    tokenRef.child('alea').update({
                        value: randomNumber
                    })
                    window.location.replace("http://localhost:8080/addconcert")
                }else{
                    alert("Identifiant ou mot de passe incorrect")
                    window.location.replace("http://localhost:8080/")
                }
            }
        }
    }
</script>

<style scoped>

</style>