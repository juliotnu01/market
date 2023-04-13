<template>
    <div>
        <div class="secondary white--text top-bar">
            <v-container>
                <div class="d-flex justify-space-between align-center">
                    <v-toolbar-title>
                        <v-img
                            class="me-2 logo d-md-none d-block"
                            width="98"
                            src="../assets/images/logo.svg"
                        />
                        <div class="mr-2 d-md-block d-none">
                            <v-icon class="mr-2 white--text" small
                                >mdi-phone-outline</v-icon
                            >
                            <span class="text-sm mr-5">+9012 3456 789</span>
                            <v-icon class="mr-2 white--text" small
                                >mdi-phone-outline</v-icon
                            >
                            <span class="text-sm">+9012 3456 7</span>
                        </div>
                    </v-toolbar-title>
                    <v-toolbar-title>
                        <span
                            class="white--text text-sm mr-5 d-md-inline-block d-none"
                            >Theme FAQ's</span
                        >
                        <span
                            class="white--text text-sm mr-5 d-md-inline-block d-none"
                            >Need Help ?</span
                        >

                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="transparent"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    small
                                >
                                    <v-avatar tile size="14" class="mr-2">
                                        <img
                                            src="../assets/images/flags/usa.png"
                                            alt=""
                                        />
                                    </v-avatar>
                                    <span>EN</span>
                                    <v-icon right small
                                        >mdi-chevron-down</v-icon
                                    >
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                                >
                                    <v-list-item-title class="pa-0 ma-0">{{
                                        item.title
                                    }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="transparent"
                                    dark
                                    v-bind="attrs"
                                    v-on="on"
                                    small
                                >
                                    <v-avatar tile size="14" class="mr-2">
                                        <img
                                            src="../assets/images/flags/usa.png"
                                            alt=""
                                        />
                                    </v-avatar>
                                    <span>USD</span>
                                    <v-icon right small
                                        >mdi-chevron-down</v-icon
                                    >
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, index) in items"
                                    :key="index"
                                >
                                    <v-list-item-title>{{
                                        item.title
                                    }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-toolbar-title>
                </div>
            </v-container>
        </div>
        <v-app-bar height="95" app class="sub-topbar" color="white py-1">
            <v-container
                :class="
                    $vuetify.breakpoint.xs == true || $vuetify.breakpoint.sm
                        ? 'mt-10'
                        : ''
                "
            >
                <v-row>
                    <v-col
                        cols="2"
                        xs="2"
                        sm="2"
                        v-show="
                            $vuetify.breakpoint.xs == true ||
                            $vuetify.breakpoint.sm == true
                        "
                    >
                        <v-app-bar-nav-icon @click.stop="drawer2 = !drawer2" />
                    </v-col>
                    <v-col cols="5" xs="5" sm="5" md="3" lg="3">
                        <v-toolbar-title class="d-flex align-center">
                            <router-link to="/">
                                <v-img
                                    class="me-2 logo d-md-block"
                                    width="98"
                                    src="../../../../images/logoTest.jpeg"
                                    alt=""
                                />
                            </router-link>
                        </v-toolbar-title>
                    </v-col>
                    <v-col
                        cols="12"
                        md="6"
                        lg="6"
                        v-show="
                            $vuetify.breakpoint.md == true ||
                            $vuetify.breakpoint.lg == true
                        "
                    >
                        <div class="search-bar d-flex p-relative">
                            <v-text-field
                                v-model="
                                    computed_palabra_clave_busqueda_producto
                                "
                                @keypress.enter="searchProducto"
                                placeholder="Buscar Producto"
                                filled
                                rounded
                                dense
                                prepend-inner-icon="mdi-magnify"
                            ></v-text-field>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="white"
                                        class="text-capitalize search-bar-dropdown"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        All Categories
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(item, index) in items"
                                        :key="index"
                                    >
                                        <v-list-item-title>{{
                                            item.title
                                        }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                    <v-col cols="5" xs="5" sm="5" md="3" lg="3">
                        <div class="d-md-block mr-0" style="float: right">
                            <v-dialog v-model="dialog" width="500">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        elevation="0"
                                        fab
                                        small
                                        class="mr-3"
                                        color="grey lighten-2"
                                        v-bind="attrs"
                                        v-on="on"
                                        v-show="
                                            Object.entries(user).length == 0
                                        "
                                    >
                                        <v-icon>mdi-account</v-icon>
                                    </v-btn>
                                </template>
                                <base-card>
                                    <div class="px-3 px-md-10 py-8">
                                        <h3 class="mb-2 text-center">
                                            Welcome To Ecommerce
                                        </h3>
                                        <h5
                                            class="font-600 grey--text text--darken-3 text-sm mb-9 text-center"
                                        >
                                            Log in with email & password
                                        </h5>
                                        <p class="text-14 mb-1">
                                            Correo Electronico
                                        </p>
                                        <v-text-field
                                            v-model="login.correo"
                                            outlined
                                            dense
                                            hide-details
                                            placeholder="example@mail"
                                            class="mb-4"
                                        />
                                        <p class="text-14 mb-1">Contraseña</p>
                                        <v-text-field
                                            v-model="login.pass"
                                            outlined
                                            dense
                                            type="password"
                                            hide-details
                                            placeholder="example@mail"
                                            class="mb-4"
                                        />
                                        <v-btn
                                            block
                                            @click.prevent="loginModal"
                                            color="primary"
                                            class="text-capitalize font-600"
                                            >Login</v-btn
                                        >
                                        <v-col cols="10" lg="8" class="mx-auto">
                                            <div
                                                class="d-flex align-center my-1"
                                            >
                                                <v-divider></v-divider>
                                                <span class="mx-4">on</span>
                                                <v-divider></v-divider>
                                            </div>
                                        </v-col>
                                        <!-- <v-btn
                                            block
                                            dark
                                            color="indigo"
                                            class="text-capitalize font-600 mb-4"
                                        >
                                            <v-icon left class="me-3"
                                                >mdi-facebook</v-icon
                                            >
                                            Continue with facebook
                                        </v-btn>
                                        <v-btn
                                            block
                                            dark
                                            color="blue darken-2"
                                            class="text-capitalize font-600 mb-4"
                                        >
                                            <v-icon left class="me-3"
                                                >mdi-google</v-icon
                                            >
                                            Continue with Google
                                        </v-btn> -->
                                        <div class="text-14 text-center my-3">
                                            Don't have account?
                                            <router-link
                                                to="/sign-up"
                                                class="grey--text text--darken-4 font-600"
                                                >Sign Up</router-link
                                            >
                                        </div>
                                    </div>
                                    <div class="py-4 grey lighten-2">
                                        <div class="text-center">
                                            <span
                                                class="grey--text text--darken-1"
                                                >Forgot Your Password
                                                <router-link
                                                    to="/"
                                                    class="ms-2 grey--text text--darken-4 font-600"
                                                    >Reset It</router-link
                                                >
                                            </span>
                                        </div>
                                    </div>
                                </base-card>
                            </v-dialog>
                            <v-menu
                                bottom
                                min-width="200px"
                                rounded
                                offset-y
                                v-show="Object.entries(user).length > 0"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        class="ma-2"
                                        color="grey lighten-2"
                                        v-on="on"
                                        v-show="Object.entries(user).length > 0"
                                    >
                                        {{ user.name }}
                                        <v-icon right dark>
                                            mdi-account
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-list-item-content class="justify-center">
                                        <div class="mx-auto text-center">
                                            <v-avatar color="brown">
                                                <v-icon>mdi-account</v-icon>
                                            </v-avatar>
                                            <h3>{{ user.name }}</h3>
                                            <p class="text-caption mt-1">
                                                {{ user.email }}
                                            </p>
                                            <v-divider class="my-3"></v-divider>
                                            <v-btn depressed rounded text>
                                                Edit Account
                                            </v-btn>
                                            <v-divider class="my-3"></v-divider>
                                            <v-btn depressed rounded text>
                                                Disconnect
                                            </v-btn>
                                        </div>
                                    </v-list-item-content>
                                </v-card>
                            </v-menu>
                            <!-- cartCount  -->
                            <v-badge
                                bordered
                                color="error"
                                :content="
                                    getCartProducts.length == 0
                                        ? '0'
                                        : getCartProducts.length
                                "
                                overlap
                            >
                                <v-btn
                                    @click="drawer = true"
                                    elevation="0"
                                    fab
                                    color="grey lighten-2"
                                    small
                                >
                                    <v-icon color="">mdi-cart</v-icon>
                                </v-btn>
                            </v-badge>
                        </div>
                    </v-col>
                    <v-col
                        cols="12"
                        v-show="
                            $vuetify.breakpoint.xs == true ||
                            $vuetify.breakpoint.sm == true
                        "
                    >
                        <div class="search-bar d-flex p-relative">
                            <v-text-field
                                v-model="
                                    computed_palabra_clave_busqueda_producto
                                "
                                @keypress.enter="searchProducto"
                                placeholder="Buscar Producto"
                                filled
                                rounded
                                dense
                                prepend-inner-icon="mdi-magnify"
                            ></v-text-field>
                            <v-menu offset-y>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn
                                        color="white"
                                        class="text-capitalize search-bar-dropdown"
                                        v-bind="attrs"
                                        v-on="on"
                                    >
                                        All Categories
                                        <v-icon>mdi-chevron-down</v-icon>
                                    </v-btn>
                                </template>
                                <v-list>
                                    <v-list-item
                                        v-for="(item, index) in items"
                                        :key="index"
                                    >
                                        <v-list-item-title>{{
                                            item.title
                                        }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
            right
            width="320"
            class="z-999"
        >
            <div class="secondary-siebar-content">
                <v-list-item>
                    <v-list-item-avatar class="mr-0">
                        <v-icon color="">mdi-shopping-outline</v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title class=""
                            >{{
                                getCartProducts.length
                            }}
                            Items</v-list-item-title
                        >
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon color="" @click="drawer = false">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
                <div v-if="getCartProducts.length >= 1">
                    <div v-for="(n, index) in getCartProducts" :key="index">
                        <div
                            class="cart-item d-flex justify-space-between align-center px-2 py-3"
                        >
                            <div class="d-flex flex-column align-center">
                                <v-btn
                                    @click="addCartx(n)"
                                    class="mx-2"
                                    fab
                                    outlined
                                    dark
                                    x-small
                                    color="primary"
                                >
                                    <v-icon dark> mdi-plus </v-icon>
                                </v-btn>
                                <span>{{ n.qty }}</span>
                                <v-btn
                                    @click="removeCartx(n)"
                                    class="mx-2"
                                    fab
                                    outlined
                                    dark
                                    x-small
                                    color="primary"
                                >
                                    <v-icon dark> mdi-minus </v-icon>
                                </v-btn>
                            </div>
                            <v-avatar tile size="76">
                                <img :src="n.img" alt="" />
                            </v-avatar>
                            <div class="col-5">
                                <h5 class="text-truncate">{{ n.title }}</h5>
                                <p class="text-tiny">
                                    ${{ n.amount | numberFormat }} x {{ n.qty }}
                                </p>
                                <h5 class="primary--text">
                                    {{ (n.amount * n.qty) | numberFormat }}
                                </h5>
                            </div>
                        </div>
                        <v-divider></v-divider>
                    </div>
                </div>
                <div v-else>
                    <div
                        class="empty-cart-sidebar d-flex flex-column justify-center align-center mt-10"
                    >
                        <v-avatar size="90" tile class="mb-8">
                            <img src="../assets/images/empty-cart.png" alt="" />
                        </v-avatar>
                        <p
                            class="grey--text text--darken-2 px-5 mx-10 text-center"
                        >
                            Your shopping bag is empty. Start shopping
                        </p>
                    </div>
                </div>
            </div>
            <template v-slot:append v-if="getCartProducts.length >= 1">
                <div class="pa-2">
                    <!-- <v-btn to="/checkout-alternative" class="text-capitalize mb-3" block color="primary">
                        Checkout Now 
                    </v-btn> -->
                    <v-btn
                        to="/carrito"
                        class="text-cappitalise"
                        outlined
                        block
                        color="primary"
                        style="margin-bottom: 60px"
                    >
                        View Cart (${{ cartTotal | numberFormat }})
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-navigation-drawer
            v-model="drawer2"
            fixed
            temporary
            left
            width="320"
            class="z-999"
            v-if="$vuetify.breakpoint.xs"
        >
            <div class="secondary-siebar-content">
                <v-list-item>
                    <router-link to="/">
                        <v-img
                            class="me-2 logo d-md-block"
                            width="98"
                            src="../../../../images/logoTest.jpeg"
                            alt=""
                        />
                    </router-link>
                </v-list-item>

                <v-divider></v-divider>

                <v-list dense nav>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        link
                        :to="{ name: item.route_name }"
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{
                                item.title
                            }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </div>
            <template v-slot:append v-if="getCartProducts.length >= 1">
                <div class="pa-2">
                    <v-btn
                        to="/checkout-alternative"
                        class="text-capitalize mb-3"
                        block
                        color="primary"
                    >
                        Checkout Now (${{ cartTotal }})
                    </v-btn>
                    <v-btn
                        to="/cart"
                        class="text-cappitalise"
                        outlined
                        block
                        color="primary"
                    >
                        View Cart
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
        <v-app-bar
            class="navbar white"
            :class="{ 'd-none': $route.path == '/sale-page-two' }"
        >
            <div class="container">
                <div class="d-flex justify-space-between align-center">
                    <v-btn
                        elevation=""
                        color="grey lighten-2"
                        class="text-capitalize"
                        @click="toggleNavbar"
                    >
                        <v-icon left> mdi-view-dashboard </v-icon>
                        Categories
                        <v-icon right> mdi-chevron-down </v-icon>
                    </v-btn>
                    <div
                        id="navbar-toggle-dropdown"
                        class="navbar-toggle-dropdown p-absolute"
                        :class="{ open: isToggleNavbar }"
                    >
                        <Navbar />
                    </div>
                    <div>
                        <ul
                            class="navbar-nav navigation-navbar d-flex flex-row"
                        >
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'home' }"
                                >
                                    <p class="mb-0">Home</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'home.proveedores' }"
                                >
                                    <p class="mb-0">Proveedores</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'home.productos' }"
                                >
                                    <p class="mb-0">Productos</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'solicitud.pedido' }"
                                >
                                    <p class="mb-0">Pedidos</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'roles.permisos' }"
                                >
                                    <p class="mb-0">Roles y permisos</p>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'users' }"
                                >
                                    <p class="mb-0">Usarios</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import HeaderNavbar from "./header-navbar.vue";
