import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const logFile = resolve(__dirname, '../.log')

export function logIds() {
  const logs = readLog()
  const ids = logs.map((i) => +i)
  return ids
}

export function readLog() {
  try {
    const log = readFileSync(logFile, 'utf-8')
    return log.split('\n')
  } catch (e) {
    return []
  }
}

export function addLog(id: number) {
  try {
    const logs = readLog()
    logs.push(String(id))

    const unique = [...new Set(logs)].filter((i) => i)
    const log = unique.join('\n')
    writeFileSync(logFile, log)
  } catch (e) {
    console.log(`--- addLog id: ${id} ---`)
    console.log(e)
  }
}

export function removeLog(id: number) {
  try {
    const logs = readLog()
    const newLogs = logs.filter((i) => !i.includes(String(id)))

    const unique = [...new Set(newLogs)].filter((i) => i)
    const log = unique.join('\n')
    writeFileSync(logFile, log)
  } catch (e) {
    console.log(`--- removeLog id: ${id} ---`)
    console.log(e)
  }
}
