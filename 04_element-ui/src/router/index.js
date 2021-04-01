import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Login from "@/views/Login";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/main",
            component: Main
        }
    ]
})