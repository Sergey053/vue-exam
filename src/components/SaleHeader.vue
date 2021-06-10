<template>
  <nav :style="{backgroundColor: background, flexDirection: direction}">
      <router-link v-for="tab in tabs" :key="tab.path" :to="tab.path" :style="{fontSize: size}">
          {{tab.name}}
      </router-link>
  </nav>
</template>

<script>
export default {
name: "SaleHeader",
props: {
    background: String,
    tabs: Array,
    size:String,
    direction: String
}

}
</script>

<style scoped>
.router-link-active {
    background-color: orangered;
    
}
nav {
        display: flex;
        justify-content: space-around;
        color: whitesmoke;
    }

nav a { /* а - это router-link*/
        flex: 1;
        text-decoration: none;
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: center;
        color: whitesmoke;
    }


</style>