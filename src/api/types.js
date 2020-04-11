import ajax from './ajax'

const Base = "http://47.97.170.173:8211"
export const LOGIN = (name,password) => ajax(Base+"/user/login",{name,password},'POST')  //登录
export const REGISTER = (userName,password) => ajax(Base+"/register",{userName,password},'POST')  //注册

//上传apk文件

