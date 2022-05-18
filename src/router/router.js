import Main from '../pages/Main.vue'
import UsersPage from '../pages/UsersPage.vue'
import UserPage from '../pages/UserPage.vue'
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/users',
        component: UsersPage
    },
    {
        path: `/:id`,
        component: UserPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router