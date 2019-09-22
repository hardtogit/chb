<template>
    <div>
      <div class="topBar">
        <span class="leftText">SCUDsmis V2.0</span>
        <div class="icons">
          <div class="icon one"></div>
          <div class="icon two"></div>
          <div class="icon three"></div>
        </div>
      </div>
    <div class="header">
      <div class="logo">
        <img src="../assets/img/LOGO-s.png" alt=""><div class="text">水库坝群安全风险智能管控平台</div>
      </div>
        <div class="nav">
          <router-link to="/safeControl" class="router" active-class="active">
            <div class="icon safeControl">
              <div class="text">
                安全管控
              </div>
            </div>
          </router-link>
          <router-link to="/infoManage" class="router" active-class=" active">
              <div class="icon infoManage">
                <div class="text">
                  信息管理
                </div>
              </div>
          </router-link>
          <router-link to="/intAnalysis" class="router" active-class=" active">
            <div class="icon intAnalysis">
              <div class="text">
                整体分析
              </div>
            </div>
          </router-link>
          <router-link to="/safeAnalysis" class="router" active-class=" active">
            <div class="icon safeAnalysis">
              <div class="text">
                安全分析
              </div>
            </div>
          </router-link>
          <router-link to="/documentManage" class="router" active-class=" active">
            <div class="icon documentManage">
              <div class="text">
                文档管理
              </div>
            </div>
          </router-link>
          <router-link to="/systemSetting" class="router" active-class=" active">
            <div class="icon systemSetting">
              <div class="text">
                系统设置
              </div>
            </div>
          </router-link>
        </div>
      <div class="user">
        <img src="../assets/img/user.png" alt="">
        <p>admin</p>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "header-nav"
    }
</script>

<style scoped lang="less">
  .topBar{
    background-color: #adadad;
    height: 26px;
    width: 100%;
    z-index: 100;
    position: fixed;
    top:0;
    left: 0;
    text-align: left;
    .leftText{
      padding-left: 10px;
      color: #fff;
      line-height: 26px;
    }
    .icons{
      display: inline-block;
      float: right;
      padding-right: 10px;
      .icon{
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-top: 3px;
        cursor: pointer;
        margin-left: 6px;
        &.one{
          background-image: url("../assets/img/one.png");
        }
        &.two{
          background-image: url("../assets/img/two.png");
        }
        &.three{
          background-image: url("../assets/img/three.png");
        }
        &.one:hover{
          background-image: url("../assets/img/oneH.png");
        }
        &.two:hover{
          background-image: url("../assets/img/twoH.png");
        }
        &.three:hover{
          background-image: url("../assets/img/threeH.png");
        }
      }
    }
  }
    .header{
      height: 108px;
      width: 100%;
      z-index: 100;
      position: fixed;
      top:26px;
      left: 0;
      border-top: 5px solid #31343f;
      background-color: #3f496c;
      .logo{
        float: left;
        img{
          width: 140px;
          display: block;
          float: left;
        }
        .text{
          color: #fff;
          float: left;
          font-size: 24px;
          height: 100px;
          line-height: 100px;
        }
      }
      .nav{
        height: 100%;
        display: inline-block;
        .router{
            width: 166px;
            height: 100%;
            border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          margin-right: 1px;
            display: inline-block;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            border-top:5px solid #f69900;
            background-color: #576a98;
            text-decoration: none!important;
            .icon{
              height: 98px;
              background-repeat: no-repeat;
              background-position: center 0;
              color:#fff;
              padding-top: 72px;
              &.safeControl{
                background-image: url("../assets/img/safeControl.png");
              }
              &.infoManage{
                background-image: url("../assets/img/infoManage.png");
              }
              &.intAnalysis{
                background-image: url("../assets/img/intAnalysis.png");
              }
              &.safeAnalysis{
                background-image: url("../assets/img/safeAnalysis.png");
              }
              &.documentManage{
                background-image: url("../assets/img/documentManage.png");
              }
              &.systemSetting{
                background-image: url("../assets/img/systemSetting.png");
              }
            }
          &.active{
            background: linear-gradient(#fecb41, #eeba31); /* 标准的语法 */
            .icon{
              color: #666;
              &.safeControl{
                background-image: url("../assets/img/safeControlH.png");
              }
              &.infoManage{
                background-image: url("../assets/img/infoManageH.png");
              }
              &.intAnalysis{
                background-image: url("../assets/img/intAnalysisH.png");
              }
              &.safeAnalysis{
                background-image: url("../assets/img/safeAnalysisH.png");
              }
              &.documentManage{
                background-image: url("../assets/img/documentManageH.png");
              }
              &.systemSetting{
                background-image: url("../assets/img/systemSettingH.png");
              }
            }
          }
        }
      }
      .user{
        float: right;
        padding: 14px;
        img{
          width: 56px;
          height: 56px;
        }
        p{
          color: #fff;
          font-size: 12px;
        }
      }
    }
  @media screen  and (max-width: 1600px) {
    .header{
      .logo{
        .text{
          display: none;
        }
      }
    }
  }
</style>
