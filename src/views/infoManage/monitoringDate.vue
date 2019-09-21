<template>
<div class="monitoringDate">
  <tool-bar/>
  <table-data/>
  <bottom-data/>
  <div class="bottomBar">
    <div class="tabs">
      <div class="tab">Z方向测点信息</div>
      <div class="tab">调查报告Sheet</div>
      <div class="tab">外观变形测点TP1</div>
      <div class="tab">外观变形测点TP2</div>
      <div class="tab">外观变形测点TP3</div>
      <div class="tab">纵向测点信息</div>
      <div class="tab">调查样本监测</div>
      <div class="tab">调度室监控录像</div>
      <div class="tab">VR虚拟演示</div>
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
      components:{
        ToolBar,
        TableData,
        BottomData,
        FooterDoc
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
      border-radius: 3px;
      display: inline-block;
      .tab{
        width: 131px;
        height: 29px;
        display: inline-block;
        text-align: center;
        line-height: 29px;
        border-right: 1px solid #b8b9bb;
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
