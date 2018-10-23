<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class='top' @click="myShow($event)">
      <router-link class="tab-item" :class="{active:ShopColor}" to="/" >商品</router-link>
      <router-link class="tab-item " :class="{active:DiscussColor}" to='Seller'>评论</router-link>
      <router-link class="tab-item" :class="{active:MerchantColor}" to='Retingss'>商家</router-link>
    </div>
    <router-view :listParameter='this.listParameter'></router-view>
     
    <div class="footer" :style="top">
        <ShowCart></ShowCart>
    </div>
   
  </div>
</template>
<script>

import VHeader from './components/header/header.vue';
import ShowCart from './components/shopCart/shopCart';
import Data from '../data.json';

export default {
  data () {
    return {
      seller: {},
      listParameter:{},
      ShopColor: true,
      DiscussColor: false,
      MerchantColor: false,
      top:""    //定位的高度
    };
  },
  created () {
     this.listParameter=Data;
     var height=window.innerHeight-205;
     console.log(height+"----")
     this.top=`top:${top}px`
  },
  mounted () {
     this.seller = Data.seller; 
      console.log(this.listParameter)
  },
  methods: {
    /* 头部样式 */
     myShow ($event) {
       /* var e = $event.currentTarget.innerHTML; */
       var Text = $event.target.innerHTML;
        if (Text === '商品') {
         this.ShopColor = true;
           this.DiscussColor = false;
           this.MerchantColor = false;
        }
        if (Text === '评论') {
           this.ShopColor = false;
           this.DiscussColor = true;
           this.MerchantColor = false;
        }
        if (Text === '商家') {
          this.MerchantColor = true;
           this.ShopColor = false;
           this.DiscussColor = false;
        }
    }
  },
   components: {
    VHeader,
    ShowCart
   }
};
</script>
<style scoped>
  #app>.top{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    justify-content: space-around;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
   #app>.top>.tab-item{
     display:block;
     width:33.3%;
     text-align:center;
   }
   .active{
      color:red;
    }
    /*footer*/
    .footer{
      border:1px solid red;
      position:relative;
      bottom:0;
      height:40px;
      background:rgba(0,0,0,0.8);
    }
</style>
