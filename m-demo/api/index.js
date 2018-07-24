import axios from 'axios/dist/axios.min.js'
import { doubanApi } from './config.js'
const apiContext = '/v2'
let methods = ['get', 'post']


// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// axios.defaults.headers.post['Content-Type'] = 'application/json'
// application/x-www-form-urlencoded
// application/json
import cookie from 'js-cookie'

class Api {
  constructor (context = '') {
    methods.forEach(method => {
      this[method] = (path, data = {}) => new Promise((resolve, reject) => {
        // axios.defaults.headers.common['userToken'] = token
        // axios.defaults.headers.common['token'] = token

        let url = doubanApi + apiContext + context + path

        // 接口返回的 tiketId
        data.ticketId = cookie.get('CXC_ticketId') || ''; //带上tiketId
        // alert(url+ '|' +JSON.stringify(data))
        axios({
          method: method,
          url: url,
          data: data,
          withCredentials: true,
          timeout: 10000,
          headers: {
            // 'X-Requested-With': 'XMLHttpRequest',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Accept': '*/*',
            // 'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
        }).then(res => {
          // console.log(`[${method}]${url}`, res)
          if (res.status === 200) {
            if (res.data.code === 0) {
              resolve(res.data)
            } else {
              reject(res.data)
            }
          }
        }).catch(error => {
          // console.log('error.response', error.response)
          // console.log('error.request', error.request)
          reject(error.response)
        })
      })
    })
  }
}


export default new Api()