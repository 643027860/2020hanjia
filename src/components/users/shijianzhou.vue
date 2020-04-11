<template>
  <div class="shijianzhou">
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="min-height: 704px">
          <div class="oldpage">
            <h2 class="title">往期文章</h2>
            <div class="oldlis">
              <ul>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li><li>
                <span>2018-11-06</span>
                <i>
                  <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                </i>
              </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
                <li>
                  <span>2018-11-06</span>
                  <i>
                    <a href="http://jxhx2.yangqq.com/xd/34.html">遇见一个未知的你</a>
                  </i>
                </li>
              </ul>
            </div>
            <div class="pages">
              <nav aria-label="Page navigation">
                <ul class="pagination" style="margin: auto;text-align: center">
                  <li>
                    <a href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li v-for="(page,index) in pages" :key="index"><a href="javascript:;" @click="() => getpages(index+1)">{{index+1}}</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
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
        pages:10,
      }
    },
    mounted () {

    },
    methods: {
      getpages(index){
        console.log(index)
      }
    },
  }
</script>

<style lang="less">
  body{
    font-size: 15px;
  }
  .shijianzhou{
    .oldpage{
      background: #fff;
      border-radius: 3px;
      padding: 30px;
      margin-bottom: 20px;
      overflow: hidden;
      .title{
        font-size: 16px;
        line-height: 40px;
        border-bottom: 1px solid #eee;
        color: #484848;
        font-weight: normal;
        position: relative;
        margin-top: 0px;
        margin-bottom: 10px;
      }
      .title:after{
        position: absolute;
        width: 60px;
        background-color: #000;
        height: 2px;
        bottom: 0;
        left: 0;
        content: '';
      }
      .oldlis{
        max-height: 330px;
        overflow: hidden;
        ul{
          overflow: hidden;
          li{
            list-style: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            span{
              position: relative;
              line-height: 32px;
              padding-right: 40px;
              color: #999;
            }
            span:after{
              position: absolute;
              content: "";
              width: 2px;
              height: 40px;
              background: #e0dfdf;
              right: 18px;
            }
            i{
              position: relative;
              font-style: normal;
              a{
                padding-left: 5px;
                text-decoration: none;
                color: #333;
              }
            }
            i:before{
              content: " ";
              height: 14px;
              width: 14px;
              border: 2px solid #cccaca;
              background: #fff;
              position: absolute;
              top: 4px;
              left: -30px;
              border-radius: 50%;
              -webkit-transition: all .5s ease;
              transition: all .5s ease;
            }
          }
          li:hover i:before{
            background-color: #0f0f0f;
          }
        }
      }
      .pages{
        display: inline-block;
        width: auto;
        height: 40px;
        margin: 20px 0 0 50%;
        transform: translate3d(-50%,0,0);
        overflow: hidden;
      }
    }
  }
</style>
