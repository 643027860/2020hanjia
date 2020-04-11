<template>
  <div class="mymanage">
    <div class="container">
      <div class="row" style="margin-bottom: 20px">
        <div class="col-lg-2 col-md-2 smnone" style="padding-right: 0">
          <div class="left" style="min-height: 684px;background-color: white;border-radius: 3px;">
            <h3>博文管理</h3>
            <ul>
              <el-row class="tac">
                <el-col :span="24">
                  <el-menu
                    :default-active=choiceId
                    class="el-menu-vertical-demo"
                    >
                    <el-menu-item index="1" @click="jump(1)">
                      <i class="el-icon-menu"></i>
                      <span slot="title">首页</span>
                    </el-menu-item>
                    <el-menu-item index="2" @click="jump(2)">
                      <i class="el-icon-menu"></i>
                      <span slot="title">个人博客</span>
                    </el-menu-item>
                    <el-menu-item index="3" @click="jump(3)">
                      <i class="el-icon-document"></i>
                      <span slot="title">设计心得</span>
                    </el-menu-item>
                    <el-menu-item index="4" @click="jump(4)">
                      <i class="el-icon-user"></i>
                      <span slot="title">关于我</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>
            </ul>
          </div>
        </div>
        <div class="col-lg-10 col-md-10" style="min-height: 684px;">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'store'
  export default {
    data () {
      return {
        choiceId:'1',
      }
    },
    mounted () {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      /*修改个性签名*/
      gaigeixng(){
        this.gaixing = false
      },
      /*跳转路由*/
      jump(id){
        if(id == 1){
          this.$router.push('/home/manage1/main')
        }
        if(id == 2){
          this.$router.push('/home/manage1/geren')
        }
        if(id == 3){
          this.$router.push('/home/manage1/xinde')
        }
        if(id == 4){
          this.$router.push('/home/manage1/aboutme')
        }
      },
    },
  }
</script>

<style lang="less">
  @media screen and(max-width: 991px){
    .smnone{
      display: none;
    }
  }
  .mymanage {
    .left {
      h3 {
        color: rgb(144, 144, 144);
        height: 60px;
        font-size: 20px;
        line-height: 50px;
        margin: 0;
        padding: 10px 0px 20px 10px;
        background-color: rgb(250, 250, 250);
        letter-spacing: 3px;
      }

      span {
        font-size: 16px !important;
      }

      li {
        font-size: 14px !important;
      }
    }
  }
</style>
