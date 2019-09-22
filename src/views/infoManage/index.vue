<template>
<div>
  <info-aside></info-aside>
  <div class="container">
    <router-view class="content"/>
  </div>

</div>
</template>

<script>
  import InfoAside from '../../components/info-aside'
    export default {
        name: "infoManage",
      components:{
        InfoAside
      }
    }
</script>

<style scoped lang="less">
  .container{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    padding: 134px 0 26px 259px;
    .content{
      width: 100%;
      /*height: 100%;*/
    }
  }
</style>
