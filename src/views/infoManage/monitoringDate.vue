<template>
<div class="monitoringDate">
  <tool-bar/>
  <table-data/>
  <bottom-data/>
  <div class="bottomBar">
    <div class="tabs">
      <div :class="['tab',selectIndex===1&&'active']" @click="handleChangeTab(1)">Z方向测点信息</div>
      <div :class="['tab',selectIndex===2&&'active']" @click="handleChangeTab(2)">调查报告Sheet</div>
      <div :class="['tab',selectIndex===3&&'active']" @click="handleChangeTab(3)">外观变形测点TP1</div>
      <div :class="['tab',selectIndex===4&&'active']" @click="handleChangeTab(4)">外观变形测点TP2</div>
      <div :class="['tab',selectIndex===5&&'active']" @click="handleChangeTab(5)">外观变形测点TP3</div>
      <div :class="['tab',selectIndex===6&&'active']" @click="handleChangeTab(6)">纵向测点信息</div>
      <div :class="['tab',selectIndex===7&&'active']" @click="handleChangeTab(7)">调查样本监测</div>
      <div :class="['tab',selectIndex===8&&'active']" @click="handleChangeTab(8)">调度室监控录像</div>
      <div :class="['tab',selectIndex===9&&'active']" @click="handleChangeTab(9)">VR虚拟演示</div>
    </div>
  </div>
  <div class="info">
    <p>系统开始采集 TP1连接成功...</p>
    <p>测试文字</p>

  </div>
  <footer-doc/>
</div>
</template>

<script>
  import ToolBar from './components/tool-bar'
  import TableData from './components/table-data'
  import BottomData from './components/bottom-data'
  import FooterDoc from '../../components/footer-doc'
    export default {
        name: "monitoringDate",
        data(){
            return{
                selectIndex:1
            }
        },
      components:{
        ToolBar,
        TableData,
        BottomData,
        FooterDoc
      },
        methods:{
            handleChangeTab(selectIndex){
                this.selectIndex=selectIndex
            }
        }
    }
</script>

<style scoped lang="less">
  .monitoringDate{
    padding-top: 3px;
    padding-bottom: 22px;
    &:after{
      clear: both;
    }
  }
  .bottomBar{
    text-align: left;
    background-color: #c1c1c1;
    position: relative;
    z-index: 2;
    .tabs{
      text-align: left;
      border: 1px solid #8e8e8e;
      border-right: none;
      border-radius: 3px;
      display: inline-block;
      .tab{
        width: 131px;
        height: 29px;
        display: inline-block;
        text-align: center;
        line-height: 29px;
        border-right: 1px solid #999;
        border-top-right-radius: 10px;
        color: #696969;
        cursor: pointer;
        &:hover,&.active{
          background-color: #96979a;
          color: #fff;
        }
      }
    }
  }
  .info{
    height: 40px;
    background-color: #cdcdcd;
    font-size: 12px;
    color: #787878;
    text-align: left;
    line-height: 20px;
    padding-left: 6px;
  }



</style>
