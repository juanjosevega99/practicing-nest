import { Schema } from 'mongoose'

export const AgentSchema = new Schema({
  name: { type: String, required: true },
  availability: { type: Boolean, required: true },
  problemId: Number
})