<template>
<div class="black margin text" v-for="mod in model" :key="mod.id">
  <div class="text" >
    <!-- {{ $route.params.category }} -->
  <h3>{{mod.title.toUpperCase() }}</h3>
  </div>
  <div>
    <!-- <img :src="model.img"> -->
     <img class="img"  :src="require('@/assets/' + mod.img)">
      </div>
      <div class="text ">
        <p>{{mod.description}}</p>
        <p >{{mod.price}}</p>
      </div>
      <td>
    <button class="button is-success"
        @click="addToCart(mod)">В корзину</button>
</td>
 </div>
</template>

<script>
export default {
name: "Model",
computed: {
  model(){
    console.log(this.$route.params.category)
    return this.$store.getters.modelById(this.$route.params.category);
  }
},
methods:{
  addToCart(mod) {
    this.$store.commit('addToUserModel', mod);
  }
} 
}

</script>

<style>
.black {
  color: black;
}
.img {
  height: auto;
  width: 200px;
}
.margin {
  margin-left: 2rem;
  margin-bottom: 2rem;
}
.text {
  font-size:20px;
}

</style>