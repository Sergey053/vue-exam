<template>
<div class="header" >
    <!-- <div>
        <router-link to="/" class="name">HOME</router-link>
    </div> -->
   
  <nav class="nav">
      <router-link class="nav_item" v-for="tab in tabs" :key="tab.path" :to="tab.path" >
          {{tab.name}}
      </router-link>
  </nav>
 
  </div>
</template>

<script>
export default {
name: "SaleHeader",
props: {
    background: String,
    tabs: Array,
  
}

}
</script>

<style scoped>
 .nav_item:hover{
        background-color: #f35906;
        
    }

    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: #787c88;
        height: 4rem;
        padding: 0 3rem;
        border: 2px solid #f35906;
    }
    nav{
        width: 50%;
        display: flex;
        flex: column;
    }
    nav a{
        flex: 1;
        color: #f5f5f5;
        font-size: 1.5rem;
        text-decoration: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        
    }
    
</style>