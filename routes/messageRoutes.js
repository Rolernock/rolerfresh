import express from 'express'
import { validateMessage } from '../middleware/messageValidator.js'
import {
  readMessages,
  sendMessage,
  deleteMessage
} from '../controllers/messageControllers.js'
const router = express.Router()

router.route('/').get(readMessages).post(validateMessage, sendMessage)
router.delete('/:msgId', deleteMessage)

export default router
