<!--加减按钮--> 
<template>
  <div class="but">
    <button>-</button>
    <input type="text" :value="num">
    <button>+</button>
  </div>
</template>
<script>
   export default {
       data () {
          return { 
              num:0
       }
    }
}
</script>

<style scoped>
    .but{
        display:flex;
        width:100px;
        border:1px solid blue;
    }
    .but input{
       width:25px;
       text-align:center;
    }
    .but>button{
        width:40px;
        height:40px;
        border-radius:50%;
    }
</style>
