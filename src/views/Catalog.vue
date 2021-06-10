<template>
  <!-- qwd -->
  <div  >
      Категории
  </div >
  <sale-header background="grey"  :tabs="tabs" size="18px" direction="column"></sale-header>
  <router-view></router-view>
</template>

<script >
import SaleHeader from "@/components/SaleHeader";
export default {
name: "Catalog",
components: {SaleHeader},
data(){
  return{
    tabs: [
      {name: 'Компьютеры',path:'/catalog/computers'},
      {name: 'Мониторы',path:'/catalog/monitors'},
      {name: 'Ноутбуки',path:'/catalog/notebooks'}
    ]
  }
}
}
</script>

<style scoped>

</style>