export const ROUTE_VERSION = '/api/v1'

const GATEWAY_APPLICATION : string = '/gateway-application'
const GATEWAY_APPLICATION_CREATE : string = '/create'
const GATEWAY_APPLICATION_GET_ALL : string = '/get-all'
const GATEWAY_APPLICATION_DELETE : string = '/delete'

export const ROUTES_GATEWAY_APPLICATION = {
    GATEWAY_APPLICATION,
    GATEWAY_APPLICATION_CREATE,
    GATEWAY_APPLICATION_GET_ALL,
    GATEWAY_APPLICATION_DELETE,
}

const GATEWAY_ENDPOINT : string = '/gateway-endpoint'
const GATEWAY_ENDPOINT_CREATE : string = '/create'
const GATEWAY_ENDPOINT_GET_ALL : string = '/get-all'
const GATEWAY_ENDPOINT_DELETE : string = '/delete'
export const ROUTES_GATEWAY_ENDPOINT = {
    GATEWAY_ENDPOINT,
    GATEWAY_ENDPOINT_CREATE,
    GATEWAY_ENDPOINT_GET_ALL,
    GATEWAY_ENDPOINT_DELETE,
}


const GATEWAY_ENTRY : string = '/gateway-entry'
const GATEWAY_ENTRY_APPLICATION : string = '/app'
export const ROUTES_GATEWAY_ENTRY = {
    GATEWAY_ENTRY,
    GATEWAY_ENTRY_APPLICATION,
}