<template>
    <div class="user" v-if="!editorMode">
        <h3 @click="$router.push(`${user.uuid}`)">
            {{this.index+1}}.
        </h3>
        <input 
            id="notActive" 
            :value = "`Имя : ` + user.firstName" 
            readonly
        />
        <input 
            id="notActive" 
            :value = "`Фамилия : ` + user.secondName" 
            readonly
        />
        <div class="user__btns">
            <my-button 
                @click = "editUserMode" 
                id="edit-user"
            >
                Редактировать
            </my-button>
            <strong>|</strong>
            <my-button 
                @click = "$emit('delete', user)" 
                id="delete-user"
            >
                Удалить
            </my-button>
        </div>
    </div>
    <div v-else class="user">
        <h3>{{this.index+1}}.</h3>
        <label>Имя пользователя :</label>
        <input 
            id="active" 
            v-focus 
            v-model = "newUser.firstName"
        />
        <label>Фамилия пользователя :</label>
        <input 
            id="active" 
            v-model = "newUser.secondName"
        />
        <div class="user__btns">
            <my-button @click = "editUserSave" id="save-user">
                Сохранить
            </my-button>
            <strong>|</strong>
            <my-button 
                @click = "$emit('delete', user)" 
                disabled
            >
                Удалить
            </my-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        data() {
            return {
                newUser: {
                    uuid: this.$props.user.uuid,
                    firstName: this.$props.user.firstName,
                    secondName: this.$props.user.secondName,
                },
                editorMode: false,
            }
        },
        props: {
            user: {
                type: Object,
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        methods: {
            editUserMode() {
                this.editorMode = true
            },
            async editUserSave() {
                await axios.put(`http://localhost:3123/${this.user.uuid}`, this.newUser)
                this.$emit('fetch')
            }
        }
    }
</script>

<style scoped>
.user {
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: 16px;
}
.user__btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
}
#notActive {
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-size: 16px;
    border: 0px;
    margin-left: 25px;
    font-size: 18px;
    margin-top: 1px;
    font-size: 16px;
    width: auto;
    margin-top: 2px;
}
#active {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border: 2px solid teal;
    border-radius: 5px;
    height: 30px;
    font-size: 16px;
    margin-top: 2px;
}
</style>