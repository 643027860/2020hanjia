<template>
  <div class="manage_geren">
    <div class="col-lg-12" style="overflow: hidden;padding: 0;">
      <div class="write" style="max-height: 684px;border-radius: 3px;padding: 20px;">
        <div class="header">
          <p class="nav">
                <span>
                  <a @click="jump('/home/manage1/geren')">返回&nbsp;<i class="el-icon-right"></i>&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            个人博文
          </p>
        </div>
        <div class="row upload">
          <div class="col-lg-12" style="overflow: hidden;padding: 0;padding: 0 16px;">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {

    },
    methods: {
      jump(url){
        this.$router.push(url)
      },

    },
  }
</script>

<style lang="less">
  .manage_geren{
    background: white;
    .write{
      background: white;
      .header{
        p.nav{
          font-size: 18px;
          line-height: 40px;
          border-bottom: 1px solid #eee;
          color: #484848;
          font-weight: normal;
          position: relative;
          margin-bottom: 10px;
          span{
            float: right;
            font-size: 16px;
            color: #666;
            a{
              color: #484848;
              cursor: pointer;
              text-decoration: none;
            }
            a:hover{
              color: #00C1DE;
            }
          }
        }
        p.nav:after{
          position: absolute;
          width: 80px;
          height: 2px;
          content: "";
          background: #000;
          left: 0;
          bottom: 0;
        }
      }
      .upload{

      }
    }
  }
</style>
