import { Schema } from 'mongoose'

export const AgentSchema = new Schema({
  name: String,
  availability: { 
    type: Boolean, 
    required: true, 
    default: false
  },
  problemId: {
    type: Schema.Types.ObjectId,
    ref: 'Problem'
  },
})