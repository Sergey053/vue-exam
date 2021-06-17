<template>
<section>
<div class="black margin text" v-for="mod in model" :key="mod.id">
  <div class="text" >
    <!-- {{ $route.params.category }} -->
  <h3>{{mod.title.toUpperCase() }}</h3>
  </div>
 
      <div class="text ">
        <p>{{mod.full}}</p>
        <p >{{mod.price}}</p>
      </div>
       <!-- <div>
         <img class="img"  :src="require('@/assets/' + mod.img)">
      </div> -->
       <div>
         <img class="images"  :src="require('@/assets/' + mod.images)">
      </div>
     <div>
      <button class="button is-success"
        @click="addToCart(mod)">В корзину</button>
     </div>
 </div>
 </section>
</template>

<script>
export default {
name: "BigModel",
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