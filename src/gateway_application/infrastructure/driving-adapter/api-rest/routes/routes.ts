import { Router } from 'express'
import { createController, deleteController, getAllController } from '../controllers'
import { ROUTES_GATEWAY_APPLICATION } from '@/core/routes/v1/const.routes'
 
const route = Router()

route.post(ROUTES_GATEWAY_APPLICATION.GATEWAY_APPLICATION_CREATE, createController)
route.delete(ROUTES_GATEWAY_APPLICATION.GATEWAY_APPLICATION_DELETE, deleteController)
route.get(ROUTES_GATEWAY_APPLICATION.GATEWAY_APPLICATION_GET_ALL, getAllController)

export default route