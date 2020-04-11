<template>
  <div class="detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div style="margin-bottom: 20px;">
            <div style="background: white;overflow: hidden;min-height: 684px;border-radius: 3px;">
              <div class="neirong">
                <div class="header">
                  <p class="nav">
                    <span>
                      您现在的位置是：
                      <a @click="jump('/home/mainpage')">首页</a>&nbsp;&nbsp;>&nbsp;&nbsp;
                      <a @click="jump(url)">{{type}}</a>
                    </span>
                    {{type}}
                  </p>
                  <h1>{{li.title}}</h1>
                  <p class="author">
                    <i v-show="img1">
                      <img :src=img1 alt="">
                    </i>
                    <span></span>
                    <span v-show="li.time">{{li.time}}</span>
                    <span>【{{type}}】</span>
                  </p>
                  <p class="brief" v-show="li.content">
                    <b></b>
                    {{li.content}}
                  </p>
                </div>
                <div class="outdiv">

                </div>
              </div>
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
        type:'',
        li:'',
        url:'',
        img1:'',
      }
    },
    mounted () {
      var data = store.get('seedetail') || {}
      this.type = data.type
      this.li = data.li
      this.url = data.url
      this.img1 = this.li.img2
    },
    methods: {
      jump(url){
        this.$router.push(url)
      },
    },
  }
</script>

<style lang="less">
  .detail{
    .neirong{
      padding: 20px;
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
            font-size: 14px;
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
        h1{
          font-size: 22px;
          margin-top: 20px;
          font-weight: bold;
        }
        p.author{
          margin-top: 20px;
          overflow: hidden;
          color: #999;
          line-height: 34px;
          i{
            position: relative;
            float: left;
            width: 34px;
            height: 34px;
            border-radius: 100%;
            padding: 2px;
            display: block;
            background: linear-gradient(to top right, rgba(0,153,255,.9), rgba(42,228,197,.7));
            img{
              width: 100%;
              border-radius: 50%;
              margin-top: -6px;
            }
          }
          span{
            margin: 0 5px;
          }
        }
        p.brief{
          color: #888888;
          border: 1px solid #F3F3F3;
          padding: 10px;
          margin: 10px auto 0;
          line-height: 23px;
          background: none repeat 0 0 #F6F6F6;
          b{
            margin-right: 10px;
            color: #000;
          }
        }
      }
      .outdiv{
        line-height: 24px;
        margin-top: 20px;
      }
    }
  }
</style>
