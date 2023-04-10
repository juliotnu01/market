<template>
    <v-container class="my-6">
        <v-row>
            <v-col cols="12">
                <form-wizard class="custom-form-wizard" shape="square" title="" subtitle="" color="#D23F57"
                    next-button-text="Order" finish-button-text="Deliver">
                    <tab-content title="Carrito" icon="mdi mdi-cart-outline">
                        <v-row>
                            <v-col cols="12" md="6" lg="8" xl="8">
                                <div v-for="(n, index) in getCartProducts" :key="index">
                                    <base-card class="d-flex flex-wrap mb-6">
                                        <v-img max-width="140" :src="n.img" alt=""></v-img>
                                        <div class="d-flex flex-column flex-grow-1 flex-wrap pa-4 mw-0">
                                            <div class="d-flex justify-space-between w-100 mb-3">
                                                <div>
                                                    <div class="d-flex"
                                                        :style="$vuetify.breakpoint.xs ? `width: 300px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            height: 100px;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            word-wrap: break-word;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            word-break: break-all;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            padding-right: 30px;`: ''">
                                                        <h4 class="font-600 text-truncate mb-4">{{ n.name }}</h4>
                                                    </div>
                                                    <div>
                                                        <p class="grey--text text--darken-1 mb-0">
                                                            ${{ n.amount | numberFormat }} x {{ n.qty }}
                                                            <span class="primary--text ms-2 font-600">${{ (n.amount * n.qty)
                                                                | numberFormat }}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <!-- <v-btn icon>
                                                    <v-icon>mdi-close</v-icon>
                                                </v-btn> -->
                                            </div>
                                            <div class="d-flex justify-end flex-grow-1 align-end">
                                                <div class="d-flex align-center">
                                                    <v-btn @click="removeCartx(n)" class="mx-2" fab outlined dark x-small
                                                        color="primary">
                                                        <v-icon dark> mdi-minus </v-icon>
                                                    </v-btn>
                                                    <div class="text-center mx-2">{{ n.qty }}</div>
                                                    <v-btn @click="addCartx(n)" class="mx-2" fab outlined dark x-small
                                                        color="primary">
                                                        <v-icon dark> mdi-plus </v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </base-card>
                                </div>
                            </v-col>
                            <v-col cols="12" md="6" lg="4" xl="4">
                                <base-card>
                                    <div class="pa-5">
                                        <div class="d-flex justify-space-between">
                                            <p class="mb-0 grey--text text--darken-1">Total</p>
                                            <h4 class="font-600">${{ cartTotal | numberFormat }}</h4>
                                        </div>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="d-flex align-center mb-4">
                                            <h6 class="">Comentario</h6>
                                        </div>
                                        <v-textarea v-model="computed_factura.comentario" outlined hide-details=""
                                            name="input-7-4" label="Agrega un comentario" value="" />
                                        <v-divider class="my-3"></v-divider>
                                        <h6 class="mb-4">Direccion de envio</h6>

                                        <p class="text-14 mb-1">Pais</p>
                                        <v-text-field v-model="computed_factura.direccion.pais" dense class="mb-4" outlined
                                            hide-details></v-text-field>

                                        <p class="text-14 mb-1">Estado</p>
                                        <v-text-field v-model="computed_factura.direccion.estado" dense class="mb-4"
                                            outlined hide-details></v-text-field>

                                        <p class="text-14 mb-1">Codigo Zip</p>
                                        <v-text-field v-model="computed_factura.direccion.zip" dense class="mb-4" outlined
                                            hide-details></v-text-field>
                                        <v-btn color="primary" class="text-capitalize font-600 mb-4" block>
                                            Pagar ahora
                                        </v-btn>
                                    </div>
                                </base-card>
                            </v-col>
                        </v-row>
                    </tab-content>
                    <tab-content title="Detalle" icon="mdi mdi-newspaper-variant-outline">
                        <v-row>
                            <v-col cols="12" xl="9" lg="8" md="6">
                                <base-card>
                                    <div class="pa-5">
                                        <h6 class="mb-4">Direccino de envio</h6>

                                        <v-row>
                                            <v-col cols="12" xl="6" lg="6">
                                                <p class="text-14 mb-1">Nombre completo</p>
                                                <v-text-field v-model="computed_factura.detalle_fatura.nombre_completo"
                                                    outlined dense hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="6" lg="6">
                                                <p class="text-14 mb-1">Correo Electronico</p>
                                                <v-text-field v-model="computed_factura.detalle_fatura.correo" outlined
                                                    dense hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="4" lg="4">
                                                <p class="text-14 mb-1">Teléfono</p>
                                                <v-text-field v-model="computed_factura.detalle_fatura.telefono" outlined
                                                    dense hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="4" lg="4">
                                                <p class="text-14 mb-1">Zip Code</p>
                                                <v-text-field v-model="computed_factura.direccion.zip" outlined dense
                                                    hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="4" lg="4">
                                                <p class="text-14 mb-1">Pais</p>
                                                <v-text-field v-model="computed_factura.direccion.pais" outlined dense
                                                    hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="6" lg="6">
                                                <p class="text-14 mb-1">Address 1</p>
                                                <v-text-field v-model="computed_factura.direccion.direccion_1" outlined
                                                    dense hide-details=""></v-text-field>
                                            </v-col>
                                            <v-col cols="12" xl="6" lg="6">
                                                <p class="text-14 mb-1">Address 2</p>
                                                <v-text-field v-model="computed_factura.direccion.direccion_2" outlined
                                                    dense hide-details=""></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </base-card>
                            </v-col>
                            <v-col cols="12" xl="3" lg="4" md="6">
                                <base-card>
                                    <div class="pa-5">
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Subtotal:</p>
                                            <h4 class="font-600 mb-0">${{ computed_factura.total_factura | numberFormat }}
                                            </h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Envio:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">I.V.A.:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Descuento:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Descuento cupon:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="d-flex justify-end">
                                            <h2 class="mb-3">${{ computed_factura.total_factura | numberFormat }}</h2>
                                        </div>
                                        <v-text-field label="codigo de cupon" outlined dense hide-details=""
                                            class="mb-4"></v-text-field>
                                        <v-btn color="primary" outlined class="text-capitalize font-600" block>
                                            Aplicar cupon de descuento
                                        </v-btn>
                                    </div>
                                </base-card>
                            </v-col>
                        </v-row>
                    </tab-content>
                    <tab-content title="Forma de pago" icon="mdi mdi-briefcase-variant-outline">
                        <v-row>
                            <v-col cols="12" xl="9" lg="8" md="6">
                                <base-card>
                                    <v-divider></v-divider>
                                    <div class="pa-5">

                                        <h6 class="black--text font-600">Pago Tranferencia</h6>
                                        <v-switch v-model="switch2"
                                            :label="`${switch2.toString() == 'true' ? 'Pagar con transferencia' : ''}`"></v-switch>
                                    </div>
                                    <v-divider v-show="switch2"></v-divider>
                                    <div class="pa-5" v-show="switch2">
                                        <p class="text-14 mb-1">Codigo de tranferencia</p>
                                        <div class="d-flex">
                                            <v-text-field class="mr-4" outlined dense hide-details=""></v-text-field>
                                            <v-btn color="primary" outlined> Cargar codigo </v-btn>
                                        </div>
                                    </div>
                                    <v-divider></v-divider>
                                    <div class="pa-5">
                                        <h6 class="black--text font-600">Pagar en desino</h6>
                                        <v-switch v-model="switch1"
                                            :label="`${switch1.toString() == 'true' ? 'Pagar en destino' : ''}`"></v-switch>
                                    </div>
                                </base-card>
                            </v-col>
                            <v-col cols="12" xl="3" lg="4" md="6">
                                <base-card>
                                    <div class="pa-5">
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Subtotal:</p>
                                            <h4 class="font-600 mb-0">${{ computed_factura.total_factura | numberFormat }}
                                            </h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Envio:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">I.V.A.:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Descuento:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <div class="d-flex justify-space-between mb-2">
                                            <p class="mb-0 grey--text text--darken-1">Descuento cupon:</p>
                                            <h4 class="font-600">-</h4>
                                        </div>
                                        <v-divider class="my-3"></v-divider>
                                        <div class="d-flex justify-end">
                                            <h2 class="mb-3">${{ computed_factura.total_factura | numberFormat }}</h2>
                                        </div>
                                        <v-text-field label="codigo de cupon" outlined dense hide-details=""
                                            class="mb-4"></v-text-field>
                                        <v-btn color="primary" outlined class="text-capitalize font-600" block>
                                            Aplicar cupon de descuento
                                        </v-btn>
                                    </div>
                                </base-card>
                            </v-col>
                        </v-row>
                    </tab-content>
                </form-wizard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { FormWizard, TabContent } from "vue-form-wizard";
