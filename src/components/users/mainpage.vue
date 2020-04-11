<template>
    <div id="mainpage">
      <div class="container">
        <!--第一栏-->
        <div class="row" style="height: 260px;margin-bottom: 20px;">
          <!--轮播图-->
          <div style="padding-right: 0!important;border-radius: 2px;" class="col-lg-6 col-md-6 col-sm-8 col-xs-8">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval='3000' v-if="imgs">
              <!--圆点-->
              <ol class="carousel-indicators">
                <li style="margin: 0px 10px -20px;" data-target="#carousel-example-generic" :data-slide-to="index" v-for="(img,index) in imgs" :key="index" :class="index==0?'active':' '"/>
              </ol>
              <!--图片-->
              <div class="carousel-inner" role="listbox">
                <div v-for="(img,index) in imgs" :key="index" :class="index==0?'item active':'item'">
                  <img :src=img style="height: 260px;width: 100%">
                  <div class="carousel-caption">
                    <!--文字-->
                  </div>
                </div>
              </div>
              <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              </a>
              <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              </a>
            </div>
          </div>
          <!--两小图-->
          <div style="border-radius: 2px;" class="col-lg-3 col-md-3 col-sm-4 col-xs-4 nopadding">
            <div class="smallimg1" style="width:100%;height: 122px;margin-bottom: 16px;border-radius: 1%">
              <a href="http://jxhx2.yangqq.com/notice/27.html">
                <img src="http://jxhx2.yangqq.com/skin/jxhx/images/h1.jpg" alt="..." style="height: 100%;width: 100%;border-radius: 1%">
                <span>为什么说10月24日是程序员的节日？</span>
              </a>
            </div>
            <div class="smallimg1" style="width:100%;height: 122px;">
              <a href="http://jxhx2.yangqq.com/notice/26.html">
                <img src="http://jxhx2.yangqq.com/skin/jxhx/images/h2.jpg" alt="..." style="height: 100%;width: 100%;border-radius: 1%">
                <span>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</span>
              </a>
            </div>
          </div>
          <!--个人简历-->
          <div class="col-lg-3 col-md-3 col-sm-0 col-xs-0" style="padding-right: 0!important;">
            <div class="my-card">
              <h2>我的名片</h2>
              <p>网名：{{me.name}}</p>
              <p>职业：{{me.job}}</p>
              <p>现居：{{me.where}}</p>
              <p>Email：{{me.Email}}</p>
              <div class="fourimgs">
                <ul>
                  <li>
                    <a href='http://localhost:8080/#/home/mainpage'>
                      <span class="glyphicon glyphicon-home"></span>
                    </a>
                  </li>
                  <li>
                    <a href='http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=643027860@qq.com'>
                      <span class="glyphicon glyphicon-home"></span>
                    </a>
                  </li>
                  <li>
                    <a href='https://shang.qq.com/open_webaio.html?sigt=2feed6ca9fa2b16f3c236c93b55e20b36b3ff1826b1365ba68dd3d0e0608d1d0d7e8e5957655e315ba27b9d9c46dee3e&sigu=f55a79bd40bafefa81ab136cc43f2a1d9ee8c6aac3147ebbf61fd9ed76753abcc7a7cf4618f467b3&tuin=476847113'>
                      <span class="glyphicon glyphicon-home"></span>
                    </a>
                  </li>
                  <li class="weixinli">
                    <div class="weixindiv">
                      <img src="../../assets/imgs/my-weicaht.png" alt="微信">
                    </div>
                    <a href='http://localhost:8080/#/home/mainpage'>
                      <span class="glyphicon glyphicon-home"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--第二栏-->
        <div class="row twolan" style="height: 310px;margin-bottom: 20px;">
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 nopadding" style="height: 100%;border-radius: .5%;">
            <div style="background-color: white;height: 100%;border-radius: 3px;padding: 20px;">
              <div class="titles">
                <ul>
                  <li id="title1" @click="()=>clicktitle('title1')" class="titleactive">个人博客</li>
                  <li id="title2" @click="()=>clicktitle('title2')">设计心得</li>
                </ul>
              </div>
              <div class="contents row" v-show="twoContents">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                  <div class="smallimg1" style="width:100%;height: 100px;margin-top: 15px;border-radius: 1%" v-for="(img,index) in twoContents.imgs" :key="index">
                    <a :href=img.link>
                      <img :src=img.img alt="..." style="height: 100%;width: 100%;border-radius: 1%">
                      <span>{{img.content}}</span>
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8" style="height: 222px;margin-top: 15px;overflow: hidden;padding-left: 0!important;">
                  <div class="twolis" style="height: 100%;width: 100%;border-radius: 3px;">
                      <ul>
                        <li v-for="(li,index) in twoContents.titles" :key="index" :class="index==0?'hoverli':''" @mouseover="()=>twolihover(index)">
                          <i>{{index+1}}</i>
                          <a href="#">{{li.title}}</a>
                          <p>{{li.content}}</p>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 smnone" style="height: 100%;background-color: rgb(233,234,237);padding-right: 0!important;">
            <div style="background-color: white;height: 100%;border-radius: 3px;overflow: hidden;">
              <div class="tworight" style="overflow: hidden;margin: 20px;margin-top:0px;height: 270px;">
                <h2 class="htitle">最近更新</h2>
                <ul>
                  <li v-for="(li,index) in newput" :key="index">
                    <a :href=li.link>{{li.title}}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--第三栏-->
        <div class="row threelan">
          <div class="col-lg-9 nopadding" style="background-color: rgb(233,234,237);">
            <div style="height: 670px;background-color: white;width: 100%;border-radius: 3px;">
              <div style="padding: 20px;">
                <div class="htitle">
                  <span>特别推荐</span>
                </div>
                <div class="threelis">
                  <ul>
                    <li v-for="(a,b) in 6" :key="b">
                      <i><a href="http://jxhx2.yangqq.com/blog/7.html"><img src="http://jxhx2.yangqq.com/skin/jxhx/images/b02.jpg" alt=""></a></i>
                      <b>安静地做一个爱设计的女子</b>
                      <span>自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片</span>
                      <a href="http://jxhx2.yangqq.com/blog/7.html" class="readmore">文章阅读</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--第四栏-->
        <div class="row fourlan">
          <div class="col-lg-9 nopadding" style="background-color: rgb(233,234,237);margin-top: 20px;">
            <div style="background-color: white;width: 100%;border-radius: 3px;">
              <div style="padding:20px 20px 10px;margin-bottom: 20px;">
                <div class="htitle">
                  <span>最新博文</span>
                </div>
                <ul>
                  <li v-for="(item,index) in 20" :key="index">
                    <h3 class="fourh3"><b>【顶】</b><a href="/xd/23.html">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a></h3>
                    <span class="fourimg">
                      <a href="http://jxhx2.yangqq.com/xd/23.html" title="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?"><img src="http://www.yangqq.com/d/file/jstt/web/2018-11-03/e3d39beb4e61d8545d6fbda2dc7a4b71.png" alt="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?"></a>
                    </span>
                    <p class="fourcontent">就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深</p>
                    <p class="fourinfo">
                      <i>
                        <a href="http://jxhx2.yangqq.com/about/">
                          <img src='http://jxhx2.yangqq.com/skin/jxhx/images/avatar.jpg' alt="">
                        </a>
                      </i>
                      <span></span>
                      <span>2018-11-08</span>
                      <span>
                        【
                        <a href="http://jxhx2.yangqq.com/xd/23.html">设计心得</a>
                        】
                      </span>
                      <a href="http://jxhx2.yangqq.com/web/html/14.html" class="more">阅读更多</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        imgs: [],
        me: {},
        twoContents:'',
        newput:[],
        twohoverli:0,
      }
    },
    mounted () {
      this.reqFristContent()
      this.reqTwoContent()
      this.reqNewPut()
    },
    methods: {
      //获取第一栏信息
      reqFristContent(){
        this.imgs = [
          'http://jxhx2.yangqq.com/skin/jxhx/images/1.jpg',
          'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
          'http://jxhx2.yangqq.com/skin/jxhx/images/3.jpg',
          'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
        ]
        this.me = {
          name: '小孬种',
          job: '学生',
          where: '广东省-茂名市',
          Email: '643027860@qq.com',
        }
      },
      //获取第二栏信息
      reqTwoContent(){
        this.twoContents = {
          imgs:[
            {
              'img':'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
              'content':'个人网站做好了，百度不收录怎么办？来，看看他们这么做的',
              'link':'http://jxhx2.yangqq.com/blog/4.html'
            },
            {
              'img':'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
              'content':'个人博客，属于我的小世界！',
              'link':'http://jxhx2.yangqq.com/blog/3.html'
            },
          ],
          titles:[
            {
              'title':'安静地做一个爱设计的女子',
              'content':'自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片或者布局，惊艳的js或者css3效果的时候，就有了做模板的冲动。'
            },
            {
              'title':'电话以外的宁静',
              'content':'电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活....',
            },
            {
              'title':'遇见一个未知的你',
              'content':'听着那熟悉的歌曲看着那一张张可爱的图片.-读着我们共同欣赏的诗……也许我们曾经相遇,看着你远去的背影 ,沿着你来的方向 ,回忆时间穿梭于幸福的点点滴滴....',
            },
            {
              'title':'个人网站做好了，百度不收录怎么办？来，看看他们怎么做的',
              'content':'不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了',
            },
            {
              'title':'个人博客，属于我的小世界！',
              'content':'个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。',
            },
          ]
        }
      },
      //第二栏选取标题
      clicktitle(id){
        $('.titleactive').removeClass('titleactive')
        $('#'+id).addClass('titleactive')
        if(id == 'title1'){
          this.twoContents = []
          this.twoContents = {
            imgs:[
              {
                'img':'http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg',
                'content':'个人网站做好了，百度不收录怎么办？来，看看他们这么做的',
                'link':'http://jxhx2.yangqq.com/blog/4.html'
              },
              {
                'img':'http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg',
                'content':'个人博客，属于我的小世界！',
                'link':'http://jxhx2.yangqq.com/blog/3.html'
              },
            ],
            titles:[
              {
                'title':'安静地做一个爱设计的女子',
                'content':'自从入了这行，很多人跟我说可以做网络教程，我也有考虑，但最终没有实现，因为我觉得在这个教程泛滥的时代，直接做一套免费的原创个人博客模板更为实在。每当看到自己喜欢的配色图片或者布局，惊艳的js或者css3效果的时候，就有了做模板的冲动。'
              },
              {
                'title':'电话以外的宁静',
                'content':'电话很久没有响过了，我的QQ也很久没有在线了，消失了很多天，刚刚结识的朋友因为我身上又起了红疹，每天都发来消息询问我的情况，我做到了这么多天来的沉默，我相信，没有网络，我还是可以继续我自己的生活....',
              },
              {
                'title':'遇见一个未知的你',
                'content':'听着那熟悉的歌曲看着那一张张可爱的图片.-读着我们共同欣赏的诗……也许我们曾经相遇,看着你远去的背影 ,沿着你来的方向 ,回忆时间穿梭于幸福的点点滴滴....',
              },
              {
                'title':'个人网站做好了，百度不收录怎么办？来，看看他们怎么做的',
                'content':'不管你是学前端的还是后端的，作为一个程序员，做一个自己的博客，那是必然的。咱们的圈子就这么大，想让更多的人了解你，看看你的技术多牛逼，扔一个博客地址就行了',
              },
              {
                'title':'个人博客，属于我的小世界！',
                'content':'个人博客，用来做什么？我刚开始就把它当做一个我吐槽心情的地方，也就相当于一个网络记事本，写上一些关于自己生活工作中的小情小事，也会放上一些照片，音乐。每天工作回家后就能访问自己的网站，一边听着音乐，一边写写文章。',
              },
            ]
          }
        }else if(id == 'title2'){
          this.twoContents = []
          this.twoContents = {
            imgs:[
              {
                'img':'http://www.yangqq.com/d/file/news/life/2018-06-29/75842f4d1e18d692a66c38eb172a40ab.jpg',
                'content':'作为一个设计师,如果遭到质疑你是否能恪守自己的原则?',
                'link':'http://jxhx2.yangqq.com/blog/4.html'
              },
              {
                'img':'http://www.yangqq.com/d/file/blogs/2018-08-22/28e3bbca2ae0205f641a9072ecb7c100.jpg',
                'content':'网易博客关闭，何不从此开始潇洒行走江湖！',
                'link':'http://jxhx2.yangqq.com/xd/2.html'
              },
            ],
            titles:[
              {
                'title':'即便是坑，我也想要拉你入伙！',
                'content':'对于刚毕业的学生来说，想学习建网站，掌握一技之长，最简单的入门无非就是学会html和css，先前发表过一篇文章《如果要学习web前端开发，需要学习什么？》，如果你还不知道如何着手，请仔细阅读....7天的时间，入门是没有问题的，当然，如果你用心的话！'
              },
              {
                'title':'我是怎么评价自己的？',
                'content':'为了挨打轻一些，问我哪里来的，我瞎说了一个说那个谁家的，结果，打得更凶。最后事情还原了真相，我妈说，你要说说奶奶家的，都不会打你了。从此以后，我知道撒谎是会付出更惨痛的代价的，我不再撒谎，也不喜欢爱撒谎的人。',
              },
              {
                'title':'作为一个设计师,如果遭到质疑你是否能恪守自己的原则?',
                'content':'就拿我自己来说吧，有时候会很矛盾，设计好的作品，不把它分享出来，会觉得待在自己电脑里面实在是没有意义。干脆就发布出去吧。我也害怕收到大家不好的评论，有些评论，可能说者无意，但是对于每一个用心的站长来说，都会受很深',
              },
              {
                'title':'遇见一个未知的你',
                'content':'听着那熟悉的歌曲看着那一张张可爱的图片.-读着我们共同欣赏的诗……也许我们曾经相遇,看着你远去的背影 ,沿着你来的方向 ,回忆时间穿梭于幸福的点点滴滴....',
              },
              {
                'title':'网易博客关闭，何不从此开始潇洒行走江湖！',
                'content':'从网易博客平台的出现，到现在已经有12个年头了，很多人还坚持着，网易博客一宣布关闭，很多人都很惋惜，那么多的文字记忆，又该如何是好？虽然可以一键搬迁到lofter',
              },
            ]
          }
        }
      },
      //第二栏的li悬浮时间
      twolihover(index){
        if(index!=this.twohoverli){
          $('.twolis ul li:nth-child('+(this.twohoverli+1)+')').removeClass('hoverli')
          $('.twolis ul li:nth-child('+(index+1)+')').addClass('hoverli')
          this.twohoverli = index
        }
      },
      //获取第二栏的最新发表
      reqNewPut(){
        this.newput = [
          {
            'link':'http://jxhx2.yangqq.com/notice/30.html',
            'title':'【个人博客空间申请】金牛云服，免费领空间啦',
          },
          {
            'link':'http://jxhx2.yangqq.com/notice/29.html',
            'title':'双十一，阿里云特惠活动，快来领券啦',
          },
          {
            'link':'http://jxhx2.yangqq.com/notice/28.html',
            'title':'第二届 优秀个人博客模板比赛参选活动',
          },
          {
            'link':'http://jxhx2.yangqq.com/notice/27.html',
            'title':'为什么说10月24日是程序员的节日？',
          },
        ]
      }
    },
  }
