import { ApplicationAPI } from "../entities/ApplicationAPI"

export interface ApplicationAPIRepository {
    getAll: () => Promise<ApplicationAPI[]>
    save: (user: ApplicationAPI) => Promise<ApplicationAPI>
    update: (user: ApplicationAPI) => Promise<ApplicationAPI>
    delete: (id: string) => Promise<void>
    getById: (id: string) => Promise<ApplicationAPI | null>
}