import "vue-form-wizard/dist/vue-form-wizard.min.css";
export default {
    methods: {},
    components: {
        FormWizard,
        TabContent,
    },
    data() {
        return {
            items: ["Foo", "Bar", "Fizz", "Buzz"],
            radios: null,
            switch1: false,
            switch2: false,
            cart: [
                {
                    img: require("../../assets/images/products/Automotive/1.Ford2019.png"),
                    name: "Lord 2019",
                },
                {
                    img: require("../../assets/images/products/Automotive/28.Porsche2020.png"),
                    name: "Xorsche 2020",
                },
                {
                    img: require("../../assets/images/products/Fashion/Jewellery/9.Heavy20ktGoldNecklace.png"),
                    name: "Gold Necklace 2020",
                },
            ],
        };
    },
    computed: {
        ...mapGetters(['getCartProducts', 'palabra_clave_busqueda_producto', 'factura']),
        cartTotal() {
            let total = 0;
            this.getCartProducts.forEach(product => {
                total += product.amount * product.qty
            })
            this.computed_factura.total_factura = total;
            return total;
        },
        computed_factura: {
            get() {
                return this.factura
            },
            set(val) {
                this.$store.commit('setFactura', val)
            }
        }
    },
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        removeCartx(item) {
            this.removeCart(item)

        },
        addCartx(item) {
            this.addCart(item);
        }
    }
};
</script>
