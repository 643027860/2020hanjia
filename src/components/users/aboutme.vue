<template>
  <div class="aboutme">
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="min-height: 704px">
          <div class="outdiv" v-show="aboutme">

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
        aboutme:null
      }
    },
    mounted () {
      this.getAboutMe()
    },
    methods: {
      getAboutMe(){
        setTimeout(()=>{
          this.aboutme = store.get('aboutme')
          $('.outdiv').html(this.aboutme)
        },50)
      }
    },
  }
</script>

<style lang="less">
  .aboutme{
    .outdiv{
      padding: 5px 20px 20px;
      background-color: white;
      overflow: hidden;
      border-radius: 3px;
      margin-bottom: 20px;
    }
    h3.title{
      margin: 25px 0 15px 0;
    }
    #aboutme{
      p{
        margin-left: 3%;
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
</style>
