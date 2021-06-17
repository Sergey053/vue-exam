<template>
  <div>
      <v-carousel-item
      v-for="item in carousel_data" :key="item.id" :item_data="item"
      ></v-carousel-item>
  </div>
</template>

<script>
import vCarouselItem from '../components/v-carousel-item'


export default {
name:"v-carousel",
components: {
    vCarouselItem

},
props: {
    carousel_data: {
        type: Array,
        default: () => []
    }
},
data(){
    return{}
},
}
</script>

<style scoped>

</style>