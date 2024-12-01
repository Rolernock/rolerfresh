import { check } from 'express-validator'

export const validateMessage = [
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please provide a valid email').isEmail().normalizeEmail(),
  check('subject', 'Subject is required').notEmpty(),
  check('message', 'Message is required').notEmpty()
]
