<template>
    <div class="my-nav">
      <div>
        <nav class="navbar navbar-inverse">
          <div class="container navbar-inverse">
            <div style="float:left;">
              <p style="font-size: 22px;color: white;line-height: 50px;height: 50px;margin: 0;margin-right: 10%;width: 250px;letter-spacing: 5px;">谢宝达博客</p>
            </div>
            <div style="float: right">
              <div class="navbar-header" @click="()=>jump('/home/mainpage')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">网站首页</a>
              </div>
              <div class="navbar-header" @click="()=>jump('/home/geren')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">个人博客</a>
              </div>
              <div class="navbar-header" @click="()=>jump('/home/xinde')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">设计心得</a>
              </div>
              <div class="navbar-header" @click="()=>jump('/home/aboutme')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">关于我</a>
              </div>
              <div class="navbar-header" @click="()=>jump('/home/shijianzhou')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">时间轴</a>
              </div>
              <div class="navbar-header" @click="()=>jump('/home/liuyan')">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="javasprict:;">留言</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        navs: [],
      }
    },
    mounted () {
      this.navs = [
        {
          id:'mainpage',
          name:'网站主页'
        },
        {
          id:'geren',
          name:'个人博客'
        },
        {
          id:'xinde',
          name:'设计心得'
        },
        {
          id:'aboutme',
          name:'关于我'
        },
        {
          id:'shijianzhou',
          name:'时间轴'
        },
        {
          id:'liuyan',
          name:'留言'
        },
      ]
    },
    methods: {
      jump(target){
        this.$router.push(target)
      }
    },
  }
</script>

<style lang="less">
  .my-nav{
    .navbar-brand{
      font-size: 15px!important;
    }
  }
</style>
