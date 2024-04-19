import { Router } from 'express'
import { createController } from '../controllers'
import { ROUTES_GATEWAY_APPLICATION } from '@/core/routes/v1/const.routes'
 
const route = Router()

route.post(ROUTES_GATEWAY_APPLICATION.GATEWAY_APPLICATION_CREATE, createController)

export default route