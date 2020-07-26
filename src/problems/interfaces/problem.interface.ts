import { Document } from 'mongoose'

export interface User extends Document {
  userId: object,
  agentId: object,
  description: string
  solved: boolean
  createdAt: Date
}