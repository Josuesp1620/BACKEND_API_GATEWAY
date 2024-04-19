export interface ROUTE_REQUEST {
    path: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
}

export interface DATA_REQUEST {
    data: Object
}