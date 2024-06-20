import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import UsersHome from "./users/UsersHome.vue";
import OfficeHome from "./office/OfficeHome.vue";

const routes: RouteRecordRaw[] = [
    {path: "/users", component: UsersHome},
    {path: "/office", component: OfficeHome}
]

const router = createRouter({
    history: createWebHistory("/visits-frontend"),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')
