import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Profile from "./views/Profile.vue"
import Explore from "./views/Explore.vue"
import Group from "./views/Group.vue"

const routes = [
    {
        path: "/", 
        name: "Home",
        component: Home,
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    },
    {
        path: "/explore",
        name: "Explore",
        component: Explore,
    },
    {
        path: "/group",
        name: "Group",
        component: Group,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;