<template>
  <div>
      <img v-for="img in state.usersModel.images" class="img"  :src="require('@/assets/' + img)" :key="img"> alt="">
  </div>
</template>

<script>
export default {
name:"v-carousel-item",
props: {
    item_data: {
        type: Object,
        default: () => {}
    }
},
data(){
    return{}
},
}
</script>

<style scoped>

</style>