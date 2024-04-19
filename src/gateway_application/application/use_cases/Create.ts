import { GatewayApplicationEntity as Entity } from "@/gateway_application/domain/entities"
import { GatewayApplicationRepository as Repository } from "@/gateway_application/domain/repositories"
import { CreateEntityException } from "@/shared/exceptions"

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<Entity> {
       
        const entity: Entity | null = await this._repository.save(data)

        if(entity === null) throw new CreateEntityException()
        
        return entity
    }
}
