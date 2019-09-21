<template>
    <div class="toolBar">
      <div class="icons">
        <div class="icon icon1">
        </div>
        <div class="icon icon2">
        </div>
        <div class="icon icon3">
        </div>
        <div class="icon icon4">
        </div>
        <div class="icon icon5">
        </div>
        <div class="icon icon6">
        </div>
        <div class="icon icon7">
        </div>
        <div class="icon icon8">
        </div>
        <div class="icon icon9">
        </div>
        <div class="icon icon10">
        </div>
        <div class="icon icon11">
        </div>
        <div class="icon icon12">
        </div>
        <div class="icon icon13">
        </div>
        <div class="icon icon14">
        </div>
        <div class="icon icon15">
        </div>
        <div class="icon icon16">
        </div>
        <div class="icon icon17">
        </div>
        <div class="icon icon18">
        </div>
        <div class="icon icon19">
        </div>
        <div class="icon icon20">
        </div>
      </div>
      <div class="form">
        <span class="label">日期查询：</span>
        <el-date-picker
          v-model="value"
          type="daterange"
          size="small"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button size="mini" type="info" style="border: 1px solid #fff;margin-left: 20px">确定</el-button>
        <span class="label select">显示模式：</span>
        <el-select v-model="selectValue" size="small">
          <el-option key="1" value="1" label="实线"/>
          <el-option key="2" value="2" label="虚线"/>
        </el-select>
      </div>


    </div>
</template>

<script>
    export default {
        name: "toolBar",
      data(){
          return{
            value:'',
            selectValue:'1'
          }
      }
    }
</script>

<style scoped lang="less">
 .toolBar{
   height: 90px;
   text-align: left;
   background-color: #959595;
   .icons{
     text-align: left;
     padding-top: 3px;
     padding-left: 8px;
     .icon{
       margin-right: 3px;
       border-radius: 4px;
       cursor: pointer;
       width: 38px;
       display: inline-block;
       height: 38px;
       &:hover{
         box-shadow: 0px 0px 2px 3px #f7c339;
       }
       &.icon1{
         background-image:url("../../../assets/img/toolIcons/01-1.png");
         background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/01-2.png");
         }

       }
       &.icon2{
         background-image:url("../../../assets/img/toolIcons/02-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/02-2.png");
         }
       }
       &.icon3{
         background-image:url("../../../assets/img/toolIcons/03-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/03-2.png");
         }
       }
       &.icon4{
         background-image:url("../../../assets/img/toolIcons/04-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/04-2.png");
         }
       }
       &.icon5{
         background-image:url("../../../assets/img/toolIcons/05-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/05-2.png");
         }
       }
       &.icon6{
         background-image:url("../../../assets/img/toolIcons/06-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/06-2.png");
         }
       }
       &.icon7{
         background-image:url("../../../assets/img/toolIcons/07-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/07-2.png");
         }
       }
       &.icon8{
         background-image:url("../../../assets/img/toolIcons/08-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/08-2.png");
         }
       }
       &.icon9{
         background-image:url("../../../assets/img/toolIcons/09-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/09-2.png");
         }
       }
       &.icon10{
         background-image:url("../../../assets/img/toolIcons/10-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/10-2.png");
         }
       }
       &.icon11{
         background-image:url("../../../assets/img/toolIcons/11-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/11-2.png");
         }
       }
       &.icon12{
         background-image:url("../../../assets/img/toolIcons/12-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/12-2.png");
         }
       }
       &.icon13{
         background-image:url("../../../assets/img/toolIcons/13-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/13-2.png");
         }
       }
       &.icon14{
         background-image:url("../../../assets/img/toolIcons/14-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/14-2.png");
         }
       }
       &.icon15{
         background-image:url("../../../assets/img/toolIcons/15-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/15-2.png");
         }
       }
       &.icon16{
         background-image:url("../../../assets/img/toolIcons/16-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/16-2.png");
         }
       }
       &.icon17{
         background-image:url("../../../assets/img/toolIcons/17-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/17-2.png");
         }
       }
       &.icon18{
         background-image:url("../../../assets/img/toolIcons/18-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/18-2.png");
         }
       }
       &.icon19{
         background-image:url("../../../assets/img/toolIcons/19-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/19-2.png");
         }
       }
       &.icon20{
         background-image:url("../../../assets/img/toolIcons/20-1.png");
        background-position: center center;background-repeat: no-repeat;
         &:hover,&.active{
           background-image:url("../../../assets/img/toolIcons/20-2.png");
         }
       }
     }
   }
   .form{
     padding-left: 8px;
     padding-top: 4px;
     .label{
       font-size: 18px;
       line-height: 22px;
       color: #010101;
       opacity: .7;
       &.select{
         margin-left: 30px;
       }
     }
   }
 }
</style>
