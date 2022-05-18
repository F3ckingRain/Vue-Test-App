<template>
    <div v-if="users.length > 0">
        <h3>Список пользователей</h3>
        <transition-group name="user-list">
            <user-item 
                v-for="(user, index) in users"
                :user = 'user'
                :key="index"
                :index="Number(index)"
                @delete = "$emit('delete', user)"
                @fetch = "$emit('fetch')"
            />
        </transition-group> 
    </div>
    <h2 v-else class="empty__users">
        Список пользователей пуст
    </h2>
</template>

<script>
import UserItem from './UserItem'
    export default {
        components: {UserItem},
        props: {
            users: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.empty__users {
    color: rgb(73, 57, 57);
    text-align: center
}

.user-list-item {
    display: inline-block;
    margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
    transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.user-list-move {
    transition: transform 0.4s ease;
}

</style>