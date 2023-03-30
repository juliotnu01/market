<template>
  <v-container class="my-6">
      <v-row>
         <v-col cols="12" md="6" lg="6" xl="6">
          <div class="product-slider">
           
            <VueSlickCarousel
              ref="c1"
              :fade="true"
              :asNavFor="$refs.c2"
              :focusOnSelect="true">
                <div>
                   <v-img class="mx-auto" width="300" height="auto" :src="computed_singleProduct.imagen"></v-img>
                </div>
              
            </VueSlickCarousel>
            <!-- <VueSlickCarousel
              ref="c2"
              class="product-slider-click"
              :asNavFor="$refs.c1"
              :slidesToShow="3"
              :focusOnSelect="true">
              <div v-for="(item, index) in flashDeals" :key="index">
                <v-avatar 
                    class="white rounded mr-3" 
                    tile 
                    size="78"
                   
                >
                    <img :src="item.img" alt="">
                </v-avatar>
              </div>
            </VueSlickCarousel> -->
          </div>
         </v-col>
          <v-col cols="12" lg="6">
              <h1 class="mb-4">{{ computed_singleProduct.nombre }}</h1>
              <!-- <div class="d-flex mb-4">
                  <p class="grey--text text--grey-lighten-1 me-3 mb-0">Brand:</p>
                  <p class="font-600 mb-0">Ziaomi</p>
              </div> -->
              <div class="d-flex mb-4">
                  <p class="grey--text text--grey-lighten-1 me-3 mb-0">Rated:</p>
                  <div class="d-flex align-center justify-center align-center mb-1">
                    <v-rating
                        :value="4.5"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="16"
                    ></v-rating>

                    <div class="grey--text text--darken-4 ml-1">
                        (49)
                    </div>
                  </div>
              </div>
              <div class="mb-4">
                  <h2 class="primary--text">${{ computed_singleProduct.precio_normal }}</h2>
                  <!-- <p class="">Stock Available</p> -->
              </div>
              <div class="mb-6">
                    <v-btn 
                        @click="addCartx(singleProductData)"
                        color="primary" 
                        class="text-capitalize mb-3"
                        :class="singleProductData.qty <= 0 ? 'd-block': 'd-none'"
                    >
                        Add to Cart 
                    </v-btn>
                    <div 
                        class="align-center"
                        :class="singleProductData.qty <= 0 ? 'd-none': 'd-flex'"
                    >
                        <v-btn 
                            color="primary" 
                            outlined
                            icon
                            tile
                            class="br-8"
                            @click="removeCartx(singleProductData)"
                        >
                            <v-icon>mdi-minus</v-icon>
                        </v-btn>
                        <h3 class="mx-5">{{singleProductData.qty}}</h3>
                        <v-btn 
                            color="primary" 
                            outlined
                            icon
                            tile
                            class="br-8"
                            @click="addCartx(singleProductData)"
                             
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                    </div>
              </div>
              <!-- <div class="d-flex mb-4">
                  <p class="grey--text text--grey-lighten-1 me-3">Sold By:</p>
                  <p class="font-600">Mobile Store</p>
              </div> -->

          </v-col>
          <v-col cols="12" class="mt-12">
            <v-tabs
                v-model="tab"
                background-color="transparent"
                color="primary"
                class=""
            >
                <v-tab class="font-600 text-capitalize">
                    Description
                </v-tab>
                <v-tab class="font-600 text-capitalize">
                    Review (3)
                </v-tab>
            </v-tabs>

            <v-tabs-items class="transparent my-6 pb-6"  v-model="tab">
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
                                    <v-rating
                                        :value="4.5"
                                        color="amber"
                                        class="me-2"
                                        dense
                                        half-increments
                                        readonly
                                        size="16"
                                    ></v-rating>

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
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
                                    <v-rating
                                        :value="4.5"
                                        color="amber"
                                        class="me-2"
                                        dense
                                        half-increments
                                        readonly
                                        size="16"
                                    ></v-rating>

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
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
                                    <v-rating
                                        :value="4.5"
                                        color="amber"
                                        class="me-2"
                                        dense
                                        half-increments
                                        readonly
                                        size="16"
                                    ></v-rating>

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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id ut mattis. Facilisis vitae gravida egestas ac account.
                        </v-col>
                        </v-row>
                    </div>
                    <h2 class="font-600 mb-6">Write a Review for this product</h2>
                    <h5 class="font-600 mb-3">Your Rating <sup class="primary--text">*</sup></h5>
                    <v-rating
                        :value="0"
                        color="amber"
                        class="mb-3"
                        background-color="amber"
                        dense
                        half-increments
                        readonly
                        size="20"
                    ></v-rating>
                    <h5 class="font-600 mb-3">Your Review <sup class="primary--text">*</sup></h5>
                    <v-textarea 
                        color="primary"
                        class="mb-3"
                        outlined
                        background-color="white"
                    >
                    
                    </v-textarea>
                    <v-btn color="primary" class="text-capitalize">
                        Submit
                    </v-btn>
                </v-tab-item>
                
            </v-tabs-items>

            <!-- <h3 class="mb-6">Frequently Bought Together</h3> -->

            


            <!-- for testing  -->
            <!-- <v-row class="my-6">
                <v-col cols="12" sm="6" lg="2" md="4">
                    <div class="d-flex align-center">
                        <base-card>
                            <v-card-text>
                                <router-link to="/single-product" class="text-decoration-none">
                                    <v-img contain class="card-overlay-item mb-2 br-8" src="../../assets/images/products/Groceries/2.PremiumGroceryCollection.png"></v-img>
                                    <h5 class="grey--text text--darken-4">Premium Grocery</h5>
                                    <div class="d-flex">
                                    <h5 class="primary--text me-2">$250</h5>
                                    <h5 class="grey--text text--darken-1 text-decoration-line-through">$250</h5>

                                    </div>
                                </router-link>
                            </v-card-text>
                        </base-card>
                        <div class="ms-1">
                            <h2 class="mb-0 grey--text text--darken-2">+</h2>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" lg="2" md="4">
                    <div class="d-flex align-center">
                        <base-card>
                            <v-card-text>
                                <router-link to="/single-product" class="text-decoration-none">
                                    <v-img contain class="card-overlay-item mb-2 br-8" src="../../assets/images/products/Groceries/3.PremiumGroceryPack.png"></v-img>
                                    <h5 class="grey--text text--darken-4">Premium Grocery Pack</h5>
                                    <div class="d-flex">
                                        <h5 class="primary--text me-2">$250</h5>
                                        <h5 class="grey--text text--darken-1 text-decoration-line-through">$250</h5>
                                    </div>
                                </router-link>
                            </v-card-text>
                        </base-card>
                        <div class="ms-1">
                            <h2 class="mb-0 grey--text text--darken-2">+</h2>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" lg="2" md="4">
                    <div class="d-flex align-center">
                        <base-card>
                            <v-card-text>
                                <router-link to="/single-product" class="text-decoration-none">
                                    <v-img contain class="card-overlay-item mb-2 br-8" src="../../assets/images/products/Groceries/4.FreashRealCholeMasala.png"></v-img>
                                    <h5 class="grey--text text--darken-4">Freash Masala</h5>
                                    <div class="d-flex">
                                        <h5 class="primary--text me-2">$250</h5>
                                        <h5 class="grey--text text--darken-1 text-decoration-line-through">$250</h5>
                                    </div>
                                </router-link>
                                
                            </v-card-text>
                        </base-card>
                        <div class="ms-1">
                            <h2 class="mb-0 grey--text text--darken-2">+</h2>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" lg="2" md="4">
                    <div class="d-flex align-center">
                        <base-card>
                            <v-card-text>
                                <router-link to="/single-product" class="text-decoration-none">
                                    <v-img contain class="card-overlay-item mb-2 br-8" src="../../assets/images/products/Groceries/5.GumPack.png"></v-img>
                                    <h5 class="grey--text text--darken-4">Gum Pack</h5>
                                    <div class="d-flex">
                                        <h5 class="primary--text me-2">$250</h5>
                                        <h5 class="grey--text text--darken-1 text-decoration-line-through">$250</h5>
                                    </div>
                                </router-link>
                            </v-card-text>
                        </base-card>
                        <div class="ms-1">
                            <h2 class="mb-0 grey--text text--darken-2"> = </h2>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" lg="4" md="4" >
                    <base-card class="transparent h-100 d-flex align-center" >
                        <v-card-text class="d-flex flex-column align-center">
                            <h3 class="primary--text mb-2">$2500</h3>
                            <span class="text-14 grey--text text--darken-2 mb-6">Save $500</span>
                            <div class="d-flex flex-wrap">
                                <v-btn color="primary" class="text-capitalize font-600 me-3 mb-2">
                                    Add to cart
                                </v-btn>
                                <v-btn color="primary" outlined class="text-capitalize font-600 mb-2">
                                    Add to cart
                                </v-btn>
                            </div>
                        </v-card-text>
                    </base-card>
                </v-col>
            </v-row> -->

            <!-- ending:testing  -->

            <!-- <h3 class="mb-6">Also Available at</h3>
            <div class="d-flex align-center flex-wrap">
                <base-card class="text-center me-6 mb-6">
                    <router-link to="/vendor-store" class="text-decoration-none">
                        <v-card-text class="px-12 py-8 ">
                            <v-avatar size="48" class="mb-3">
                                <img src="../../assets/images/faces/propic.png" alt="">
                            </v-avatar>
                            <h4 class="font-600 grey--text text--darken-3">Tech Friend</h4>
                        </v-card-text>
                    </router-link>
                </base-card>
                <base-card class="text-center me-6 mb-6">
                   <router-link to="/vendor-store" class="text-decoration-none">
                    <v-card-text class="px-12 py-8 ">
                        <v-avatar size="48" class="mb-3">
                            <img src="../../assets/images/faces/propic(1).png" alt="">
                        </v-avatar>
                        <h4 class="font-600 grey--text text--darken-3">Smart Shop</h4>
                    </v-card-text>
                   </router-link>
                </base-card>
                <base-card class="text-center mb-6">
                    <router-link to="/vendor-store" class="text-decoration-none">   
                        <v-card-text class="px-12 py-8 ">
                            <v-avatar size="48" class="mb-3">
                                <img src="../../assets/images/faces/propic.png" alt="">
                            </v-avatar>
                            <h4 class="font-600 grey--text text--darken-3">Gadget 360</h4>
                        </v-card-text>
                    </router-link>
                </base-card>
            </div> -->
            <h3 class="mb-6">Productos relacionados</h3>
            
            <v-row>
                <v-col 
                    cols="12"  
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                    v-for="(item, index) in productos_relacionados" :key="index"
                >
               
                    <CardCart
                        :content-img="item.img"
                        :content-text="item.title"
                        :counter="item.qty"
                        class="m-5"
                        @cartRemove="removeCart(item)"
                        @cartAdd="addCart(item)"
                    />
                </v-col>
            </v-row>
  

          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';
