import { axios, timeout } from './utils'
import { addLog, removeLog } from './log'
import { COLLECTION_ID, DATA_SOURCE_COLLECTION_ID, LIMIT } from './env'

export async function queryLastPage() {
  try {
    const res = await axios({
      method: 'get',
      url: `/columns/${DATA_SOURCE_COLLECTION_ID}/items?offset=0&limit=${LIMIT}`,
    })
    const { paging } = res.data
    const { totals } = paging
    if (!totals) return 1
    return Math.ceil(Number(totals) / Number(LIMIT))
  } catch (e) {
    console.log(`--- queryLastPage ---`)
    console.log(e)
    return 1
  }
}

export async function queryArticles(offset: number) {
  try {
    const res = await axios({
      method: 'get',
      url: `/columns/${DATA_SOURCE_COLLECTION_ID}/items?offset=${offset}&limit=${LIMIT}`,
    })

    const { data: articles } = res.data
    if (!Array.isArray(articles) || !articles.length) return

    articles.forEach((i) => {
      setTimeout(async () => {
        await addArticleIntoCollection(+i.id)
      }, timeout())
    })
  } catch (e) {
    console.log(`--- queryArticles offset: ${offset} ---`)
    console.log(e)
  }
}

export async function addArticleIntoCollection(id: number) {
  try {
    const res = await axios({
      method: 'post',
      url: `/collections/${COLLECTION_ID}/contents`,
      headers: {
        referer: `https://zhuanlan.zhihu.com/p/${id}`,
      },
      params: {
        content_id: id,
        content_type: 'article',
      },
    })
    const { success } = res.data
    Boolean(success) ? removeLog(id) : addLog(id)
  } catch (e) {
    console.log(`--- addArticleIntoCollection id: ${id} ---`)
    console.log(e.response.status)
    addLog(id)
  }
}
