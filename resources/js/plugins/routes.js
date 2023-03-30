import Vue from "vue";
import router from "vue-router";
import { store } from "./store.js";
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
            path: "/producto/:id",
            name: "home.productos.unico",
            component: () => import("../Views/producto/SingleProduct.vue"),
            async beforeEnter(to, from, next) {
                const id = to.params.id;
                await store.dispatch('getsingleProduct', id)
                console.log(store.getters.singleProduct)
                await store.dispatch('getProductosBySearch', store.getters.singleProduct.nombre.substr(0,7))
                next()
            },
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
