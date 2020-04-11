<template>
  <div class="contain">
    <Nav/>
    <router-view/>
    <Foot/>
  </div>
</template>

<script>
  import Foot from '../components/foot'
  import Nav from '../components/nav'

  export default {
    data(){
      return {

      }
    },
    //注册组件
    components:{
      Foot,
      Nav,
    },
    methods:{

    },
    mounted () {

    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
</style>