import Navbar from "./navbar";
import { errorMonitor } from "events";
const crypto = require("crypto");
export default {
    data() {
        return {
            cartCount: 0,
            colorNav: false,
            dialog: false,
            isToggleNavbar: false,
            items: [
                { title: "Car" },
                { title: "Clothes" },
                { title: "Electronics" },
                { title: "Laptop" },
            ],
            itemTwo: ["Foo", "Bar", "Fizz", "Buzz"],
            drawer: false,
            drawer2: false,
            group: null,
            items: [
                {
                    title: "Home",
                    icon: "mdi-view-dashboard",
                    route_name: "home",
                },
                {
                    title: "Proveedores",
                    icon: "mdi-view-dashboard",
                    route_name: "home.proveedores",
                },
                {
                    title: "Productos",
                    icon: "mdi-view-dashboard",
                    route_name: "home.productos",
                },
                {
                    title: "Pedidos",
                    icon: "mdi-view-dashboard",
                    route_name: "solicitud.pedido",
                },
                {
                    title: "Roles y permisos",
                    icon: "mdi-view-dashboard",
                    route_name: "roles.permisos",
                },
            ],
            login: {
                correo: "",
                pass: "",
            },
            user: {},
        };
    },
    components: {
        HeaderNavbar,
        Navbar,
    },
    computed: {
        ...mapGetters(["getCartProducts", "palabra_clave_busqueda_producto"]),
        computed_palabra_clave_busqueda_producto: {
            get() {
                return this.palabra_clave_busqueda_producto;
            },
            set(val) {
                this.$store.commit("setpalabra_clave_busqueda_producto", val);
            },
        },
        cartTotal() {
            let total = 0;
            this.getCartProducts.forEach((product) => {
                total += product.amount * product.qty;
            });
            return total;
        },
    },
    mounted() {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        if (token && user) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            this.user = JSON.parse(user);
        }
    },
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        async loginModal() {
            try {
                let { data } = await axios.post("/login-sanctum", {
                    email: this.login.correo,
                    password: this.login.pass,
                });
                localStorage.setItem("token", data.token);
                const token = localStorage.getItem("token");
                if (token) {
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${token}`;
                }
                this.user = data.user;
                localStorage.setItem("user", JSON.stringify(data.user));
                this.dialog = false;
            } catch (error) {
                console.log(error);
            }
        },
        async searchProducto() {
            await this.$store.dispatch(
                "getProductosBySearch",
                this.computed_palabra_clave_busqueda_producto
            );
            await this.$store.commit(
                "setpalabra_clave_busqueda_producto",
                this.computed_palabra_clave_busqueda_producto
            );
            this.$router.push({
                name: "home.buscar.productos",
                params: {
                    palabra_clave:
                        this.computed_palabra_clave_busqueda_producto,
                },
            });
        },
        toggleNavbar() {
            this.isToggleNavbar = !this.isToggleNavbar;
        },
        away() {
            this.isToggleNavbar = false;
        },
        removeCartx(item) {
            this.removeCart(item);
        },
        addCartx(item) {
            this.addCart(item);
        },
    },
};
</script>
<style lang="scss" scoped>
$z-index-sub-topbar: 2;
$md: 959px;
$z-99: 99;

.z-999 {
    z-index: 999;
}

.v-list-item {
    min-height: 34px;
}

.top-bar {
    height: 40px;
    display: flex;
    align-items: center;
}

.sale-page-one {
    .sub-topbar {
        &.v-app-bar--is-scrolled {
            position: relative;

            .dropdown-ecommerce {
                display: none;
            }
        }
    }

    .navbar {
        &.v-app-bar--is-scrolled {
            top: 0;
            margin-bottom: 0px;
        }
    }
}

.sale-page-two {
    .sub-topbar {
        &.v-app-bar--is-scrolled {
            position: relative;

            .dropdown-ecommerce {
                display: none;
            }
        }
    }

    .navbar {
        &.v-app-bar--is-scrolled {
            top: 0;
            margin-bottom: 0px;
        }
    }
}

.sub-topbar {
    position: relative;
    box-shadow: none !important;
    width: 100%;
    height: 80px !important;
    z-index: $z-99;

    .dropdown-ecommerce {
        display: none;
    }

    &.v-app-bar--fixed {
        position: unset;
    }

    // z-index: $z-index-sub-topbar;

    &.v-app-bar--is-scrolled {
        position: fixed;
        top: 0;
        box-shadow: none !important;

        .dropdown-ecommerce {
            display: block;
        }
    }

    @media (max-width: $md) {
    }
}

.navbar {
    height: 60px;
    width: 100%;
    z-index: 2;
    box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;

    &.v-app-bar--is-scrolled {
        position: relative;
        top: 64px;
        margin-bottom: 64px;
        box-shadow: rgb(43 52 69 / 10%) 0px 16px 16px -16px !important;
        // box-shadow: none !important;
    }

    @media (max-width: 992px) {
        display: none;
    }
}

.search-bar {
    ::v-deep .v-input__slot {
        border: 1px solid rgb(218, 225, 231);
        background-color: #fff !important;
    }

    .search-bar-dropdown {
        height: 39px;
        position: absolute;
        top: 20px;
        transform: translateY(-50%);
        right: 2px;
        border-radius: 22px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: 1px solid rgb(218, 225, 231) !important;
        box-shadow: none !important;

        @media (max-width: $md) {
            display: none;
        }
    }

    ::v-deep .v-text-field__details {
        display: none;
    }
}

// toggleNavbarButton
.navbar-toggle-dropdown {
    z-index: 98;
    display: none;

    &.open {
        display: block;
        top: 64px;
    }
}

.v-hidden {
    visibility: hidden;
}

.empty-cart-sidebar {
    height: 80vh;
}
</style>
