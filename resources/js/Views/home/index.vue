<template>
    <v-container class="mt-6 mb-14">
        <v-row>
            <v-col cols="12" xl="12" lg="12">
                <v-carousel class="vuetify-carousel" cycle height="100%" hide-delimiter-background show-arrows-on-hover
                    :show-arrows="false">
                    <v-carousel-item v-for="(n, index) in heroSlider" :key="index">
                        <v-sheet height="100%" light>
                            <v-row class="fill-height" align="center">
                                <v-col cols="7" lg="8" class="mb-14 mb-sm-0">
                                    <v-col cols="12" xl="7" class="ms-3 ps-0">
                                        <h1 class="show-3 font-weight-bold mb-4">
                                            {{ n.name }}
                                        </h1>
                                    </v-col>
                                    <v-col cols="12" xl="8">
                                        <p class="secondary--text banner-text mb-4">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat
                                            eu, quam etiam at quis ut convallis.
                                        </p>
                                    </v-col>
                                    <v-btn color="primary" class="text-capitalize ms-3">Shop Now</v-btn>
                                </v-col>
                                <v-col cols="5" lg="4">
                                    <v-img aspect-ratio="1" contain :src="n.img"></v-img>
                                </v-col>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row class="">
            <v-col cols="12" lg="4">
                <base-card class="h-100">
                    <VueSlickCarousel class="slick-secondary" :arrows="true" :dots="false" v-bind="slickSettingsSingleItem">
                        <div v-for="item in 3" :key="item" class="px-4 pt-4">
                            <v-row>
                                <v-col cols="12" lg="8" class="mx-auto text-center mt-14">
                                    <h2 class="mb-2">Introducing New Winter Collection</h2>
                                    <p class="text-14 grey--text text--darken-2 mb-6">
                                        Starting at $39 & save upto 40%
                                    </p>
                                    <router-link to="/" class="
                                d-inline-block
                                bb-primary
                                text-decoration-none
                                black--text
                                font-600
                              ">
                                        SHOP NOW
                                    </router-link>
                                </v-col>
                            </v-row>

                            <v-img contain src="../../assets/images/products/Rectangle 130.png">
                            </v-img>
                        </div>

                        <template #prevArrow="arrowOption">
                            <v-btn class="mx-2 slick-left-arrow" icon small>
                                <v-icon dark>
                                    {{ arrowOption }}
                                    mdi-arrow-left
                                </v-icon>
                            </v-btn>
                        </template>
                        <template #nextArrow="arrowOption">
                            <v-btn class="mx-2 slick-right-arrow" icon small>
                                <v-icon dark>
                                    {{ arrowOption }}
                                    mdi-arrow-right
                                </v-icon>
                            </v-btn>
                        </template>
                    </VueSlickCarousel>
                </base-card>
            </v-col>
            <v-col cols="12" lg="8">
                <h2 class="mb-0">Top Picks</h2>
                <VueSlickCarousel class="slick-secondary mb-6" :arrows="true" :dots="false" v-bind="slickSettingsFour">
                    <v-col cols="12" v-for="(item, index) in flashDeals" :key="index">
                        <v-img class="mb-4 br-8 card-overlay-item" contain :src="item.img"></v-img>
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="16"></v-rating>
                        <h5 class="mb-1">{{ item.name }}</h5>
                        <div class="d-flex align-center flex-wrap">
                            <h5 class="primary--text mr-1">$350</h5>
                            <h5 class="grey--text text--darken-1">$550</h5>
                        </div>
                    </v-col>

                    <template #prevArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-left
                            </v-icon>
                        </v-btn>
                    </template>
                    <template #nextArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </template>
                </VueSlickCarousel>
                <base-card cardHoverShadow class="mb-6">
                    <div class="
                        px-8
                        py-4
                        d-flex
                        flex-wrap flex-sm-nowrap
                        align-center
                        justify-sm-space-odd justify-center
                      ">
                        <div>
                            <v-img max-width="290" class="mx-auto" src="../../assets/images/products/shoes-1.png">
                            </v-img>
                        </div>
                        <div class="">
                            <h3 class="mb-2">Converse Collecitons</h3>
                            <p class="grey--text text--darken-2 mb-4">
                                Get the most exciting deals. Starting at $59
                            </p>
                            <a href="#" class="
                            text-decoration-none
                            black--text
                            bb-primary
                            font-weight-bold
                          ">SHOP NOW</a>
                        </div>
                    </div>
                </base-card>

                <VueSlickCarousel class="slick-secondary mb-6" :arrows="true" :dots="false" v-bind="slickSettingsFour">
                    <v-col cols="12" v-for="(item, index) in gardenGuitar" :key="index">
                        <v-img class="mb-4 br-8 card-overlay-item" contain :src="item.img"></v-img>
                        <v-rating :value="4.5" color="amber" dense half-increments readonly size="16"></v-rating>
                        <h5 class="mb-1">{{ item.name }}</h5>
                        <div class="d-flex align-center flex-wrap">
                            <h5 class="primary--text mr-1">$350</h5>
                            <h5 class="grey--text text--darken-1">$550</h5>
                        </div>
                    </v-col>

                    <template #prevArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-left
                            </v-icon>
                        </v-btn>
                    </template>
                    <template #nextArrow="arrowOption">
                        <v-btn class="mx-2 slick-arrow" fab dark small color="secondary">
                            <v-icon dark>
                                {{ arrowOption }}
                                mdi-arrow-right
                            </v-icon>
                        </v-btn>
                    </template>
                </VueSlickCarousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="pb-0">
                <h2 class="mb-0">Featured Categories</h2>
            </v-col>
            <v-col cols="12" lg="4" class="mb-4">
                <router-link to="/single-product" class="text-decoration-none">
                    <base-card cardHoverShadow class="p-relative h-100 d-flex align-center">
                        <v-img contain src="../../assets/images/products/dslr-camera.png"></v-img>
                        <h3 class="text-uppercase p-absolute bottom-0 ma-5">camera</h3>
                    </base-card>
                </router-link>
            </v-col>
            <v-col cols="12" lg="8" class="mb-4">
                <v-row>
                    <v-col cols="6" lg="6">
                        <router-link to="/single-product" class="text-decoration-none">
                            <base-card cardHoverShadow>
                                <div class="pa-5">
                                    <v-img max-width="280" class="mx-auto mb-5"
                                        src="../../assets/images/products/ps4.png"></v-img>
                                    <h5 class="font-600">GAMING</h5>
                                </div>
                            </base-card>
                        </router-link>
                    </v-col>
                    <v-col cols="6" lg="6">
                        <router-link to="/single-product" class="text-decoration-none">
                            <base-card cardHoverShadow>
                                <div class="pa-5">
                                    <v-img max-width="280" class="mx-auto mb-5"
                                        src="../../assets/images/products/apple-watch-4.png"></v-img>
                                    <h5 class="font-600">WATCH</h5>
                                </div>
                            </base-card>
                        </router-link>
                    </v-col>
                    <v-col cols="6" lg="6">
                        <router-link to="/single-product" class="text-decoration-none">
                            <base-card cardHoverShadow>
                                <div class="pa-5">
                                    <v-img max-width="280" class="mx-auto mb-5"
                                        src="../../assets/images/products/drone.png"></v-img>
                                    <h5 class="font-600">DRONE</h5>
                                </div>
                            </base-card>
                        </router-link>
                    </v-col>
                    <v-col cols="6" lg="6">
                        <router-link to="/single-product" class="text-decoration-none">
                            <base-card cardHoverShadow>
                                <div class="pa-5">
                                    <v-img max-width="280" class="mx-auto mb-5"
                                        src="../../assets/images/products/phone.png"></v-img>
                                    <h5 class="font-600">PHONE</h5>
                                </div>
                            </base-card>
                        </router-link>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="6" class="mb-4">
                <base-card cardHoverShadow>
                    <div class="px-8">
                        <v-row align="center">
                            <v-col cols="12" lg="6">
                                <h3 class="mb-2">
                                    Big Saves on Home Decoration. Save Upto 80%
                                </h3>
                                <p class="text-14 grey--text text--darken-2 mb-6">
                                    Easy payment policy, 12 months 0% in interest.
                                </p>
                                <router-link to="/" class="text-decoration-none bb-primary black--text font-600">
                                    SHOP NOW
                                </router-link>
                            </v-col>
                            <v-col cols="12" lg="6">
                                <v-img height="292" contain src="../../assets/images/products/tableChair.png"></v-img>
                            </v-col>
                        </v-row>
                    </div>
                </base-card>
            </v-col>
            <v-col cols="12" lg="6" class="mb-4">
                <base-card cardHoverShadow class="grey darken-1 white--text">
                    <div class="px-8">
                        <v-row align="center">
                            <v-col cols="12" lg="6">
                                <h3 class="mb-2">
                                    Big Saves on Home Decoration. Save Upto 80%
                                </h3>
                                <p class="text-14 grey--text text--lighten-1 mb-6">
                                    Easy payment policy, 12 months 0% in interest.
                                </p>
                                <router-link to="/" class="text-decoration-none bb-primary white--text font-600">
                                    SHOP NOW
                                </router-link>
                            </v-col>
                            <v-col cols="12" lg="6">
                                <v-img height="292" contain src="../../assets/images/products/outfit.png"></v-img>
                            </v-col>
                        </v-row>
                    </div>
                </base-card>
            </v-col>

            <v-col cols="12" class="pb-0">
                <h2 class="mb-0">Most Viewed</h2>
            </v-col>
            <v-col cols="12" class="px-0">
                <VueSlickCarousel class="slick-secondary" :arrows="true" :dots="false" v-bind="slickSettings">
                    <v-col cols="12" v-for="(item, index) in getProducts.slice(16, 24).map(n => n)" :key="index">
                        <CardCart :content-img="item.img" :content-text="item.title" :counter="item.qty" class="m-5"
                            @cartRemove="removeCart(item)" @cartAdd="addCart(item)" />
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

            <v-col cols="12" class="pb-0">
                <h2 class="mb-0">New Arrivals</h2>
            </v-col>
            <v-col cols="12" class="px-0">
                <VueSlickCarousel class="slick-secondary" :arrows="true" :dots="false" v-bind="slickSettingsSixItem">
                    <v-col cols="12" v-for="(n, index) in newArrivals" :key="index">
                        <v-img class="mb-4 br-8 card-overlay-item" contain :src="n.img"></v-img>

                        <h5 class="mb-1">{{ n.title }}</h5>
                        <h5 class="primary--text">{{ n.price }}</h5>
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

            <v-col cols="12">
                <base-card card cardHoverShadow>
                    <v-img cover height="280" src="../../assets/images/products/bg-gradient.png">
                        <div class="fill-height left-right-gradient d-flex align-center">
                            <v-row class="ps-5 ps-sm-14 ma-0">
                                <v-col cols="12" lg="3" class="pa-0 ma-0">
                                    <h2 class="mb-4">
                                        Build Your Own Youtube Studio Save Upto 70%
                                    </h2>
                                    <p class="grey--text text--darken-3 mb-6">
                                        Everything you need to create your youtube studio
                                    </p>
                                    <router-link to="/" class="text-decoration-none font-600 black--text bb-primary">
                                        DISCOVER EQUIPMENTS
                                    </router-link>
                                </v-col>
                            </v-row>
                        </div>
                    </v-img>
                </base-card>
            </v-col>

            <v-col cols="12" lg="6">
                <v-img class="br-8 mb-6" contain src="../../assets/images/products/photo-1.png"></v-img>
                <h3 class="font-600 mb-1">Art of Keeping Home Minimal & Organised.</h3>
                <div class="d-flex flex-wrap mb-4">
                    <v-icon color="grey darken-1" small class="mr-1">mdi-clock-time-eight-outline</v-icon>
                    <p class="text-14 mb-0 mr-3 grey--text text--darken-1">
                        24 February, 2020
                    </p>
                    <v-icon color="grey darken-1" small class="mr-1">mdi-clock-time-eight-outline</v-icon>
                    <p class="text-14 mb-0 mr-3 grey--text text--darken-1">3 Comments</p>
                </div>
                <p class="grey--text text--darken-3 mb-3">
                    Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin
                    nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis
                    dignissim diam in auctor.
                </p>
                <router-link to="/" class="text-decoration-none font-600 bb-primary black--text">
                    CONTINUE READING
                </router-link>
            </v-col>
            <v-col cols="12" lg="6">
                <v-img class="br-8 mb-6" contain src="../../assets/images/products/photo-2.png"></v-img>
                <h3 class="font-600 mb-1">The Monthly Guide to Cleaning Your Home.</h3>
                <div class="d-flex flex-wrap mb-4">
                    <v-icon color="grey darken-1" small class="mr-1">mdi-clock-time-eight-outline</v-icon>
                    <p class="text-14 mb-0 mr-3 grey--text text--darken-1">
                        24 February, 2020
                    </p>
                    <v-icon color="grey darken-1" small class="mr-1">mdi-clock-time-eight-outline</v-icon>
                    <p class="text-14 mb-0 mr-3 grey--text text--darken-1">3 Comments</p>
                </div>
                <p class="grey--text text--darken-3 mb-3">
                    Maecenas leo ante, gravida vel lectus ac, iaculis lobortis enim. Proin
                    nec orci nec nisl consequat molestie quis sit amet elit. Ut venenatis
                    dignissim diam in auctor.
                </p>
                <router-link to="/" class="text-decoration-none font-600 bb-primary black--text">
                    CONTINUE READING
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Navbar from "../../components/navbar.vue";
import CardCart from "../../assets/components/cartCard/CardCart";
import { mapGetters, mapActions } from 'vuex';
export default {
    components: {
        Navbar,
        CardCart,
    },
    computed: {
        ...mapGetters(['getProducts']),
    },
    data() {
        return {
            slickSettings: {
                infinite: false,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 6,
                initialSlide: 0,

                responsive: [
                    {
                        breakpoint: 2100,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1264,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
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
            slickSettingsTwo: {
                infinite: false,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 0,

                responsive: [
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1264,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
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
                        breakpoint: 650,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1,
                        },
                    },
                ],
            },
            slickSettingsThree: {
                infinite: false,
                speed: 500,
                slidesToShow: 6,
                slidesToScroll: 6,
                initialSlide: 0,

                responsive: [
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
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
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            initialSlide: 3,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                ],
            },
            brandsIcon: [
                {
                    name: "TMW",
                    image: require("../../assets/images/brands/v.png"),
                },
                {
                    name: "Zerrari",
                    image: require("../../assets/images/brands/u.png"),
                },
                {
                    name: "Zord",
                    image: require("../../assets/images/brands/v.png"),
                },
                {
                    name: "Gini",
                    image: require("../../assets/images/brands/u.png"),
                },
                {
                    name: "Nesla",
                    image: require("../../assets/images/brands/v.png"),
                },
            ],

            topRatings: [
                {
                    img: require("../../assets/images/products/camera-1.png"),
                    title: "Camera",
                    price: "$3,300",
                },
                {
                    img: require("../../assets/images/products/shoes-2.png"),
                    title: "Shoe",
                    price: "$400",
                },
                {
                    img: require("../../assets/images/products/mobile-1.png"),
                    title: "Mobile",
                    price: "$999",
                },
                {
                    img: require("../../assets/images/products/watch-1.png"),
                    title: "Watch",
                    price: "$600",
                },
            ],
            newArrivals: [
                {
                    img: require("../../assets/images/products/imagegoggles.png"),
                    title: "Sunglass",
                    price: "$150",
                },
                {
                    img: require("../../assets/images/products/lipstick(2).png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(2).png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/bgwatch.png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(4).png"),
                    title: "Green Plant",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(3).png"),
                    title: "Bonsai Tree",
                    price: "$450",
                },
            ],
            bigDiscounts: [
                {
                    img: require("../../assets/images/products/Electronics/7.beatsw3.png"),
                    title: "BenX 2020",
                },
                {
                    img: require("../../assets/images/products/Electronics/9.SonyTV1080p.png"),
                    title: "Tony TV 1080p",
                },
                {
                    img: require("../../assets/images/products/Electronics/10.SonyPS4.png"),
                    title: "Tony PS4",
                },
                {
                    img: require("../../assets/images/products/Electronics/11.Netgear2020.png"),
                    title: "Setgearr 2020",
                },
                {
                    img: require("../../assets/images/products/Electronics/12.SonyBGB.png"),
                    title: "Tony BGB",
                },
                {
                    img: require("../../assets/images/products/Electronics/13.LGProducts.png"),
                    title: "RG Products",
                },
                {
                    img: require("../../assets/images/products/Electronics/14.Panasonic2019.png"),
                    title: "Sanasonic 2019",
                },
                {
                    img: require("../../assets/images/products/Electronics/15.DuneHD.png"),
                    title: "Zune HD",
                },
                {
                    img: require("../../assets/images/products/Electronics/19.LGWashingMachine.png"),
                    title: "JK Washing Machine",
                },
            ],
            topCategories: [
                {
                    img: require("../../assets/images/banners/category-1.png"),
                },
                {
                    img: require("../../assets/images/banners/category-2.png"),
                },
                {
                    img: require("../../assets/images/banners/category-3.png"),
                },
                {
                    img: require("../../assets/images/banners/category-1.png"),
                },
                {
                    img: require("../../assets/images/banners/category-1.png"),
                },
                {
                    img: require("../../assets/images/banners/category-2.png"),
                },
                {
                    img: require("../../assets/images/banners/category-3.png"),
                },
                {
                    img: require("../../assets/images/banners/category-1.png"),
                },
            ],
            featuredBrands: [
                {
                    img: require("../../assets/images/products/london-britches.png"),
                    title: "London Britches",
                },
                {
                    img: require("../../assets/images/products/jimandjiko.png"),
                    title: "Jim & Jago",
                },
            ],
            categories: [
                {
                    img: require("../../assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
                    title: "Tops",
                },
                {
                    img: require("../../assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
                    title: "Jacket",
                },
                {
                    img: require("../../assets/images/products/Fashion/Accessories/18.DragonRedWristWatch.png"),
                    title: "Smart Watch",
                },
                {
                    img: require("../../assets/images/products/Fashion/Accessories/10.RayBanOcean.png"),
                    title: "Sunglasses",
                },
                {
                    img: require("../../assets/images/products/Fashion/Accessories/3.BrownCap.png"),
                    title: "Cap",
                },
                {
                    img: require("../../assets/images/products/Fashion/Shoes/1.NikeRed.png"),
                    title: "Nike Red",
                },
                {
                    img: require("../../assets/images/products/Fashion/Shoes/5.NikeBlue.png"),
                    title: "Nike Silver",
                },
                {
                    img: require("../../assets/images/products/Fashion/Jewellery/1.Heavy22ktGoldNecklaceSet.png"),
                    title: "Gold Necklace",
                },
                {
                    img: require("../../assets/images/products/Fashion/Clothes/3.NBLHoopHoodie.png"),
                    title: "NBL Hoodie",
                },
                {
                    img: require("../../assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
                    title: "Jacket",
                },
                {
                    img: require("../../assets/images/products/Fashion/Clothes/1.SilverHighNeckSweater.png"),
                    title: "Tops",
                },
                {
                    img: require("../../assets/images/products/Fashion/Clothes/10.LandsJacket.png"),
                    title: "Jacket",
                },
            ],
            heroSlider: [
                {
                    img: require("../../assets/images/products/apple-watch-0.png"),
                    name: "50% Off For Your First Shopping",
                },
                {
                    img: require("../../assets/images/products/apple-watch-0.png"),
                    name: " 20% Off For  First Electronics Purchase",
                },
                {
                    img: require("../../assets/images/products/apple-watch-0.png"),
                    name: "Get 70% Off For  First  Grocery Purchase",
                },
            ],
            tab: null,
            items: ["Brands", "Shops"],
            slickSettingsSingleItem: {
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
            },
            slickSettingsFour: {
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
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
                            slidesToShow: 3,
                            slidesToScroll: 3,
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
            slickSettings: {
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 2000,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1900,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 5,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1700,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            infinite: true,
                        },
                    },
                    {
                        breakpoint: 1264,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
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
                {
                    img: require("../../assets/images/products/flash-4.png"),
                    name: "Zapple Watch",
                },
                {
                    img: require("../../assets/images/products/flash-1.png"),
                    name: "Hike Sneakers",
                },
                {
                    img: require("../../assets/images/products/flash-2.png"),
                    name: "Watch",
                },
                {
                    img: require("../../assets/images/products/flash-3.png"),
                    name: "Mobile",
                },
                {
                    img: require("../../assets/images/products/flash-4.png"),
                    name: "Zapple Watch",
                },
            ],
            gardenGuitar: [
                {
                    img: require("../../assets/images/products/Home&Garden/25.PaintedLeafBegoniaPlant.png"),
                    name: "Painted Leaf Begonia",
                },
                {
                    img: require("../../assets/images/products/Home&Garden/26.ArecaPalminClayPot.png"),
                    name: "Areca PalminClay Pot",
                },
                {
                    img: require("../../assets/images/products/Home&Garden/27.BlackCoralSansevieriaPlant.png"),
                    name: "Black Coral Sansevieria",
                },
                {
                    img: require("../../assets/images/products/Music/1.6StringCheapElectricGuitar.png"),
                    name: "String Electric Guitar",
                },
                {
                    img: require("../../assets/images/products/Music/28.RolandFullSetVDrums.png"),
                    name: "Roland Full SetV Drums",
                },
                {
                    img: require("../../assets/images/products/Music/12.CheapUkuleleOffers.png"),
                    name: "Ukulele Offers",
                },
            ],
            newArrivals: [
                {
                    img: require("../../assets/images/products/imagegoggles.png"),
                    title: "Sunglass",
                    price: "$150",
                },
                {
                    img: require("../../assets/images/products/lipstick(2).png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(2).png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/bgwatch.png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(4).png"),
                    title: "Green Plant",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(3).png"),
                    title: "Bonsai Tree",
                    price: "$450",
                },
                {
                    img: require("../../assets/images/products/lipstick(2).png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/bgwatch.png"),
                    title: "Lipstick",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(4).png"),
                    title: "Green Plant",
                    price: "$250",
                },
                {
                    img: require("../../assets/images/products/lipstick(3).png"),
                    title: "Bonsai Tree",
                    price: "$450",
                },
            ],
        };
    },
    created() {
        this.getProductos();
    },
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        async getProductos() {
            try {
                let { data } = await axios('/api/get-productos')
             
                this.items_productos = data
            } catch (error) {
                console.log(error)
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.left-right-gradient {
    background-image: linear-gradient(90deg,
            rgb(255, 255, 255, 1),
            rgb(255, 255, 255, 0.9),
            rgb(255, 255, 255, 0));
}
</style>