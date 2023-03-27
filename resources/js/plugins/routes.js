import Vue from "vue";
import router from "vue-router";
Vue.use(router);
export default new router({
    mode: "history",
    base: 'home',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("../Views/home/index.vue")
        },
        {
            path: '/proveedores',
            name: 'home.proveedores',
            component: () => import("../Views/proveedor/index.vue")
        },
        {
            path: '/productos',
            name: 'home.productos',
            component: () => import("../Views/productos/index.vue")
        }
    ]
});