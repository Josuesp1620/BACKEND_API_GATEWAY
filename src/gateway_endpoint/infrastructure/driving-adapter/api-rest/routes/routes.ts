import { Router } from 'express'
import { createController, deleteController, getAllController } from '../controllers'
import { ROUTES_GATEWAY_ENDPOINT } from '@/core/routes/v1/const.routes'

const route = Router()

route.post(ROUTES_GATEWAY_ENDPOINT.GATEWAY_ENDPOINT_CREATE, createController)
route.get(ROUTES_GATEWAY_ENDPOINT.GATEWAY_ENDPOINT_GET_ALL, getAllController)
route.delete(ROUTES_GATEWAY_ENDPOINT.GATEWAY_ENDPOINT_DELETE, deleteController)


export default route