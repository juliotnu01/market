import Vue from "vue";
import router from "vue-router";
Vue.use(router);
export default new router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../Views/home/index.vue"),
        },
        {
            path: "/proveedores",
            name: "home.proveedores",
            component: () => import("../Views/proveedor/index.vue"),
        },
        {
            path: "/productos",
            name: "home.productos",
            component: () => import("../Views/productos/index.vue"),
        },
        {
            path: "/buscar-productos/:palabra_clave",
            name: "home.buscar.productos",
            component: () =>
                import("../Views/buscarProducto/SearchProduct.vue"),
            beforeRouteUpdate(to, from, next) {
                if (to.path === from.path) {
                    next(false);
                } else {
                    next();
                }
            },
        },
    ],
});
