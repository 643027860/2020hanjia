<template>
  <div class="manage_xiugai">
    <div style="background: white;overflow: auto;height: 600px;border-radius: 3px;">
      <div class="neirong" v-if="look">
        <div class="header" v-if="li!=null">
          <h1>
            {{li.title}}
          </h1>
          <p class="author">
            <i>
              <img :src=li.img2 alt="">
            </i>
            <span></span>
            <span v-show="li.time">{{li.time}}</span>
            <span>【{{li.type}}】</span>
            <button type="button" class="btn btn-primary" style="float: right;margin-right: 20px;padding: 3px 8px;" @click="()=>look=false">修改</button>
          </p>
          <p class="brief" v-show="li.content">
            <b></b>
            {{li.content}}
          </p>
        </div>
        <div class="outdiv">

        </div>
      </div>
      <div v-if="!look">
        <div class="xiugai" v-if="li!=null">
          <div>
            <form role="form">
              <div class="form-group">
                <label for="name" style="padding: 20px;font-size: 16px;"><span style="color: red">*</span>&nbsp;标题&nbsp;:</label>
                <input type="text" class="form-control" id="name" placeholder="请输入标题" v-model="title" style="width: 70%;min-width:300px;max-width: 500px;display: inline;">
              </div>
              <div class="form-group" style="margin-bottom: 0px;">
                <label for="brief" style="padding: 20px;font-size: 16px;float: left;margin-right: 5px;"><span style="color: red">*</span>&nbsp;简介&nbsp;:</label>
                <textarea :rows="4" class="form-control" id="brief" placeholder="请输入标题" v-model="brief" style="width: 70%;min-width:300px;max-width: 500px;display: inline;"></textarea>
              </div>
              <div class="form-group" style="margin-bottom: 0px;">
                <label style="padding: 20px;font-size: 16px;"><span style="color: red">*</span>&nbsp;正文&nbsp;:</label>
              </div>
              <div >
                <wangeditor v-bind:content = 'content' @getcontent="setcontent"/>
              </div>
              <div style="margin: 10px;">
                <button type="submit" class="btn btn-success btn-sm" style="float: right;margin-right: 30px;" @click="upload">提交</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'store'
  import wangeditor  from './wangeditor'
  export default {
    components:{
      wangeditor,
    },
    data () {
      return {
        look:true,
        li:null,
        brief:null,
        title:null,
        content:null,
        index:null,
      }
    },
    mounted () {
      this.getli()
      $('.outdiv').html(this.content)
    },
    methods: {
      getli(){
        var result = store.get('manage_xiugai_li') || {}
        this.li = result.li
        this.look = result.look
        this.index = result.index
        this.brief = this.li.content
        this.title = this.li.title
        this.content = this.li.content1
      },
      upload(){
        var {title,brief,content} = this
        if(title&&brief&&content){
          var li = store.get('gerenlis') || {}
          console.log(li[this.index])
          li[this.index].title = title
          li[this.index].content = brief
          li[this.index].content1 = content
          store.set('gerenlis',li)
          this.$message({
            type:'success',
            duration:1000,
            message:'提交成功'
          })
          this.content = ''
          this.$router.replace('/home/manage1/geren')
        }else{
          this.$message({
            type:'warning',
            duration:1500,
            message:'请填完所有信息'
          })
        }
      },
      setcontent(html){
        this.content = html
      },
    },
    watch:{
      title(newval,oldval){
        if(this.title.length>25){
          this.title = this.title.slice(0,25)
          this.$message({
            message:'标题最多只能输入25位',
            type:'warning',
            duration:1500,
          })
        }
      },
      brief(newval,oldval){
        if(this.brief.length>100){
          this.brief = this.brief.slice(0,100)
          this.$message({
            message:'简介最多只能输入100位',
            type:'warning',
            duration:1500,
          })
        }
      },
    }
  }
</script>

<style lang="less">
  .manage_xiugai{
    .neirong{
      padding: 20px;
      .header{
        h1{
          font-size: 22px;
          margin-top: 0px;
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
    .xiugai{
      border: 2px solid rgb(234,234,234);
      border-radius: 3px;
      height: 600px;
      overflow: auto;
    }
  }
</style>
