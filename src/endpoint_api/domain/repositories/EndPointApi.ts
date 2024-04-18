import { EndPointAPI } from "../entities/EndPointAPI"

export interface EndPointApi {
    getAll: () => Promise<EndPointAPI[]>
    save: (user: EndPointAPI) => Promise<EndPointAPI>
    update: (user: EndPointAPI) => Promise<EndPointAPI>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<EndPointAPI | null>
}
