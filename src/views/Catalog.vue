<template>
  <!-- qwd -->
  <section class="section">
  <div class="nav" >
  <sale-header   :tabs="tabs"  ></sale-header>
   </div >
   <div class="products">
     <tranzition>
  <router-view></router-view>
     </tranzition>
  </div>
  </section>
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
 .section{
      display: flex;
      flex-grow: 1;
      
   }
  .nav{
      width: 250px;
      height: 250px;
      display: flex;
      flex-direction: column;
      background-color: #787c88;
      border: 2px solid #f35906;
      /* justify-content: center; */
   } 
   .catalog{
      text-align: center;
      padding: 15px 60px;
      width: 130px;
      font-size: 1.5rem;
      text-decoration: none;
      color: #f5f5f5;
      border: 2px solid #f35906;
   }
   .catalog:focus{
      background-color: #f35906;
    }
   .catalog:hover{
      background-color: #f35906
    }
   .products{
      padding: 2rem;
      flex-grow: 1;
      display: flex;
   }
   
</style>