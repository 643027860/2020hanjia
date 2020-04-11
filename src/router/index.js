import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home'

import MainPage from '../components/users/mainpage'
import AboutMe from '../components/users/aboutme'
import GeRen from '../components/users/geren'
import LiuYan from '../components/users/liuyan'
import XinDe from '../components/users/xinde'
import ShiJianZhou from '../components/users/shijianzhou'
import Detail from '../components/users/detail'

import Manage from '../components/manage/manage'
import Manage1 from '../components/manage/mymanage'
import Main from '../components/manage/main'
import Aboutme from '../components/manage/aboutme'
import Xinde from '../components/manage/xinde'

import Geren from '../components/manage/geren/geren'
import Lis from '../components/manage/geren/lis'
import Upload from '../components/manage/geren/upload'
import Xiugai from '../components/manage/geren/xiugai'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'manage',
          component:Manage,
        },
        {
          path:'manage1',
          component:Manage1,
          children:[
            {
              path:'main',
              component:Main,
            },
            {
              path:'aboutme',
              component:Aboutme,
            },
            {
              path:'geren',
              component:Geren,
              children:[
                {
                  path:'lis',
                  component:Lis,
                },
                {
                  path:'upload',
                  component:Upload,
                },
                {
                  path:'xiugai',
                  component:Xiugai,
                },
                {
                  path:'',
                  redirect:'lis',
                },
              ]
            },
            {
              path:'xinde',
              component:Xinde,
            },
            {
              path:'',
              redirect:'main'
            }
          ]
        },
        {
          path:'detail',
          component:Detail,
        },
        {
          path:'mainpage',
          component:MainPage,
        },
        {
          path:'aboutme',
          component:AboutMe,
        },
        {
          path:'geren',
          component:GeRen,
        },
        {
          path:'liuyan',
          component:LiuYan,
        },
        {
          path:'xinde',
          component:XinDe,
        },
        {
          path:'shijianzhou',
          component:ShiJianZhou,
        },
        {
          path:'',
          redirect:'mainpage'
        },
      ]
    },
    {
      path:'',
      redirect:'/home'
    }
  ]
})
