import { ApplicationAPI as Entity } from "../../domain/entities"
import { ApplicationAPI as Repository } from "../../domain/repositories"

export class CreateApplicationApi {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<any> {
       
        const entity: Entity = await this._repository.save(data)

        return entity
    }
}
