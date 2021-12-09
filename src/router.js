import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const Profile = () => import("./components/Profile.vue");
const BoardUser = () => import("./components/BoardUser.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",

    component: Profile,
  },

  {
    path: "/user",
    name: "user",

    component: BoardUser,
  },

  {
    path: "/",
    alias: "/posts",
    name: "posts",
    component: () => import("./components/PostsList"),
  },
  {
    path: "/posts/:id",
    name: "post-details",
    component: () => import("./components/Post"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPost"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
