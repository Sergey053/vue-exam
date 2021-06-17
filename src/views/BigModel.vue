<template>
<section>
<div class="black margin text">
  <div class="text" >
    <!-- {{ $route.params.category }} -->
  <h3>{{model.title.toUpperCase() }}</h3>
  </div>
 
      <div class="text ">
        <p>{{model.full}}</p>
        <p >{{model.price}}</p>
      </div>
      <div>
        <v-carousel :carousel_data="usersModel"></v-carousel>
      </div>
       <!-- <div>
         <img class="images"  :src="require('@/assets/' + mod.images)">
      </div> -->
     <div>
      <button class="button is-success"
        @click="addToCart(mod)">В корзину</button>
     </div>
 </div>
 </section>
</template>

<script>
import vCarousel from '../components/v-carousel';

export default {
name: "BigModel",
components: {
  vCarousel
},
computed: {
  model(){
    console.log(this.$route.params.id)
    return this.$store.getters.bigModelById(this.$route.params.id);
  },
  usersModel(){
      return  this.$store.state.usersModel;
}
},
methods:{
  addToCart(mod) {
    this.$store.commit('addToUserModel', mod);
  }
} 
}

</script>

<style csoped>
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
.bott{
display: block;
font-size: 1.1em;
width:150px;
text-decoration:none;
text-align:center;
font: bold 14px arial;
text-transform: uppercase;
padding: 10px 15px;
margin: 20px auto;
color: #ccc;
background-color: #555;
background-image: linear-gradient(top, #888 0%, #555 100%);
background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #888), color-stop(1, #555));
background-image: -moz-linear-gradient(top, #888 0%, #555 100%);
background-image: -o-linear-gradient(top, #888 0%, #555 100%);
border: none;
border-radius: 3px;
text-shadow: 0px -1px 0px #000;
box-shadow: 0px 1px 0px #666,0px 5px 0px #444,0px 6px 6px rgba(0, 0, 0, .6);
-webkit-transition: ease .15s all;
-moz-transition: ease .15s all;
-o-transition: ease .15s all;
transition: ease .15s all;
-webkit-animation: none;
 -moz-animation: none;
 -o-animation: none;
  animation: none;
}
.bott:hover, a.bott:focus{
-webkit-animation: linear 1.2s light infinite;
-moz-animation: linear 1.2s light infinite;
-o-animation: linear 1.2s light infinite;
animation: linear 1.2s light infinite;
}
@-webkit-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@-moz-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@-o-keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
@keyframes light{
0%   { color: #ddd; text-shadow: 0px -1px 0px #000; }
50%   { color: #fff; text-shadow: 0px -1px 0px #444, 0px 0px 5px #ffd, 0px 0px 8px #fff; }
100% { color: #ddd; text-shadow: 0px -1px 0px #000; }
}
.bott:active{
color: #fff;
text-shadow: 0px -1px 0px #444,0px 0px 5px #ffd,0px 0px 8px #fff;
box-shadow: 0px 1px 0px #666,0px 2px 0px #444,0px 2px 2px rgba(0, 0, 0, .9);
-webkit-transform: translateY(3px);
-moz-transform: translateY(3px);
-o-transform: translateY(3px);
transform: translateY(3px);
-webkit-animation: none;
-moz-animation: none;
-o-animation: none;
animation: none;
}
</style>