<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <header-nav></header-nav>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
  import HeaderNav from './components/header-nav'
  export default {




    components:{
      HeaderNav
    }
  }

</script>
<style lang="less">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  div::-webkit-scrollbar {/*滚动条整体样式*/

    width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/

    height: 8px;

  }

 div::-webkit-scrollbar-thumb {/*滚动条里面小方块*/

    border-radius: 4px;

    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.9);

    background: #c4c4c4;

  }

  div::-webkit-scrollbar-track {/*滚动条里面轨道*/

    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);

    border-radius: 4px;

    background: #ddd;
   }
</style>
