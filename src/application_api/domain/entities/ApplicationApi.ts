export interface ApplicationApi {
    id?: string
    name?: string
    upstream_url?: string
    active?: boolean
    origin_urls?: string[]
    api_key?: string
    createdAt?: Date
    updatedAt?: Date
}