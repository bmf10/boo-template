import { RequestHandler, Router } from 'express'
import { Joi, schema, validate } from 'express-validation'
import { successResponse } from '../../utils/general'
import Profile, { IProfile } from '../../models/Profile'
import { enneagram, mbti, zodiac } from '../../models/Comment'

const validationSchema: schema = {
  body: Joi.object<IProfile>({
    name: Joi.string().required().trim(),
    description: Joi.string().required(),
    image: Joi.string().required(),
    mbti: Joi.valid(...mbti).required(),
    enneagram: Joi.valid(...enneagram).required(),
    zodiac: Joi.valid(...zodiac).required(),
    variant: Joi.string().required(),
    tritype: Joi.number().required(),
    socionics: Joi.string().required(),
    sloan: Joi.string().required(),
    psyche: Joi.string().required(),
  }),
}

const requestHandler: RequestHandler = async (req, res) => {
  const body = req.body as IProfile

  const profile = await Profile.create(body)
  res.json(successResponse(profile))
}

const router = Router()

router.post('/', validate(validationSchema, { context: true }), requestHandler)

export default router
