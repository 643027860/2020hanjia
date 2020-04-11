<template>
  <div class="manage">
    <div class="container" style="background-color: white;margin-bottom: 20px;">
      <div style="padding: 20px;">
        <button @click="loading">上传</button>
        <input type="file" name="上传apk文件" @change="files($event)">
        <button @click="uploadapk">上传</button>
        <input type="file" name="txt_file" id="txt_file" multiple class="file-loading" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'qs'
  export default {
    data () {
      return {
        apk:null,
        editor:null,
        jew:'',
        jwt:'',
      }
    },
    mounted () {

    },
    methods: {
      loading(){
        let param = {'name':'liubei','password':'123'}
        param = qs.stringify(param)
        axios.post('http://47.97.170.173:8211/user/login',param)
          .then(response=>{
            if(response.status == 200)
            {
              var result = response.data
              result = result.data
              this.jwt = result.jwt
              var jwt = this.jwt
              this.jew = jwt.access_token
            }else{
              console.log(response)
              console.log('失败')
            }
          }).catch(err => {
          console.log(err)
        })
      },
      files(event){
        this.apk = event.target.files[0]
      },
      uploadapk(){
        let a = this.apk
        if(a){
          var jew = 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODUxMTI3NjIsInVzZXJfbmFtZSI6ImxpdWJlaSIsImF1dGhvcml0aWVzIjpbInN0cmluZyIsInRyaW5nIl0sImp0aSI6IjY0MGQ0MWRkLWI3MTYtNGJlNi05MGRlLTg5MjMxYzFjMDEzZCIsImNsaWVudF9pZCI6InVzZXItc2VydmljZSIsInNjb3BlIjpbInNlcnZpY2UiXX0.TkE2abf4T0d2zqUdE_91lSwOoH5GUBCTr3uIsjDUOyJEE-lrBxxD0v2oI3VYX0C9YoWpQIu8mkd6DtHoPvW90QAxXrM6nUp1DXiD1tus7Afc61PkRg3XtI1Hq2nxOinQSTb9XzxmZFni1HEGdzgVq7Qs3VGfmpt5NhCWjXHDWx6XR2hnT2qyWapJt_0N0JYeGbbRDxXRp0GsFpteUMALN1qosMKSZ6UmS-h6ttHwCHLE-E5xMirQDk1LZG1YLHJnZ_ko8Lgxh1Y8kWDdCZU1HNILgmm83nV_6pPQUiMraDVeq78VBQRAfb1wJ6usp1O16DpZi_rAVltG1ynoDmjKcA'
          console.log(a)
          let param = new FormData(); //创建form对象，私有，无法直接获取，只能通过get来查看其中的元素
          param.append('uploadFile',a)
          let config = {
            headers:{
              'Content-Type':'multipart/form-data',
              'Authorization':'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODUxMTY1MzksInVzZXJfbmFtZSI6ImxpdWJlaSIsImF1dGhvcml0aWVzIjpbInN0cmluZyIsInRyaW5nIl0sImp0aSI6ImJmMzdiMDUyLTkyN2MtNDk3Ni1iMjBiLTczNmFmMjU4YjMxMCIsImNsaWVudF9pZCI6InVzZXItc2VydmljZSIsInNjb3BlIjpbInNlcnZpY2UiXX0.RvpWOYuVYdQ5jX9ut16NAyNSR_7a7GIGQAC-iVHAOb-gbMDeUHfRAGWyRmkhnBt1hqOm5rEkqGX81PK45nL-GmMSQAL59K2DuiVDF2VCrxhyyNPRH0b8Nmk-LdPNBS0lmaPjroHJ8g4g-kVWqOdeDYfUq4oDY96an7bRlAUd6v_7OZmZeAa9gnql5KPFhj5GS8Nq_DWXoaExHu-zvO9ZGdpOqpS-M7ReVpZlsOEJsWpnPEZ9L33Pl5HEDnlERMnZRCiy7F3q_qgqZ40bMH-4lL2XiqWQmbeJ7wp6G7mjaGMegM4qVm_TzpF6V9Ni5WLIY7oj5Ridpp4yZWRi2H-3-w'
            },
          }
          axios.post('http://47.97.170.173:8204/micro-consumer-1/feign/upload/apk',param,config)
            .then(response=>{
              var result = response.data
              if(result.status == 200)
              {
                console.log(response)
                console.log('成功')
              }else{
                console.log(response)
                console.log('失败')
              }
            }).catch(err => {
            console.log(err)
          })
        }else{
          console.log('空')
        }
      }
    },
  }
</script>

<style lang="less">

</style>
