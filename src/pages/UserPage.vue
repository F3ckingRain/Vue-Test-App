<template>
    <div class="user-page">
        <div>
            <h2>{{user.firstName}}</h2>
            <h2>{{user.secondName}}</h2>
        </div>
        <my-button @click="$router.push('/users')">
            Назад
        </my-button>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            async getUser() {
                await axios.get(`http://localhost:3123${document.location.pathname}`)
                .then((response) => this.user = response.data)
            }
        },
        mounted() {
            this.getUser()
        }
    }
</script>

<style scoped>
.user-page {
    display: flex;
    flex-direction: row;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
h2 {
    margin: 10px;
}
button {
    position: absolute;
    margin-left:91.8%;
}

</style>