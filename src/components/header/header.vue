<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img class='myImg' :src="seller.avatar">
                <div class='avatar-item'>
                    <h4 v-text='seller.name'></h4>
                    <h6 >{{seller.description}}/{{seller.deliveryTime}}分钟送达</h6>
                    <div class='avatar-item-list '>
                        <span v-html="seller.supports[0].description"></span>
                        <span class="one arrow"  @click="hillderShow">5个</span>
                    </div>
                </div>
            </div>
        </div>
        <div  class='advertising arrow'>{{seller.bulletin|MyText(17)}}</div>
        <div class='mess' v-show="detailShow" :style="Height">
            <div class="box">
                <h1 class='title' v-text='seller.name'></h1>
                <div class="item">
                    <ul  class="bg">
                        <li><img  v-for="(indxe) of 5" src="../../assets/resource/img/star36_off@2x.png"></li>         
                        <li><img  v-for="(indxe) of Xingqj" src="../../assets/resource/img/star36_on@2x.png" ></li>  
                        <li><img  v-for="(indxe) of XingBj" src="../../assets/resource/img/star36_half@2x.png" ></li>    
                    </ul>
                </div>
                <div class="title-item">
                    <hr><h1>优惠信息</h1><hr>
                </div>
                <ul class="MessItem" >
                    <li v-for="value in objList"><img src="./decrease_1@2x.png"><span v-text="value.text"></span></li>
                </ul>
                  <div class="title-item title-two">
                    <hr><h1>商家公告</h1><hr>
                </div>
                <div v-text='seller.bulletin' class='annou'></div>
                <div class="box-bottom" @click="hillderDel">X</div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['seller'],
        data () {
            return {
                XingBj: 4,
                Xingqj: 4,
                detailShow:false,
                Height:"",   //手机高度
                objList: [
                        {img: './decrease_1@2x.png',text:'在线支付满28减5'},
                        {img: './discount_1@2x.png',text:'VC无限橙果汁全场8折'},
                        {img: './discount_1@2x.png',text:'单人精彩套餐'},
                        {img: './special_1@2x.png',text:'该商家支持发票,请下单写好发票抬头'},
                        {img: './special_1@2x.png',text:'已加入“外卖保”计划,食品安全保障'},
                ]
            };
        },
        created() {
            var height=window.innerHeight;
            this.Height=`height:${height}px`
        },
        methods: {
            hillderShow () {
                this.detailShow=true;
            },
            hillderDel () {
                this.detailShow=false;
            }
        },
        computed: {
        },
        mounted () {
        }
};
</script>
<style scoped>
    .header{
        color:#eee;
    }
    .myImg{
        width:80px;
        height:80px;
        margin-left:20px;
    }
    .avatar{
    display:flex;
    justify-content:"center";
    padding:10px 20px;
    background:#aaa
    }
    .avatar-item{
        width:60%;
        text-align:center;
        padding:0 0 0 20px;
    }
    .avatar-item h4{
       font:600 18px/22px "";
        color:#fff
    }
     .avatar-item h6{
         text-align:left;
          font:400 14px/1em "";
          padding:10px 0;
     }
     .avatar-item-list{
        width:100%;
        text-align:left;
     }
     .avatar-item-list span:nth-child(1){
        font: 500 14px/1em '';
     }
     .avatar-item-list span:nth-child(2){
        display:inline-block;
        float:right;
        border-radius:10px;
        background:#999;
        font: 500 14px/1em '';
        color:#fff;
        padding-left:5px;
        height:22px;
     }
     .arrow{
        display: flex;
        justify-content:space-between;
        align-items:center;
    }
    .arrow::after{
        display:inline-block;
        content:"";
        width:10px;
        height:10px;
        border-top:3px solid #FFF;
        border-right:3px solid #FFF;
        transform:rotate(45deg);
        margin:5px 0 0 0
    }
    .advertising{
        height:30px;
        line-height:2px;
        text-indent:60px;
        padding-right:10px;
        color:#fff;
        background-color:#fff;
        background:#989 url("../../assets/resource/img/bulletin@2x.png") no-repeat 10px 3px;
    }
    .mess{
        position:absolute;
        z-index:10;
        top:0;
        width:100%;
        color:#000;
        background:rgb(7,17,27);
        opacity:0.8;
    }
    .box{
        margin:64px 36px 64px;
        color:#fff;
        text-align:center;
    }
    .header{
        font:700 16px/1em "";
    }
    .item{
        position:relative
    }
    .bg{
        list-style:none;
        height:24px;
        margin:16px 0 28px;
        display:flex;
        justify-content:center;
    }
    .bg>li{
        margin:0 16%;
        position:absolute;
        left:0;
    }
    .bg>li>img{
        margin:0 5px;
    }
    .box-bottom{
        position:absolute;
        bottom:23px;
        left:45%;
    }
    .box>h1{font:900 22px/1em ""}
    .title-item{
        display:flex;
        justify-contnet:center;
    }
    .title-item>hr{
        width:33.333%;
        height:0
    }
     .title-item>h1{
         margin:0 12px;
     }
     .MessItem{
         margin-top:24px;
     }
     .MessItem::after{
         content:'';
         display:table;
         clear:both;
     }
     .MessItem>li{
      display:flex;
      width:100%;
      float:left;
      margin-bottom:12px;
      font:14px/24px "";
      height:24px;
     }
    .MessItem>li>img{
        margin-left:24px;
    }
     .MessItem>li>span{
        text-indent:12px;
     }
     .title-two{
         margin:18px 0 24px;
     }
    .annou{
        line-height:24px;
        text-align:left;
    }
</style>
