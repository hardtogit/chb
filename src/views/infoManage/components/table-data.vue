<template>
    <div class="tableData">
      <div class="left">
        <div class="inner">
          表<br>格
        </div>
      </div>
      <div class="right">
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            label="测试">
          </el-table-column>
          <el-table-column
            prop="name"
            label="测试"
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="测试">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "table-data",
        data(){
          return{
            tableData:[{date:'测试',name:'测试',address:'测试'},{date:'测试',name:'测试',address:'测试'},{date:'测试',name:'测试',address:'测试'}]
          }
        }
    }
</script>

<style scoped lang="less">
  .tableData{
    border: 1px solid #9d9ea0;
    height: 442px;
    margin-top: 2px;
    border-radius: 5px;
    .left{
      width: 47px;
      height: 440px;
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
    }
  }

</style>
