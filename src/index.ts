import { queryLastPage, queryArticles, addArticleIntoCollection } from './api'
import { firstPage, sleep } from './utils'
import { LIMIT } from './env'

async function run() {
  console.log('任务开始...')
  console.log()

  const lastPage = await queryLastPage()
  const start = firstPage() > lastPage ? 0 : firstPage()

  console.log(`当前专栏总共有 ${lastPage - start} 页数据待处理...`)
  console.log()
  console.log('任务处理中，请等待控制台自动结束...')
  console.log()

  for (let i = start; i < lastPage; i++) {
    await sleep()
    const offset = i * Number(LIMIT)
    await queryArticles(offset)
  }
}
run().catch((e) => {
  console.log(e)
})
