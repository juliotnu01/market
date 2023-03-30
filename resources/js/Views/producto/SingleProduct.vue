<template>
    <v-container class="my-6">
        <v-row>
            <v-col cols="12" md="6" lg="6" xl="6">
                <div class="product-slider">
                    <VueSlickCarousel ref="c1" :fade="true" :asNavFor="$refs.c2" :focusOnSelect="true">
                        <div>
                            <v-img class="mx-auto" width="300" height="auto" :src="computed_singleProduct.img"></v-img>
                        </div>
                    </VueSlickCarousel>
                </div>
            </v-col>
            <v-col cols="12" lg="6">
                <h1 class="mb-4">{{ computed_singleProduct.title }}</h1>
                <div class="d-flex mb-4">
                    <p class="grey--text text--grey-lighten-1 me-3 mb-0">Rated:</p>
                    <div class="d-flex align-center justify-center align-center mb-1">
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="16"></v-rating>

                        <div class="grey--text text--darken-4 ml-1">
                            (49)
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <h2 class="primary--text">${{ computed_singleProduct.amount | numberFormat }}</h2>
                </div>
                <div class="mb-6">
                    <v-btn @click="addCartx(computed_singleProduct)" color="primary" class="text-capitalize mb-3"
                        :class="computed_singleProduct.qty <= 0 ? 'd-block' : 'd-none'">
                        Add to Cart
                    </v-btn>
                    <div class="align-center" :class="computed_singleProduct.qty <= 0 ? 'd-none' : 'd-flex'">
                        <v-btn color="primary" outlined icon tile class="br-8" @click="removeCartx(computed_singleProduct)">
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <h3 class="mx-5">{{ computed_singleProduct.qty }}</h3>
                        <v-btn color="primary" outlined icon tile class="br-8" @click="addCartx(computed_singleProduct)">
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="mt-12">
                <v-tabs v-model="tab" background-color="transparent" color="primary" class="">
                    <v-tab class="font-600 text-capitalize">
                        Description
                    </v-tab>
                    <v-tab class="font-600 text-capitalize">
                        Review (3)
                    </v-tab>
                </v-tabs>
                <v-tabs-items class="transparent my-6 pb-6" v-model="tab">
                    <v-tab-item>
                        <h3 class="mb-4">Descripción :</h3>
                        <div class="Typography-sc-1nbqu5-0 ebXTOD">
                            {{ computed_singleProduct.descripcion }}
                        </div>
                    </v-tab-item>
                    <v-tab-item>
                        <div class="mb-8">
                            <div class="d-flex flex-wrap mb-4">
                                <v-avatar class="me-3" size="48">
                                    <img src="../../assets/images/faces/7.png" alt="">
                                </v-avatar>
                                <div>
                                    <h5 class="font-600">Jannie Schumm</h5>
                                    <div class="d-flex align-center justify-center mb-1">
                                        <v-rating :value="4.5" color="amber" class="me-2" dense half-increments readonly
                                            size="16" />
                                        <div class="font-600 me-2">
                                            4.7
                                        </div>
                                        <div class="grey--text text--darken-2">
                                            4 months ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <v-row>
                                <v-col cols="12" sm="7" md="6" lg="4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.
                                    Facilisis vitae gravida egestas ac account.
                                </v-col>
                            </v-row>
                        </div>
                        <div class="mb-8">
                            <div class="d-flex flex-wrap mb-4">
                                <v-avatar class="me-3" size="48">
                                    <img src="../../assets/images/faces/6.png" alt="">
                                </v-avatar>
                                <div>
                                    <h5 class="font-600">Joe Kenan</h5>
                                    <div class="d-flex align-center justify-center mb-1">
                                        <v-rating :value="4.5" color="amber" class="me-2" dense half-increments readonly
                                            size="16"></v-rating>

                                        <div class="font-600 me-2">
                                            4.7
                                        </div>
                                        <div class="grey--text text--darken-2">
                                            1.9 years ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <v-row>
                                <v-col cols="12" sm="7" md="6" lg="4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.
                                    Facilisis vitae gravida egestas ac account.
                                </v-col>
                            </v-row>
                        </div>
                        <div class="mb-8">
                            <div class="d-flex flex-wrap mb-4">
                                <v-avatar class="me-3" size="48">
                                    <img src="../../assets/images/faces/8.png" alt="">
                                </v-avatar>
                                <div>
                                    <h5 class="font-600">Jenifer Tulio</h5>
                                    <div class="d-flex align-center justify-center mb-1">
                                        <v-rating :value="4.5" color="amber" class="me-2" dense half-increments readonly
                                            size="16"></v-rating>

                                        <div class="font-600 me-2">
                                            4.7
                                        </div>
                                        <div class="grey--text text--darken-2">
                                            1.9 years ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <v-row>
                                <v-col cols="12" sm="7" md="6" lg="4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis.
                                    Facilisis vitae gravida egestas ac account.
                                </v-col>
                            </v-row>
                        </div>
                        <h2 class="font-600 mb-6">Write a Review for this product</h2>
                        <h5 class="font-600 mb-3">Your Rating <sup class="primary--text">*</sup></h5>
                        <v-rating :value="0" color="amber" class="mb-3" background-color="amber" dense half-increments
                            readonly size="20"></v-rating>
                        <h5 class="font-600 mb-3">Your Review <sup class="primary--text">*</sup></h5>
                        <v-textarea color="primary" class="mb-3" outlined background-color="white">

                        </v-textarea>
                        <v-btn color="primary" class="text-capitalize">
                            Submit
                        </v-btn>
                    </v-tab-item>
                </v-tabs-items>
                <h3 class="mb-6">Productos relacionados</h3>
                <VueSlickCarousel v-if="productos_relacionados.length > 0" class="slick-secondary" :arrows="true"
                    :dots="false" v-bind="slickSettingsSixItem">
                    <!-- <v-col cols="12" v-for="(n, index) in productos_relacionados" :key="index">
                        <router-link :to="{ name: 'home.productos.unico', params: { id: n.id } }">
                            <v-img height="200" class="br-t-8" :src="n.img"></v-img>
                        </router-link>

                        <h5 class="mb-1">{{ n.title }}</h5>
                        <h5 class="primary--text">${{ n.price | numberFormat }}</h5>
                    </v-col> -->

                    <v-col v-for="(item, index) in productos_relacionados" :key="index" cols="12">

                        <CardCart :idItem="item.id" :content-img="item.img" :content-text="item.title" :amount="item.amount"
                            :contentRating="item.rating" :counter="item.qty" @cartRemove="removeCart(item)"
                            @cartAdd="addCart(item)">
                        </CardCart>
                    </v-col>

                    <template #prevArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow prev slick-prev" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-left
                            </v-icon>
                        </v-btn>
                    </template>
                    <template #nextArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow next slick-next" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </template>
                </VueSlickCarousel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { computed } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import CardCart from "../../assets/components/cartCard/CardCart";