</script>

<style lang="less">
  @media screen and(max-width: 991px){
    .smnone{
      display: none;
    }
    .nopadding{
      padding-right: 15px;
    }
  }
  @media screen and(min-width: 992px){
    .nopadding{
      padding-right: 0px;
    }
  }
  .carousel-indicators .active{
    background-color:rgb(18,183,222);
  }
  .smallimg1:hover img{
    transform: scale(1.2);
    opacity: 1;
  }
  .smallimg1{
    position: relative;
    background-color: black;
    border-radius: 3px;
    img{
      transition: all .8s;
      opacity: .7;
    }
    width: 100%;
    height: 100%;
    overflow: hidden;
    span{
      bottom: 0;
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      color: #FFF;
      text-align: center;
      font-size: 15px;
      margin-top: 5px;
      padding: 0 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-height: 24px;
      height: 48px;
    }
  }
  .my-card{
    box-shadow: 0px 1px 0px rgba(255,255,255,.1), inset 0px 1px 1px rgba(0,0,0,.7);
    border-radius: 3px;
    background:url(../../assets/imgs/quote-bg.png) no-repeat top right rgba(42,42,42,1);
    height: 260px;
    overflow: hidden;
    margin-bottom: 20px;
    h2{
      font-size: 22px;
      margin: 15px;
      color: #89919a;
      font-weight: normal;
      padding-bottom: 10px;
    }
    p{
      font-size: 13px;
      padding: 0 0 0 20px;
      line-height: 22px;
      text-shadow: 0px 1px 2px rgba(0,0,0,.5);
      color: #d0d2d4;
    }
    .fourimgs{
      text-align: center;
      li{
        display: inline-block;
        list-style: none;
        height: 40px;
        width: 40px;
        border: 1px solid rgb(33,33,33);
        margin: 5px;
        border-radius: 50%;
        span{
          display: inline-block;
          font-size: 20px;
          margin: auto;
          line-height: 30px;
          height: 30px;
          width: 30px;
        }
      }
      .weixinli{
        position: relative;
      }
      .weixindiv{
        display: none;
        img{
          height: 100px;
          width: 100px;
        }
      }
      .weixinli:hover .weixindiv{
        display: block;
        position: absolute;
        top: -105px;
        left: -40px;
      }
    }

  }
  .twolan{
    .titles{
      border-bottom: 1px solid rgb(228,227,227);
      li{
        display: block;
        font-size: 16px;
        line-height: 40px;
        float: left;
        width: 100px;
        text-align: center;
        position: relative;
        cursor: pointer;
        list-style: none;
      }
      .titleactive{
        border-bottom: 2px solid black;
      }
    }
    .titles:before,.titles:after{
      display: table;
      content: '';
      clear: both;
    }
    .contents{
      height: 220px;
      overflow: hidden;
      .twolis{
        list-style: none;
        li{
          position: relative;
          padding: 0 20px 0px;
        }
        i{
          display: block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          color: white;
          background-color: rgb(154,154,154);
          text-align: center;
          font-size: 9px;
          float: left;
          margin-top: 6px;
          margin-right: 20px;
          position: relative;
          font-style: normal;
        }
        a{
          text-decoration: none;
          color: #000;
          height: 20px;
          line-height: 30px;
          font-size: 15px;
        }
        p{
          line-height: 24px;
          font-size: 14px;
          height: 48px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          margin: 0px;
          display: none;
        }
        .hoverli{
          background-color: rgb(247,247,247);
          padding-bottom:10px ;
          i{
            background-color: rgb(0,0,0)
          }
          a{
            font-weight: bold;
          }
          p{
            display: block;
          }
        }
      }
    }
    .tworight{
      ul{
        margin-top: 18px;
      }
      li:before{
        position: absolute;
        content: "";
        width: 3px;
        height: 3px;
        background: #000;
        border-radius: 10px;
        left: 15px;
        top: 20px;
      }
      li:hover{
        box-shadow: 2px 2px 8px rgb(230,230,230);
      }
      li{
        list-style: none;
        font-size: 12px;
        line-height: 30px;
        margin-bottom: 12px;
        display: block;
        -moz-border-radius: 4px;
        border-radius: 4px;
        background: #f6f6f6;
        padding: 4px 12px 4px 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
        -moz-transition: all .2s ease;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
      }
      a{
        text-decoration: none;
        color: #333;
      }
      .htitle {
        font-size: 16px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        color: #484848;
        font-weight: normal;
        position: relative;
        margin-bottom: 10px;
      }
      .htitle::after{
        content: "";
        position: absolute;
        width: 70px;
        height: 2px;
        content: "";
        background: #000;
        left: 0;
        bottom: 0;
        -moz-transition: all .5s ease;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
      }
    }
  }
  .threelan{
    .htitle {
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color: #484848;
      font-weight: normal;
      position: relative;
      margin-bottom: 10px;
    }
    .htitle::after{
      position: absolute;
      width: 60px;
      height: 2px;
      content: "";
      background: #000;
      left: 0;
      bottom: 0;
    }
    .threelis{
      ul{
        overflow: hidden;
        padding: 10px 0 20px 10px;
        position: relative;
      }
      li{
        float: left;
        width: 33.3%;
        border-bottom: #eee 1px solid;
        border-left: #eee 1px solid;
        overflow: hidden;
        padding: 20px;
        -moz-transition: all .5s ease;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
        .readmore{
          margin: 10px 0 0 0;
          color: #096;
          display: block;
          text-decoration: none;
        }
        .readmore:hover{
          color: black;
        }
        .readmore:before{
          content: "+";
          color: #063;
        }
        span{
          color: #999;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          font-size: 14px;
          height: 62px;
          display: block;
        }
        b{
          display: block;
          width: 100%;
          overflow: hidden;
          height: 30px;
          line-height: 30px;
          margin: 10px 0;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        img{
          transition: 0.5s;
        }
        i{
          width: 100%;
          height: 100px;
          overflow: hidden;
          border-radius: 3px;
          background: #CCC;
          display: block;
          a{
            text-decoration: none;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      li:hover{
        box-shadow: 2px 2px 10px rgb(230,230,230);
        img{
          transform: scale(1.1);
        }
      }
    }
  }
  .fourlan{
    .htitle {
      font-size: 16px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      color: #484848;
      font-weight: normal;
      position: relative;
      margin-bottom: 10px;
    }
    .htitle::after{
      position: absolute;
      width: 60px;
      height: 2px;
      content: "";
      background: #000;
      left: 0;
      bottom: 0;
    }
    li:hover .fourh3 a{
      color: rgb(90,137,188);
    }
    li{
      overflow: hidden;
      margin-bottom: 20px;
      border-bottom: #eee 1px dashed;
      padding-bottom: 20px;
      position: relative;
      min-height: 120px;
      a{
        text-decoration: none;
        color: #333;
      }
      .fourh3{
        margin: 0 0 10px 0;
        font-size: 18px;
        overflow: hidden;
        b{
          color: #F00;
        }
        a{
          font-weight: bold;
        }
      }
      .fourimg{
        float: left;
        width: 23.2%;
        margin-right: 20px;
        display: block;
        overflow: hidden;
        border-radius: 3px;
        position: relative;
        img{
          width: 100%;
          transition: 0.5s;
        }
        img:hover{
          transform: scale(1.1);
        }
      }
      .fourcontent{
        font-size: 14px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        margin-top: 20px;
      }
      .fourinfo{
        margin: 20px 0 0!important;
        overflow: hidden;
        color: #999;
        font-size: 15px;
        line-height: 34px;
        i{
          position: relative;
          float: left;
          width: 30px;
          height: 30px;
          border-radius: 100%;
          padding: 2px;
          display: block;
          background: -webkit-linear-gradient(bottom left, rgba(0,153,255,.9), rgba(42,228,197,.7));
          background: -o-linear-gradient(bottom left, rgba(0,153,255,.9), rgba(42,228,197,.7));
          background: linear-gradient(to top right, rgba(0,153,255,.9), rgba(42,228,197,.7));
          a{
            text-decoration: none;
            color: #333;
            img{
              width: 100%;
              margin-top: -10px;
              border-radius: 50%;
            }
          }
        }
        i:before{
          content: "";
          position: absolute;
          background-size: 12px;
          width: 12px;
          height: 12px;
          right: 0;
          bottom: 0;
        }
        span{
          margin: 0 5px;
          a{
            color: #096;
          }
        }
        .more{
          float: right;
          height: 28px;
          line-height: 28px;
          padding: 0px 10px;
          background: #12b7de;
          color: #fff;
          border-radius: 3px;
          margin-right: 20px;
        }
      }
    }
  }
</style>
