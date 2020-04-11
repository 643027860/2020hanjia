<template>
  <div>
    <div id="editor" style="width: 85%;margin-left: 95px;margin-top: -30px;">
      <div id="content">

      </div>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
  export default {
    data () {
      return {
        editor:null,
      }
    },
    props:{
      content:{
        type:String,
        require:true
      }
    },
    mounted () {
      this.editor = new E('#editor')  // 两个参数也可以传入 elem 对象，class 选择器
      var self = this
      this.editor.customConfig.onchange = function (html) {
        self.$emit('getcontent',html)
      }
      this.editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
      ]
      this.editor.customConfig.uploadImgShowBase64 = true   // 使用 base64 保存图片
      this.editor.customConfig.showLinkImg = true
      this.editor.create()
      $('#content').html(this.content)
    },
    methods: {},
  }
</script>

<style lang="less">

</style>
