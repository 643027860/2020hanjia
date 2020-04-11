<template>
  <div class="container">
    <div class="xinde">
      <div class="row">
        <div class="col-lg-9 nopadding">
          <div class="fristtitle">
            <img src="http://jxhx2.yangqq.com/skin/jxhx/images/lm04.jpg" alt="设计心得">
            <h1>设计心得</h1>
            <p>个人博客用来做什么？我的个人博客网站它不仅仅是我个人兴趣和爱好，还是我创业的起点。我爱网页设计，我爱写前端代码。它充实了我的生活，实现了我的目标和梦想。</p>
          </div>
        </div>
        <div class="col-lg-3" style="position: relative">
          <div class="rightlis">
            <div class="tworight" style="overflow: hidden;margin: 20px;margin-top:0px;">
              <h2 class="htitle">最近更新</h2>
              <section>
                <a href="http://jxhx2.yangqq.com/blog/7.html">
                  <img src="http://jxhx2.yangqq.com/skin/jxhx/images/b02.jpg" alt="">
                  <span>安静地做一个爱设计的女子</span>
                </a>
              </section>
              <ul>
                <li>
                  <a href="http://jxhx2.yangqq.com/blog/6.html" title="电话以外的宁静">
                    <i>
                      <img src="http://www.yangqq.com/d/file/news/s/2013-07-09/0ea789bf08db903aaa6cc81d38615472.jpg" alt="">
                    </i>
                    <p>电话以外的宁静</p>
                  </a>
                </li>
                <li>
                  <a href="http://jxhx2.yangqq.com/blog/4.html" title="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的">
                    <i>
                      <img src="http://jxhx2.yangqq.com/skin/jxhx/images/4.jpg" alt="">
                    </i>
                    <p>个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</p>
                  </a>
                </li>
                <li>
                  <a href="http://jxhx2.yangqq.com/blog/3.html" title="个人博客，属于我的小世界！">
                    <i>
                      <img src="http://jxhx2.yangqq.com/skin/jxhx/images/2.jpg" alt="">
                    </i>
                    <p>个人博客，属于我的小世界！</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row fourlan">
        <div class="col-lg-9 nopadding" style="background-color: rgb(233,234,237);margin-top: 20px;">
          <div style="background-color: white;width: 100%;border-radius: 3px;">
            <div style="padding:20px 20px 10px;margin-bottom: 20px;">
              <div class="htitle">
                <span>最新博文</span>
              </div>
              <ul>
                <li v-show="xindelis" v-for="(xinde,index) in xindelis" :key="index">
                  <h3 class="fourh3"><b>【顶】</b><a href="/xd/23.html">{{xinde.title}}</a></h3>
                  <span class="fourimg">
                      <a href="http://jxhx2.yangqq.com/xd/23.html"><img :src=xinde.img1 :alt=xinde.title></a>
                    </span>
                  <p class="fourcontent">{{xinde.content}}</p>
                  <p class="fourinfo">
                    <i>
                      <a href="http://jxhx2.yangqq.com/about/">
                        <img :src=xinde.img2 alt="">
                      </a>
                    </i>
                    <span></span>
                    <span>{{xinde.time}}</span>
                    <span>
                        【
                        <a href="http://jxhx2.yangqq.com/xd/23.html">{{xinde.type}}</a>
                        】
                      </span>
                    <a @click="jump(index,xinde.type,xinde)" class="more" style="cursor: pointer;">阅读更多</a>
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
  import store from 'store'
  export default {
    data () {
      return {
        xindelis:[],
      }
    },
    mounted () {
      this.getxindelis()
    },
    methods: {
      getxindelis(){
        setTimeout(()=>{
          this.xindelis = store.get('xindelis') || {}
        },50)
      },
      jump(index,type,li){
        store.set('seedetail',{
          type,
          li,
          url:'/home/xinde'
        })
        this.$router.push({
          path:'/home/detail',
          query:{
            index
          }
        })
      },
    },
  }
</script>

<style lang="less">
  body{
    font-size: 15px;
  }
  @media screen and(max-width: 1200px){
    .rightlis{
      display: none;
    }
  }
  @media screen and(max-width: 991px){
    .nopadding{
      padding-right: 15px;
    }
  }
  @media screen and(min-width: 992px){
    .nopadding{
      padding-right: 0px;
    }
  }
  .xinde{
    .fristtitle{
      background: #fff;
      border-radius: 3px;
      padding: 20px;
      overflow: hidden;
      img{
        height: 100px;
        float: left;
        margin-right: 20px;
      }
      h1{
        font-weight: bold;
        font-size: 22px;
        margin:0 0 15px;
      }
      p{
        color: #666;
      }
    }
    .rightlis{
      position: absolute;
      float: right;
      width: 100%;
      border-radius: 3px;
      background-color: white;
      box-sizing: border-box;
      .tworight{
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
        section{
          display: block;
          margin: 20px 0;
          background: #000;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          max-height: 110px;
          a{
            text-decoration: none;
            color: #333;
            img{
              opacity: .7;
              width: 100%;
              border: 0;
              display: block;
              transition: 0.5s;
            }
            span{
              position: absolute;
              bottom: 30%;
              left: 0;
              right: 0;
              color: #FFF;
              text-align: center;
              font-size: 15px;
              padding: 0 40px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              line-height: 22px;
            }
          }
          a:hover img{
            opacity: 1;
            transform: scale(1.1);
          }
        }
        ul{
          overflow: hidden;
          padding-top: 10px;
          margin-bottom: 0px!important;
          li{
            overflow: hidden;
            margin-bottom: 10px;
            height: 60px;
            list-style: none;
            a{
              text-decoration: none;
              color: #333;
              i{
                width: 70px;
                height: 70px;
                margin-right: 10px;
                overflow: hidden;
                display: block;
                float: left;
                img{
                  height: 100%;
                  max-width: 100%;
                  min-width: 100%;
                  transition: 0.5s;
                }
              }
              p{
                margin-top: 10px;
                line-height: 20px;
                max-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                font-size: 14px;
              }
            }
          }
          li:hover{
            background-color: rgb(246,246,246);
            img{
              transform: scale(1.1);
            }
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
  }
</style>
