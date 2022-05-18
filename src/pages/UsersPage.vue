<template>
    <div class="users-page">
        <div class="app_btns">
            <my-button @click ="setDialogVisible">
                Создать пользователя
            </my-button>
        </div>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create = "createUser"/>
        </my-dialog>
        <user-list 
            @fetch = "fetchUsers"
            @delete = "deleteUser"
            v-if="!isUsersLoading" 
            :users='users'
        />
        <div 
            v-else 
            class="users_loading" 
        >
            Идёт загрузка пользователей...
        </div>
    </div>
</template>

<script>
import axios from "axios"
import UserList from "../components/UserList.vue"
import PostForm from "../components/PostForm.vue"

export default {
    components: {
    UserList,
    PostForm,
},
    data() {  
        return {
            users: [],
            isUsersLoading: false,
            dialogVisible: false,
        }
    },
    methods: {
        setDialogVisible() {
            this.dialogVisible = true
        },
        async createUser(user) {
            if(user.firstName === '' || user.secondName === '') return
            else {
                await axios.post('http://localhost:3123/', user)
                this.dialogVisible = false
            }
            await this.fetchUsers()
        },
        async fetchUsers() {
            try {
                this.isUsersLoading = true
                await axios.get('http://localhost:3123/')
                .then((response) => this.users = response.data)
            } catch(e) {
                alert('Не удалось загрузить пользователей')
            } finally {
                this.isUsersLoading = false
            }
        },
        async deleteUser(user) {
            await axios.delete(`http://localhost:3123/${user.uuid}`)
            await this.fetchUsers()
        },
    },
    mounted() {
        this.fetchUsers()
    }
    
}
</script>

<style scoped>
.users-page {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.users_loading {
    font-size: 26px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.app_btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

</style>