import CardCart from "../../assets/components/cartCard/CardCart";
export default {
    components: {
        CardCart
    },
    computed: {
      ...mapGetters(['getProducts', 'singleProduct', "itemsBySearch"]),
    
      productos_relacionados: {
        get(){
            var model = [];
            for (let index = 0; index < this.itemsBySearch.length; index++) {
                const element = this.itemsBySearch[index];
                 model.push({
                        id: element.id,
                        price: element.precio_normal,
                        category: element.categoria,
                        amount: element.precio_normal,
                        qty: 0,
                        title: element.nombre ?? "",
                        img:
                            element.imagen == "" || element.imagen == null
                                ? "https://www.4me.com/wp-content/uploads/2018/01/4me-icon-product.png"
                                : element.imagen,
                        name: element.nombre ?? "",
                        precio: element.precio_normal ?? 999,
                        descuento: 23,
                    });
            }
            return model 
           
            
        },
        set(val){
            this.$store.commit('setItemsBySarch', val)
        }
      },    
      computed_singleProduct:{
        get(){
            return this.singleProduct
        },
        set(val){
            this.$store.commit('setSingleProduct', val)
        }
      }
    },
    data(){
        return {
           tab: null,
           isQuantity: 0,
           singleProductData: {
                id: 1,
                img: require('../../assets/images/products/flash-1.png'),
                title: 'Sneakers',
                category: 'Sneakers',
                amount: 300,
                rating: 3,
                qty: 0
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
                
            ],
           
        }
    },
    methods: {
        ...mapActions(["addCart", "removeCart"]),
        addCartx(data) {
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
