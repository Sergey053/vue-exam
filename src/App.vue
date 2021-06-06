<template>
  <div>
  <sale-header :background="background" :color="color" :tabs="tabs"></sale-header>
  
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
  
  color: #ecf0f3;
}


</style>
