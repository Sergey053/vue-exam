<template>
  <div>{{ $route.params.category }}</div>
  <h2>{{model.title.toUpperCase() }}</h2>
  <div>
    <img :src="model.img">
      </div>
      <div>
        <p>{{model.description}}</p>
        <p>{{model.price}}</p>
      </div>
</template>

<script>
export default {
name: "Model",
computed: {
  model(){
    return this.$store.getters.modelById(this.$route.params.category);
  }
}
}
</script>

<style>

</style>