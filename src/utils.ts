import axios from 'axios'
import {
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
  USER_AGENT,
} from './env'

const instance = axios.create({
  baseURL: 'https://www.zhihu.com/api/v4',
  headers: {
    cookie: COOKIE,
    referer: 'https://zhuanlan.zhihu.com',
    'x-ab-param': '',
    'x-ab-pb': X_AB_PB,
    'x-requested-with': 'fetch',
    'x-xsrftoken': X_XSRFTOKEN,
    'x-zse-93': X_ZSE_93,
    'x-zse-96': X_ZSE_96,
    'x-zst-81': X_ZSE_81,
    'user-agent': USER_AGENT,
  },
})

export { instance as axios }

export function timeout() {
  return Math.ceil(Math.random() * 10) * 1000
}
