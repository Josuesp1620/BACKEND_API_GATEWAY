import { ApplicationApi as Entity } from "@/application_api/domain/entities"
import { ApplicationApi as Repository } from "@/application_api/domain/repositories"

export class CreateUseCase {

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
