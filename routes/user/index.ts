import { Router } from 'express'
import create from './create'
import findById from './findById'
import login from './login'

const router = Router()

router.use(create)
router.use(findById)
router.use(login)

export default router
