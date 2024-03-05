import { Router } from 'express'
import create from './create'
import findById from './findById'
import profile from './profile'

const router = Router()

router.use(create)
router.use(findById)
router.use(profile)

export default router
