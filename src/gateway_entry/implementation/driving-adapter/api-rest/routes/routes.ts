import { Router } from 'express'
import { entryController } from '../controllers'
import { ROUTES_GATEWAY_ENTRY } from '@/core/routes/v1/const.routes'

const route = Router()

route.post(ROUTES_GATEWAY_ENTRY.GATEWAY_ENTRY_APPLICATION, entryController)

export default route