<template>
<div class="goods" :style="this.OverHeight">
  <div class='menu-wrapper'>
      <ul class="menu-list">
        <li v-for='(item,index) of listParameter.goods' @click="show(index)" :key="index">
          <span>
            <img  v-show="item.type>0" src="../../assets/resource/img/special_3@2x.png">
            <span class="item-n">{{item.name}}</span>
          </span>
        </li>
      </ul>
  </div>
  <div class='foods-wrapper' :style="this.OverHeight">
    <div class="box"     v-for="(value,indexs) in listFoods" :key="indexs">
      <div class="goods_name">{{value.name}}</div>
      <div class="goods_item_box">
        <img :src="value.image">
        <div class="item_list">
          <h2>{{value.description | MyText(7)}}</h2>
          <div>月供{{value.sellCount}} /好评{{value.rating}}</div>
          <div>价格:{{value.price}}<span v-show="value.oldPrice"> &nbsp;&nbsp;旧价{{value.oldPrice}}</span></div>
         <div class="num">
            <button @click="jia(this,$event,indexs)">+</button> 
            <input type="text"  v-model="value.count" data-one='0'>
            <button>-</button>
         </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script scoped>
  export default {
    props:['listParameter'],
    data(){
      return {
           list:{},   //所有数据
           listFoods:{},  //单项食品
           FoodsName:{},    //主标题
           OverHeight:"",
           num:[],
           pages:0,      //(热销榜)左边点击到的参数
           x:"9"
      }
    },
    created() {  
      this.list=this.listParameter;
      this.listFoods=this.listParameter.goods[0].foods;  
      //定位的高度
      var height=window.innerHeight-205;
      this.OverHeight=`height:`+height+"px"
      //每一个商品的数量
      this.ShopNum();
    },
    watch: {
    },
    updated() {
     console.log("更新")
    },
    methods: {
      show(a){ 
        this.listFoods=this.list.goods[a].foods;
        this.pages=a;
      },
      //给每一个商品添加一个count参数
      ShopNum(){
        var goodsLength = this.listParameter.goods.length;
         for(var i=0;i<goodsLength;i++){
          var foodsLength = this.listParameter.goods[i].foods.length;
          for(var j=0;j<foodsLength;j++){
          this.listParameter.goods[i].foods[j].count=0;
        }
       } 
      },
    jia(bb,$event,j){
    //  var x=++this.num[indexs];
    //  this.num.splice(indexs,1,x);  
    // console.log(this.listFoods)
      let i=this.pages  //第几个主题的下标
      let shu =++this.listParameter.goods[i].foods[j].count

    console.log(this)
    console.log($event)
     
    console.log(this.listFoods[j].count)
    }
  }
}
</script>
<style scoped> 
  .goods{
   position:relative;
   z-index:1;
   display:flex;
   flex-direction:row;
   justify-content:space-between;
   overflow:auto;
  }
  .menu-wrapper{
   width:29.8%;
   background:#ddd; 
  }
  .foods-wrapper{
     width:70.2%;
     overflow:auto;
  }
  .menu-list{
   overflow-x:auto;
  }
  .menu-list>li{
    display:flex;
    justify-content:center;
    padding:0 12px;
    background:#eee;
     border-bottom:1px solid #ddd
  }
  .menu-list>li:hover{
    background:#fff
  }
   .menu-list>li:nth-child(1){
     
   }
  .menu-list>li>span{
    display:inline-block;
    width:100%;
    float:left;
    font:18px/1em "";
    text-align:center;
    line-height:54px;
    height:54px;
  }
  .menu-list>li>span>span:hover{
    font-weight:900;
  }
 .menu-list>li:nth-child(2)>span{
   line-height:20px;
  }
  .menu-list>li:nth-child(3)>span{
    line-height:20px;
  }
  .menu-list>li>span>img{
    width:18px;
    height:18px;
    position:relative;
    top:4px;
  }
  .box{
    margin:0;
    color:rgb(7,17,27);
    padding-bottom:18px;
  }
  .box>.goods_name[data-v-80a9aa06] {
    width: 100%;
    height: 28px;
    background: rgba(7,17,27,0.1);
    line-height: 28px;
    text-align:center;
}
  .box>.goods_name{
    width:100%;
    height:28px;
    background:rgba(7,17,27,0.1)
  }
  .goods_item_box{
  display:flex;
  margin-top:16px;
  text-align:left;
  }
  .goods_item_box>img{
    width:96px;
    height:96px;
    margin:0 10px 0 16px;
  }
  .item_list{
    width:100%;
  }
  .item_list>h2{
    font:900 16px "";
    line-height:28px;
  }
  .item_list>div{
    font:10px/20px "";
  }
  .num{
    display:flex;
    width:85%;
    flex-direction:row-reverse;
  }
  .num input{  
   width:20px;
   text-align:center;
  }
</style>
