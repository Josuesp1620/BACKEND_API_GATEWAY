import { EndPointAPI as Entity } from "../../domain/entities/EndPointAPI"
import { EndPointApi as Repository } from "../../domain/repositories"

export class GetByIdEndPointApi {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(id: string): Promise<Entity | null > {
        const entity : Entity | null = await this._repository.getById(id)
        return entity
    }
}
