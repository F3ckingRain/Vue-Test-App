<template>
    <form @submit.prevent>
        <h4>Создание пользователя</h4>
        <my-input
            v-focus
            v-model="user.firstName"
            type="text" 
            placeholder="Имя"
        />
        <my-input
            v-model="user.secondName"
            type="text" 
            placeholder="Фамилия" 
        />
        <my-button @click="createUser">
            Создать
        </my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: '',
                secondName: ''
            }
        };
    },
    methods: {
        createUser() {
            this.$emit("create", this.user);
            console.log(this.user)
            this.user = {
                firstName:'',
                secondName:''
            }
        },
    }
}
</script>

<style scoped>
.btn {
    align-self: flex-end;
    margin-top: 15px;
    padding: 10px 15px;
    background: none;
    color: teal;
    border: 1px solid teal;
}
form {
    display: flex;
    flex-direction: column;
}

</style>