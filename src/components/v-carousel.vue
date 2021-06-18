<template>
  <div class="wrapper">
      <div class="v-carousel" :style="{'margin-left': '-' + (100 * currentSlideIndex) + '%' }">
      <v-carousel-item
      v-for="item in carousel_data"
       :key="item" 
       :item_data="item"
       
      ></v-carousel-item>
  </div  >
  <div class="flex-row">
  <button class="bott" @click="prevSlide">prev</button>
  <button class="bott" @click="nextSlide">next</button>
 </div>
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
    carousel_data: Array,
    interval: {
        type: Number,
        default: 0
    }
      
},

data(){
    return{
        currentSlideIndex: 0
    }
},
methods: {
    prevSlide(){
         if (this.currentSlideIndex > 0){
        this.currentSlideIndex--
      
}
    },
    nextSlide () {
        if (this.currentSlideIndex >= this.carousel_data.length - 1) {
            this.currentSlideIndex = 0
        } else {
            this.currentSlideIndex++
        }
       
    },
    mounted (){
        if (this.interval > 0) {
            let vm = this;
            setInterval(function(){
            vm.nextSlide()
            }, vm.interval)
        }
    }
},


}

</script>

<style scoped>
.wrapper {
max-width: 300px;
overflow: hidden;
}
.v-carousel {
    display: flex;
    transition: all ease .5s;
}
.flex-row {
    display: flex;
    flex-direction: row;
}
.bott{
display: block;
font-size: 1.1em;
width:140px;
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