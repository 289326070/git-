<template>
    <div>
       <div class="CartBox">
           <div class="col-1">
                <div class="item-radius">
                    <div class="item-radius-min">
                        <img src="../../assets/resource/img/cart.png" alt="">
                    </div>                  
                </div>
           </div>
           <h1 class="col-1 item-one font">￥0</h1>
           <div class="col-1 item-two">另需配送费￥4元</div>
           <h1 class="col-1 item-three font">￥20起送</h1>
       </div>
    <!--购物车商品--> 
        <div class="ShopList" >
            <div class="List-header">
                <h1 class="title">购物车</h1>
                <span>清空</span>
            </div>          
            <ul  class="list-content">
                <li class="food" >
                    <span>商品-</span>
                    <span>价格</span>
                    <span><ButtonList></ButtonList></span>   
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import ButtonList from '../button/button';


   export default {
       data(){
           return{}
       },
       components: {
        ButtonList
       }
   }
</script>
<style lang="" scoped>
    .CartBox{
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        margin-left:18px;
    }
    .CartBox .col-1{
        line-height:36px;
        text-align:center;
    }
    .item-radius{
        position:relative;
        top:-20px;
        z-index:90;
        width:60px;
        height:60px;
        background:rgba(0,0,0,0.3);
        border-radius:50%;
        box-sizing:border-box;
        border:1px solid rgba(0,0,0,0.3);
    }
    .item-radius-min{
        width:50px;
        height:50px;
        border-radius:50%;
        background:rgba(255,255,255,0.6);
        margin:4px ; 
    }
    .item-radius-min>img{
          position:relative;
        width:40px;
        height:40px;
        margin:5px;
    }
    .item-one{
        width:14.2%;            
        }
    .item-two{
        width:56.2%;
        font:700 16px/2em "";
        color:rgba(255,255,255,0.4)
        }
    .item-three{
        width:28%;
        background:rgba(255,255,255,0.4)
    }
    .font{
        font:900 16px/1em "";
        color:rgba(255,255,255,0.4)
    }
    /*购物车*/ 
    .ShopList{
        position:absolute;
        top:-100px;
        width:100%;
        border:1px solid red;
        z-index:88;
        background:#eee;
         text-indent:36px;
        box-sizing:border-box;
    }
    .List-header{
        display:flex;
        background:rgba(7,17,27,.2);
        height:40px;
        font:900 18px/2em "";
    }
    .List-header>span{
    }
</style>
