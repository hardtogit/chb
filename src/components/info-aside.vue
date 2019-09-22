<template>
    <div class="infoAside">
      <div class="group">
       <div class="menu">信息管控 <div :class="['arrow',visibleOne&&'active']" @click="handleClickArrow('visibleOne')"></div></div>
        <div class="items" v-show="visibleOne">
          <router-link to="/infoManage/monitoringDate" class="item active">监测数据</router-link>
          <router-link to="/infoManage/tourDate" class="item">巡视数据</router-link>
          <router-link to="/infoManage/instrumentDate" class="item">仪器信息</router-link>
        </div>
      </div>
      <div class="group tree">
        <div class="menu">仪器导航 <div :class="['arrow',visibleTwo&&'active']" @click="handleClickArrow('visibleTwo')"></div></div>
        <div class="items tree" v-show="visibleTwo">
          <div id="treeInner">

          </div>
          <!--<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"/>-->
        </div>
      </div>
    </div>
</template>

<script>
  var echarts = require('echarts');
    export default {
        name: "info-aside",
        data() {
          return {
            visibleOne:true,
            visibleTwo:true

          }
        },
      mounted(){
          console.log(document.getElementById('treeInner'))
        var myChart = echarts.init(document.getElementById('treeInner'));
       const  option = {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
          },
          series: [
            {
              type: 'tree',

              data: [{name:'合适',children:[{name:'测试'},{name:'测试'},{name:'测试'},{name:'测试'},{name:'测试'},{name:'测试'}]}],

              top: '1%',
              left: '12%',
              bottom: '1%',
              right: '20%',

              symbolSize: 7,

              label: {
                normal: {
                  position: 'left',
                  verticalAlign: 'middle',
                  align: 'right',
                  fontSize: 9
                }
              },

              leaves: {
                label: {
                  normal: {
                    position: 'right',
                    verticalAlign: 'middle',
                    align: 'left'
                  }
                }
              },

              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750
            }
          ]
        }
        myChart.setOption(option)
      },
        methods: {
          handleClickArrow(type){
            this[type]=!this[type]
          }
        }
    }
</script>

<style scoped lang="less">
 .infoAside{
   position: fixed;
   z-index: 99;
   left: 0;
   top:0;
   height: 100%;
   width: 259px;
   padding: 134px 3px 26px 1px;
   .group{
     margin-top: 3px;
     &.tree{
       height: calc(100% - 200px);
     }
      .menu{
        height: 45px;
        line-height: 45px;
        text-align: left;
        padding-left: 15px;
        color: #fff;
        font-size: 22px;
        background-color:#606471;
        border-top-right-radius: 15px;
        .arrow{
          width: 16px;
          cursor: pointer;
          height: 16px;
          float: right;
          margin: 15px 15px 0 0;
          background-image: url("../assets/img/icon-arrow-down.png");
          &.active{
            background-image: url("../assets/img/icon-arrow-up.png");
          }
        }
      }
     .items{
       border: 1px solid #999;
       padding-top: 2px;
       .item{
         display: block;
         text-decoration: none;
         height: 49px;
         line-height: 49px;
         text-align: center;
         font-size: 20px;
         color: #333;
         background-color: #a0a0a0;
         margin-top: 1px;
         cursor: pointer;
         &.active,&:hover{
           background-color: #ffcc6b;
         }
       }
       &.tree{
          height: calc(100% - 46px);
         overflow: auto;
         #treeInner{
           width: 120%;
           height: 120%;
         }
       }
     }
   }
 }
</style>
