<template>
  <div class="pt-5">

        <router-link to="/dashboard" class="dashboard-nav-link px-4">
            <div class="d-flex align-center">
                <img  class="icon mr-2" src="@/assets/images/icons/board.svg" alt="" />
                <span>Dashboard</span>
            </div>
            <!-- <p class="mb-0">5</p>   -->
        </router-link>
        
        <router-link to="/product-list" class="dashboard-nav-link px-4">
            <div class="d-flex align-center">
                <img  class="icon mr-2" src="@/assets/images/icons/box.svg" alt="" />
                <span>Products</span>
                
            </div>
            <p class="mb-0">300</p>  
        </router-link>
        <router-link  to="/edit-product" class="dashboard-nav-link px-4">
            <div class="d-flex align-center">
                <img  class="icon mr-2" src="@/assets/images/icons/upload.svg" alt="" />
                <span>Add New Product</span>
            </div>
            <p class="mb-0">1</p>  
        </router-link>
        <router-link  to="/vendor-order-list" class="dashboard-nav-link px-4">
            <div class="d-flex align-center">
                <img  class="icon mr-2" src="@/assets/images/icons/shopping-cart.svg" alt="" />
                <span>Orders</span>
            </div>
            <p class="mb-0">1</p>  
        </router-link>
        <router-link  to="/profile" class="dashboard-nav-link px-4">
            <div class="d-flex align-center">
                <img  class="icon mr-2" src="@/assets/images/icons/gear-2.svg" alt="" />
                <span>Account Settings</span>
            </div>
            
        </router-link>
        
  </div>
</template>

<script>

</script>

<style lang="scss">
    .dashboard-nav-link {
        color: rgb(125, 135, 156) !important;
        text-decoration: none;
        align-items: center;
        display: flex;
        justify-content: space-between;
        border-left: 4px solid #fff;
        margin-bottom: 20px;
        svg {
            width: 20px;
        }
        &.router-link-exact-active {
            color: #D23F57 !important;
            border-left: 4px solid #D23F57;
        }
        &:hover {
            color: #D23F57 !important;
            border-left: 4px solid #D23F57;
        }
    }
</style>