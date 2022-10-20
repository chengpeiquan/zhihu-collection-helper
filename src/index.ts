import { queryLastPage, queryArticles } from './api'
import { timeout } from './utils'
import { LIMIT } from './env'

async function run() {
  console.log('任务开始')

  const lastPage = await queryLastPage()
  console.log(`当前专栏总共有 ${lastPage} 页数据待处理`)
  console.log('任务处理中，请等待控制台自动结束...')

  for (let i = 0; i < 1; i++) {
    const offset = i * Number(LIMIT)
    setTimeout(async () => {
      await queryArticles(offset)
    }, timeout())
  }
}
run().catch((e) => {
  console.log(e)
})
