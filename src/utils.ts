import axios from 'axios'
import { uas } from './data'
import {
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
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
    'user-agent': ua(),
  },
})

export { instance as axios }

export function timeout() {
  return Math.ceil(Math.random() * 20) * 1000
}

export function ua() {
  const i = Math.floor(Math.random() * uas.length)
  const ua = uas[i]
  return ua
}