export default {
    components: {
        CardCart
    },
    computed: {
        ...mapGetters(['getProducts', 'singleProduct', "itemsBySearch"]),

        productos_relacionados: {
            get() {
                var model = [];
                for (let index = 0; index < this.itemsBySearch.length; index++) {
                    const element = this.itemsBySearch[index];
                    model.push({
                        id: element.id,
                        price: element.price,
                        category: element.category,
                        amount: parseInt(element.amount ?? 999),
                        qty: 0,
                        title: element.title,
                        img: element.img,
                        name: element.name,
                        precio: parseInt(element.precio ?? 99),
                        descuento: element.descuento,
                    });
                }
                return model


            },
            set(val) {
                this.$store.commit('setItemsBySarch', val)
            }
        },
        computed_singleProduct: {
            get() {
                return {
                    id: this.singleProduct.id,
                    img: this.singleProduct.imagen,
                    title: this.singleProduct.nombre,
                    descripcion: this.singleProduct.descripcion,
                    category: this.singleProduct.categoria,
                    amount: this.singleProduct.precio_normal,
                    rating: 3,
                    qty: 0
                }
            },
            set(val) {
                this.$store.commit('setSingleProduct', val)
            }
        },
    },
    data() {
        return {
            tab: null,
            isQuantity: 0,
            flashDeals: [
                {
                    img: require("../../assets/images/products/flash-1.png"),
                    name: "Sneakers",
                },
                {
                    img: require("../../assets/images/products/flash-2.png"),
                    name: "Watch",
                },
                {
                    img: require("../../assets/images/products/flash-3.png"),
                    name: "Mobile",
                },

            ],
            slickSettingsSixItem: {
                infinite: false,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 6,
                initialSlide: 0,

                responsive: [
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1264,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            initialSlide: 2,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            },

        }
    },
    created(){
        this.testA()
    },
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        async testA(){
                const id = this.$route.params.id;
                await this.$store.dispatch('getsingleProduct', id)
                await this.$store.dispatch('getProductosBySearch', this.singleProduct.nombre.substr(0,10))
                // console.log({ sinP: store.getters.singleProduct })
        },
        addCartx(data) {
            console.log({ data })
            this.addCart(data)
        },
        removeCartx(data) {
            this.removeCart(data)
        },
    }
}
</script>
<style lang="scss" scoped>
.product-slider {

    .product-slider-click {
        display: flex;
        justify-content: center;

        ::v-deep .slick-slide {
            width: 80px !important;
            margin-right: 16px;
            border: 1px solid rgb(218, 225, 231);
            border-radius: 5px;
        }

        ::v-deep .slick-current {
            border: 1px solid #D23F57;
            border-radius: 5px;
        }
    }
}
</style>
