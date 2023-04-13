<template>
    <v-app>
        <m-header />
        <v-container fluid>
            <KeepAlive>
                <router-view></router-view>
            </KeepAlive>
            <v-alert
                ref="myAlert"
                :value="alert"
                border="left"
                origin="left"
                max-width="400"
                colored-border
                type="success"
                elevation="2"
                transition="slide-x-reverse-transition"
                style="position: fixed; left: 20px; right: 20px"
                timeout="200"
            >
                Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus
                tempus. Donec posuere vulputate arcu.
            </v-alert>
        </v-container>
        <m-footer />
        <m-mobile />
        <v-overlay :value="openOverlay">
            <v-progress-circular :size="70" :width="7" color="purple" />
        </v-overlay>

        <v-snackbar v-model="computed_snack" right bottom>
            <p>Operacion Realizada con exito</p>
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="success"
                    text
                    v-bind="attrs"
                    @click="computed_snack = false"
                >
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>
<script>
import Mheader from "../components/header.vue";
import MFooter from "../components/Footer.vue";
import MMobile from "./MobileNavigationBar.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
    data() {
        return {
            alert: false,
            alertVisible: false,
        };
    },
    computed: {
        ...mapGetters(["overlay", "snack"]),
        computed_snack: {
            get() {
                return this.snack;
            },
            set(val) {
                this.$store.commit("setSnack", val);
            },
        },
        openOverlay: {
            get() {
                return this.overlay;
            },
            set(val) {
                this.$store.commit("setOverlay", val);
            },
        },
    },
    mounted() {
        if (this.alert) {
            setTimeout(() => {
                this.$refs.myAlert.$el.style.display = "none";
                this.alert = !this.alert;
            }, 2000); // 5000 ms = 5 seconds
        }
        
    },
    watch: {
        $route(to, from) {
            this.scrollTop();
        },
    },
    components: {
        "m-header": Mheader,
        "m-footer": MFooter,
        "m-mobile": MMobile,
    },
    methods: {
        scrollTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>
