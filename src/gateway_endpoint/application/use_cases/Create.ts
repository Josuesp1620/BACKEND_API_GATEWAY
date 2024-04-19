import { GatewayEndPointEntity as Entity } from '@/gateway_endpoint/domain/entities'
import { GatewayEndPointRepository as Repository } from '@/gateway_endpoint/domain/repositories';
import { CreateEntityException } from '@/shared/exceptions';

export class CreateUseCase {

    private readonly _repository: Repository

    constructor(
        repository: Repository
    ) {
        this._repository = repository
    }

    async run(data: Entity): Promise<Entity> {
       
        const created : Entity | null = await this._repository.save(data)
        if(created === null) throw new CreateEntityException();
        return created
    }
}
