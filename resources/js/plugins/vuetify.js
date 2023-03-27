import '@mdi/font/css/materialdesignicons.css' 
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { themePreset } from "../assets/themeConfig";


Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdiSvg',
    },
    theme: themePreset.theme,
    rtl: themePreset.rtl
}

export default new Vuetify(opts)