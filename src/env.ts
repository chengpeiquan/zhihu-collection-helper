import { config } from 'dotenv'

config()

const {
  COLLECTION_ID,
  DATA_SOURCE_COLLECTION_ID,
  LIMIT,
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
  USER_AGENT,
} = process.env

export {
  COLLECTION_ID,
  DATA_SOURCE_COLLECTION_ID,
  LIMIT,
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
  USER_AGENT,
}
