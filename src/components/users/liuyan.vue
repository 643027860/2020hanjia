<template>
  <div class="liuyan">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="liuyanoutdiv">
            <div class="liuyandiv">
              <div class="title">
                <h2>
                  留言
                </h2>
              </div>
              <div class="upload">
                <div class="name">
                  <b style="color: red">*</b>
                  <span>用户名：</span>
                  <input type="text" v-model="name">
                </div>
                <p>
                  <b style="color: red">*</b>
                  <span>选择头像：</span>
                </p>
                <div class="img">
                  <i v-show="imgs" v-for="(img,index) in imgs" :key=index @click="()=>setimg(index+1,img)">
                    <img :src=img>
                  </i>
                </div>
                <div class="content">
                  <p>留言内容：</p>
                  <textarea rows="8" v-model="content" @change="setcontent"/>
                </div>
                <div class="button">
                  <div @click="putcomment">发表</div>
                </div>
              </div>
              <div class="liuyanlis">
                <ul>
                  <li v-show="lis" v-for="(li,index) in lis" :key="index">
                    <span class="img">
                      <img :src=li.img alt="">
                    </span>
                    <p>
                      <span class="time">{{li.time}}</span>
                      {{li.name}}
                    </p>
                    <p class="content">{{li.content}}</p>
                  </li>
                </ul>
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
        name:'',
        img:'',
        imgs:[],
        content:'',
        lis:[],
      }
    },
    mounted () {
      this.imgs = [
        "http://jxhx2.yangqq.com/e/tool/images/tx1.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx2.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx3.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx4.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx5.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx6.jpg",
        "http://jxhx2.yangqq.com/e/tool/images/tx7.jpg",
      ]
      this.lis = store.get('comment') || {}
      if(this.lis == {}){
        this.lis = []
      }
    },
    methods: {
      setname(){
        console.log(this.name)
      },
      setimg(index,img){
        this.img = img
        $('.choiceimg').removeClass('choiceimg')
        $('div.img i:nth-child('+index+')').addClass('choiceimg')
        console.log(this.img)
      },
      setcontent(){
        if(this.content.length>100){
          this.$message({
            message: '最多输入100个字',
            type: 'warning',
            duration:'1500'
          })
          this.content= this.content.splice(0,100)
        }
      },
      getdate(data){
        var year = data.getFullYear()
        var month = data.getMonth()*1 + 1
        if(month<10){
          month = '0' + month
        }
        var day = data.getDate()
        if(day<10){
          month = '0' + day
        }
        return  year + '-' + month + '-' + day
      },
      putcomment(){
        if(this.name&&this.img&&this.content){
          var data = new Date()
          var comment = {
            'name':this.name,
            'img':this.img,
            'content':this.content,
            'time':this.getdate(data),
          }
          this.lis.unshift(comment)
          store.set('comment',this.lis)
          this.$message({
            message: '评论成功',
            type: 'success',
            duration:'1500'
          })
          this.content= ''
          this.img = ''
          this.name = ''
          $('.choiceimg').removeClass('choiceimg')
          comment = {}
        }else{
          this.$message({
            message: '请填入完整信息',
            type: 'warning',
            duration:'1500'
          })
        }
      }
    },
  }
</script>

<style lang="less">
  .liuyan{
    .liuyanoutdiv{
      min-height: 701px;
      .liuyandiv{
        background: #fff;
        border-radius: 3px;
        padding: 20px;
        margin-bottom: 20px;
        overflow: hidden;
        .title{
          h2{
            font-size: 16px;
            line-height: 40px;
            border-bottom: 1px solid #eee;
            color: #484848;
            font-weight: normal;
            position: relative;
            margin-bottom: 10px;
            margin-top: 0px;
          }
          h2:after{
            position: absolute;
            width: 60px;
            height: 2px;
            content: "";
            background: #000;
            left: 0;
            bottom: 0;
          }
        }
        .upload{
          font-size: 16px;
          .name{
            margin-bottom: 10px;
            span{
              margin-right: 10px;
            }
            input{
              min-width: 100px;
              margin: 5px 0;
              padding: 2px 10px;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
              background: #fff;
              resize: none
            }
          }
          .img{
            margin-bottom: 10px;
            i{
              display: block;
              float: left;
              margin-right: 10px;
              box-sizing: border-box;
              background: black;
              border-radius: 50%;
              img{
                opacity: 1;
              }
            }
            i:hover img{
              opacity: 0.7;
            }
            .choiceimg{
              img{
                opacity: 0.7;
              }
            }
          }
          .img:before,.img:after{
            display: table;
            content: '';
            clear: both;
          }
          .content{
            margin-top: 5px;
            textarea{
              margin-left: 2%;
              width: 97%;
              overflow: auto;
            }
          }
          .button{
            width: 98%;
            div{
              font-size: 14px;
              background-color: black;
              color: white;
              text-align: center;
              display: inline-block;
              width: auto;
              padding: 6px 16px;
              cursor: pointer;
              border-radius: 10%;
              float: right;
            }
          }
          .button:before,.button:after{
            display: table;
            content: '';
            clear: both;
          }
        }
        .liuyanlis{
          ul{
            width: 98%;
            overflow: hidden;
            li{
              list-style: none;
              margin: 10px 0;
              padding: 20px 10px;
              border-bottom: #ececec 1px solid;
              span.img{
                display: block;
                float: left;
                margin-right: 10px;
              }
              span.time{
                float: right;
                color: #999;
                font-size: 12px;
                overflow: hidden;
                white-space: nowrap;
              }
              p.content{
                margin: 10px 0;
              }
            }
          }
        }
      }
    }
  }
</style>
