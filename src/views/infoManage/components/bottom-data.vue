<template>
    <div class="bottomData">
      <div class="left">
        <div class="left">
          <div class="inner">
            测<br>点<br>信<br>息
          </div>
        </div>
        <div class="right">
          <img src="../../../assets/img/safeAnalysis.png" alt="">
        </div>
      </div>
      <div class="right">
        <div class="left">
          <div class="inner">
            测<br>点<br>信<br>息
          </div>
        </div>
        <div class="right">
          <div class="tabs">
            <div class="tab">x方向读数</div>
            <div class="tab">Y方向读数</div>
            <div class="tab">x方向累计位移</div>
            <div class="tab">y方向累计位移</div>
          </div>
          <div id="course">

          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "bottom-data",
      mounted(){
      var myChart = echarts.init(document.getElementById('course'));
       const option = {
          title: {
            text: '过程线'
          },
          tooltip: {
            trigger: 'axis'
          },
          // legend: {
          //   data:['Step Start', 'Step Middle', 'Step End']
          // },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '40px',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'Step Start',
              type:'line',
              step: 'start',
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'Step Middle',
              type:'line',
              step: 'middle',
              data:[220, 282, 201, 234, 290, 430, 410]
            },
            {
              name:'Step End',
              type:'line',
              step: 'end',
              data:[450, 432, 401, 454, 590, 530, 510]
            }
          ]
        };
        myChart.setOption(option)
      }
    }
</script>

<style scoped lang="less">
    .bottomData{
      height: 283px;
      margin-top: 2px;
      &>.left{
        width: 30%;
        height: 280px;
        float: left;
        border: 1px solid #9d9ea0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        .left{
          width: 47px;
          height: 280px;
          display: table;
          color: #fff;
          float: left;
          background-color: #777a83;
          border-left:5px solid #9d9ea0;
          .inner{
            display: table-cell;
            vertical-align: middle;
          }
        }
        .right{
          width: calc(100% - 47px);
          float: left;
          padding: 10px;
          img{
            width: 100%;
            height: 260px;
            display: block;
          }
        }
      }
      &>.right{
        width: 70%;
        padding-left: 3px;
        float: left;
        height: 280px;
        border: 1px solid #9d9ea0;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        .left{
          width: 47px;
          height: 280px;
          display: table;
          color: #fff;
          float: left;
          background-color: #777a83;
          border-left:5px solid #9d9ea0;
          .inner{
            display: table-cell;
            vertical-align: middle;
          }
        }
        .right{
          width: calc(100% - 47px);
          float: left;
          height: 280px;
          text-align: left;
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
              border-right: 1px solid #8e8e8e;
              color: #696969;
              cursor: pointer;
              &:hover,&.active{
                background-color: #ffc262;
              }
            }
          }
          #course{
            width: 100%;
            height: 100%;
          }

        }
      }
    }
</style>
