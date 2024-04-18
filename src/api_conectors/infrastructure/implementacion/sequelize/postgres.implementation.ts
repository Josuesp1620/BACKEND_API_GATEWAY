import { ApplicationAPI } from "src/endpoints_routes/domain/entities/ApplicationAPI"
import { ApplicationAPIRepository } from "src/endpoints_routes/domain/repositories/ApplicationAPIRepository"
import { ApplicationAPISequelize } from "../../driven-adapter/sequelize/postgres.model"

class PostgresDBApplicationAPIRepository implements ApplicationAPIRepository {

    async getAll (): Promise<ApplicationAPI[]> {
        const result = await ApplicationAPISequelize.findAll()
        const users: ApplicationAPI[] = result.map((ApplicationAPISequelize: ApplicationAPISequelize) => ApplicationAPISequelize.toJSON() as ApplicationAPI)
        return users
    }

    async save (data: ApplicationAPI): Promise<ApplicationAPI> {
        const newApplicationAPI = await ApplicationAPISequelize.create({
            name: data.name,
            upstream_url: data.upstream_url,
            origin_urls: data.origin_urls,
        })
        return newApplicationAPI.toJSON() as ApplicationAPI
    }   

    async update (data: ApplicationAPI) : Promise<ApplicationAPI | any> {
        const [affectedCount, dataUpdated] = await ApplicationAPISequelize.update(data, { where: { id: data.id }, returning: true })
        
        if (affectedCount > 0 && dataUpdated.length > 0) {
            return dataUpdated[0].toJSON() as ApplicationAPISequelize
        }
    
        return null 
    }

    async delete (id: string) : Promise<void> {
        await ApplicationAPISequelize.destroy({ where: { id } })
    }

    async getById (id: string): Promise<ApplicationAPI | null> {
        const dataNotFound = await ApplicationAPISequelize.findOne({ where: { id } })

        if (!dataNotFound) return null

        return dataNotFound.toJSON() as ApplicationAPI
    }

}

export {
    PostgresDBApplicationAPIRepository
}