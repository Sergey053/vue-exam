<template>
  <div>
  <sale-header :background="background" :color="color" :tabs="tabs" direction="row"></sale-header>
  
<router-view></router-view>
  </div>
  
</template>

<script>
import SaleHeader from "@/components/SaleHeader";

export default {
  components: {SaleHeader},
  
  data(){
    return {
      tabs: [
        {name: 'Каталог', path:'/catalog'},
        {name: 'Корзина', path:'/basket'},
        {name: 'Авторизация', path:'/authorization'},
      ],
      background: "grey",
      color: "white"
          }
        }
}
</script>
<style>
#app {
  color: #787c88;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #f2f2f2;
  /* height: 100vh; */
}


</style>
