import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Login from "@/views/Login";
import UserProfile from "@/views/user/UserProfile";
import UserList from "@/views/user/UserList";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/login",
            component: Login
        },
        {
            path: "/main",
            component: Main, // 嵌套路由
            children: [
                {
                    path: "/user/UserProfile",
                    component: UserProfile
                },
                {
                    path: "/user/UserList",
                    component: UserList
                }
            ]
        }
    ]
})