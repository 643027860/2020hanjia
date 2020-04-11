<template>
  <div id="foot">
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="myfootimgs">
            <div style="display: inline-block;margin-right: 15px;margin-left: 15px;">
              <img src="http://jxhx2.yangqq.com/skin/jxhx/images/wxgzh.jpg" alt="">
              <span class="imgspan">微信公众号</span>
            </div>
            <div style="display: inline-block;">
              <img src="http://jxhx2.yangqq.com/skin/jxhx/images/wx.png" alt="">
              <span class="imgspan">我的微信</span>
            </div>
          </div>
          <div class="myfootimgs1 col-xs-12">
            <div class="col-xs-1"></div>
            <div class="col-xs-5">
              <img src="http://jxhx2.yangqq.com/skin/jxhx/images/wxgzh.jpg" alt="">
              <span class="imgspan">微信公众号</span>
            </div>
            <div class="col-xs-1"></div>
            <div class="col-xs-5">
              <img src="http://jxhx2.yangqq.com/skin/jxhx/images/wx.png" alt="">
              <span class="imgspan">我的微信</span>
            </div>
          </div>
          <div style="margin: 0 15px">
            <b class="foot-b">站点声明:</b>
            <p>1、本站个人博客模板，均为杨青青本人设计，个人可以使用，但是未经许可不得用于任何商业目的。</p>
            <p>2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：<a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=HHh9cn95b3F1cHVye1xtbTJ-c3E" target="_blank">dacesmiling@qq.com</a></p>
            <p>Copyright © <a href="http://www.yangqq.com" target="_blank">www.yangqq.com</a> All Rights Reserved. 备案号：<a href="http://www.miitbeian.gov.cn/" target="_blank">蜀ICP备11002373号-1</a></p>
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
    methods: {},
  }
</script>

<style lang="less">
  *{
    margin: 0;
  }
  .myfootimgs{
    width: 260px;
    float: left
  }
  @media screen and (max-width: 500px){
    .myfootimgs{
      display: none;
    }
    .myfootimgs1{
      display: block;
      margin-bottom: 15px;
    }
  }
  @media screen and (min-width: 500px){
    .myfootimgs{
      display: block;
    }
    .myfootimgs1{
      display: none;
    }
  }
  .footer {
    width: 100%;
    background: #373D41;
    border-top: #00C1DE 10px solid;
    padding: 30px 0 15px;
    color: #73777a;
    font-size: 14px;
    img{
      height: 100px;
      width: 100px;
      display: block;
    }
    .imgspan{
      width: 100px;
      display: inline-block;
      text-align: center;
      margin-top: 5px;
    }
    .foot-b{
      font-size: 16px;
      color: #00c1de;
      display: inline-block;
    }
    .foot-b ~ p{
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    .foot-b ~ p a{
      color: #73777a!important;
      text-decoration: none;
    }
    .foot-b ~ p a:hover{
      color: #00c1de!important;
    }
  }

</style>
