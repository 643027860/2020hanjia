<template>
  <div class="manage_lis">
    <div class="lisdiv">
      <table class="table table-hover">
        <thead>
        <tr>
          <th >标题</th>
          <th >简介</th>
          <th ></th>
          <th >时间</th>
          <th >操作</th>
        </tr>
        </thead>
        <tbody style="height: 460px;">
        <tr v-for="(li,index) in lis" :key="index" v-show="lis">
          <td class="title"><p>{{li.title}}</p></td>
          <td class="content"><p>{{li.content}}</p></td>
          <td class="img" align="center"><img :src=li.img1 alt=""></td>
          <td class="time"><span>{{li.time}}</span></td>
          <td class="caozuo">
            <button @click="()=>jump(li,true,index)">查看</button>
            <button @click="()=>jump(li,false,index)">修改</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import store from 'store'
  export default {
    data () {
      return {
        lis:null,
      }
    },
    mounted () {
      this.getlis()
    },
    methods: {
      getlis(){
        setTimeout(()=>{
          this.lis = store.get('gerenlis') || {}
        },50)
      },
      jump(li,look,index){
        store.set('manage_xiugai_li',{li,look,index})
        this.$router.push('/home/manage1/geren/xiugai')
      }
    },
  }
</script>

<style lang="less">
  .manage_lis{
    .lisdiv{
      border: 2px solid rgb(234,234,234);
      border-radius: 3px;
      height: 590px;
      max-height: 590px;
      tr,th{
        height: 50px;
        max-height: 50px;
        overflow: hidden;
      }
      td{
        padding: 6px 12px;
      }
      thead{
        text-align: center;
        th{
          font-size: 16px;
          font-weight: bold;
          padding-left: 16px;
        }
      }
      .title{
        width: 20%;
        p{
          height: 50px;
          max-height: 50px;
          line-height: 25px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin: 0;
        }
       }
      .content{
        width: 35%;
        p{
          height: 50px;
          max-height: 50px;
          line-height: 25px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          margin: 0;
        }
      }
      .img{
        width: 15%;
        img{
          width: 100%;
          max-width: 100px;
          transition: 0.5s;
        }
      }
      .time{
        width: 10%;

        span{
          line-height: 25px;

          text-align: center;
          font-size: 14px;

        }
      }
      .caozuo{
        width: 10%;
        text-align: center;
      }
    }
  }
</style>
