<template>
    <v-app>
        <m-header />
        <v-container fluid>
            <router-view></router-view>
            <!-- <div class="text-center mb-4">
                <v-btn color="primary" @click="alert = !alert">
                    Toggle
                </v-btn>
            </div> -->
            <v-alert ref="myAlert" :value="alert" border="left" origin="left" max-width="400" colored-border type="success"
                elevation="2" transition="slide-x-reverse-transition" style="position: fixed; left: 20px; right: 20px;"
                timeout="200">
                Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
            </v-alert>
        </v-container>
        <m-footer/>
    </v-app>
</template>
<script>
import Mheader from '../components/header.vue'
import MFooter from '../components/Footer.vue'
export default {
    data() {
        return {
            alert: false,
            alertVisible: false,

        }
    },
    mounted() {
        if (this.alert) {

            setTimeout(() => {
                this.$refs.myAlert.$el.style.display = "none";
                this.alert = !this.alert;
            }, 2000); // 5000 ms = 5 seconds
        }
    },
    components: {
        "m-header": Mheader,
        "m-footer": MFooter
    }
}
</script>