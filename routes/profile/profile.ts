import { RequestHandler, Router } from 'express'
import Profile from '../../models/Profile'

interface Params {
  readonly id: string
}

const requestHandler: RequestHandler = async (req, res) => {
  const params = req.params as unknown as Params
  const profile = await Profile.findById(params.id)

  res.render('profile_template', {
    profile: profile,
  })
}

const router = Router()

router.get('/:id/view', requestHandler)

export default router
