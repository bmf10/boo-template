import mongoose from 'mongoose'
import { EnneagramType, MbtiType, ZodiacType } from './Comment'

export interface IProfile {
  readonly name: string
  readonly description: string
  readonly image: string
  readonly mbti: MbtiType
  readonly enneagram: EnneagramType
  readonly zodiac: ZodiacType
  readonly variant: string
  readonly tritype: number
  readonly socionics: string
  readonly sloan: string
  readonly psyche: string
}

const ProfileSchema = new mongoose.Schema<IProfile>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  mbti: {
    type: String,
    required: true,
  },
  enneagram: {
    type: String,
    required: true,
  },
  zodiac: {
    type: String,
    required: true,
  },
  description: { type: String, required: true },
  variant: { type: String, required: true },
  tritype: { type: Number, required: true },
  socionics: { type: String, required: true },
  psyche: { type: String, required: true },
  sloan: { type: String, required: true },
})

export default mongoose.models.Profile ||
  mongoose.model<IProfile>('Profile', ProfileSchema, 'profiles')
