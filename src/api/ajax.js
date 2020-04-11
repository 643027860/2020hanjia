import axios from 'axios'
import qs from 'qs'
// axios.interceptors.request.use(config => {
//     if(config.type == 'formData' || config.method != 'post'){
//         return config
//     }
//     config.data = qs.stringify(config.data)
//     console.log(config.data)
//     return config
// }, (err) =>{
//     return Promise.reject(err);
// })
export default function ajax (url, data={}, type='GET') {
    return new Promise(function (resolve, reject) {
        console.log(data)

        // 执行异步ajax请求
        let promise
        if (type === 'GET') {
            // 准备url query参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送get请求
            promise = axios.get(url)
        } else {
            // 发送post请求
            promise = axios.post(url, data)
        }
        promise.then(function (response) {
            // 成功了调用resolve()
            console.log(response)
            console.log(response.data)
            resolve(response.data)
        }).catch(function (error) {
            //失败了调用reject()
            reject(error)
        })
    })
}
