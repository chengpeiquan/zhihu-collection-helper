import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const logFile = resolve(__dirname, '../.log')

export function readLog() {
  try {
    const log = readFileSync(logFile, 'utf-8')
    return log.split('\n')
  } catch (e) {
    return []
  }
}

export function writeLog(source: string, id: number) {
  try {
    const logs = readLog()
    const content = `${source}\t${id}`
    logs.push(content)

    const unique = [...new Set(logs)].filter((i) => i)
    const log = unique.join('\n')
    writeFileSync(logFile, log)
  } catch (e) {
    console.log(`--- writeLog id: ${id} ---`)
    console.log(e)
  }
}
