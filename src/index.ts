import { queryLastPage, queryArticles, addArticleIntoCollection } from './api'
import { timeout } from './utils'
import { logIds } from './log'
import { LIMIT } from './env'

async function run() {
  console.log('任务开始...')
  console.log()

  const mode = process.argv[2] || '--start'
  switch (mode) {
    case '--start': {
      const lastPage = await queryLastPage()
      console.log(`当前专栏总共有 ${lastPage} 页数据待处理...`)
      console.log()
      console.log('任务处理中，请等待控制台自动结束...')
      console.log()

      for (let i = 0; i < 1; i++) {
        const offset = i * Number(LIMIT)
        setTimeout(async () => {
          await queryArticles(offset)
        }, timeout())
      }
      break
    }
    case '--retry': {
      const ids = logIds()
      console.log(`当前日志总共有 ${ids.length} 条数据待处理...`)
      console.log()
      console.log('任务处理中，请等待控制台自动结束...')
      console.log()

      ids.forEach((id) => {
        setTimeout(async () => {
          await addArticleIntoCollection(id)
        }, timeout())
      })
      break
    }
  }
}
run().catch((e) => {
  console.log(e)
})
