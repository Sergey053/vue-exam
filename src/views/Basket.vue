<template>
<div class="black margin text" v-for="bask in basketArr" :key="bask.id">
  <div class="text" >
    {{ $route.params.category }}
  <h3>{{bask.title.toUpperCase() }}</h3>
  </div>
  <div>
    <!-- <img :src="model.img"> -->
     <img class="img"  :src="require('@/assets/' + bask.img)">
      </div>
      <div class="text ">
        <p>{{bask.description}}</p>
        <p >{{bask.price}}</p>
      </div>
      <td>
    <button class="button is-success"
        @click="deleteOfCart(bask)">Удалить из корзины</button>
   </td>
 </div>
</template>

<script>
export default {
name: "Basket",
computed: {
  basketArr(){
   return this.$store.state.basket;
}
},
methods : {
    deleteOfCart (bask) {
      this.state.$remove(bask)
    }
  }

}

</script>

<style>

</style>