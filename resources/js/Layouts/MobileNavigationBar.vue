<template>
  <v-bottom-navigation
    v-model="value"
    class="d-md-none d-flex mobile-navigation-bottom"
    color="primary"
    fixed
    
  >
    <v-btn to="/">

      <span class="">Home</span>
      <!-- <img class="icon mr-0" src="../assets/images/icons/home.svg" alt="" /> -->
      <img class="icon mr-0" src="../assets/images/icons/home.svg" alt="" />
    </v-btn>

    <v-btn :to="{name: 'home.buscar.productos', params: { palabra_clave: 'all' }}">
      <span>Productos</span>
      <img class="icon mr-0" src="../assets/images/icons/products-svgrepo-com.svg" alt="" />
    </v-btn>

    <v-btn :to="{name: 'home.proveedores'}">
      <span>Proveedores</span>
      <img class="icon mr-0" src="../assets/images/icons/online-shop-svgrepo-com.svg" alt="" />
    </v-btn>

    <v-btn to="/carrito">
      <span>Carrito</span>
      <img class="icon mr-0" src="../assets/images/icons/bag.svg" alt="" />
    </v-btn>

    <!-- <v-btn to="/view-profile">
      <span>Account</span>

      <img class="icon mr-0" src="../assets/images/icons/user-2.svg" alt="" />
    </v-btn> -->
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 1 }),

    computed: {
    //   color () {
    //     switch (this.value) {
    //       case 0: return 'blue-grey'
    //       case 1: return 'teal'
    //       case 2: return 'brown'
    //       case 3: return 'indigo'
    //       default: return 'blue-grey'
    //     }
    //   },
    },
  }
</script>
<style lang="scss">
    .mobile-navigation-bottom {
        bottom: 0;
        z-index: 100000 !important;
    }
</style>
