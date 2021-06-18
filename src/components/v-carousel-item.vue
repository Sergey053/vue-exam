<template>
  <div>
      <img  class="img"  :src="require('@/assets/' + item_data)" :key="item_data" alt=""> 
  </div>
</template>

<script>
export default {
name:"v-carousel-item",
props: {
    item_data: String,
    
    },

}
</script>

<style scoped>

</style>