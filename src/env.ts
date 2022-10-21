import { config } from 'dotenv'

config()

const {
  COLLECTION_ID,
  DATA_SOURCE_COLLECTION_ID,
  START_PAGE_NUMBER,
  LIMIT,
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
} = process.env

export {
  COLLECTION_ID,
  DATA_SOURCE_COLLECTION_ID,
  START_PAGE_NUMBER,
  LIMIT,
  X_AB_PB,
  X_XSRFTOKEN,
  X_ZSE_93,
  X_ZSE_96,
  X_ZSE_81,
  COOKIE,
}
