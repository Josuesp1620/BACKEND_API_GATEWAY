import { GatewayEndPointEntity as Entity } from '@/gateway_endpoint/domain/entities'
import { GatewayEndPointRepository as Repository } from '@/gateway_endpoint/domain/repositories'
import { GatewayEndPointSequelize as Sequelize } from '@/gateway_endpoint/infrastructure/driven-adapter/sequelize'

class ImplementationSequelize implements Repository {

    async getAll(): Promise<Entity[]> {
        const result = await Sequelize.findAll();
        const entities: Entity[] = result.map((sequelize: Sequelize) => sequelize.toJSON() as Entity);
        return entities;
    }    

    async save (data: Entity): Promise<Entity | null> {
        try{
            const newEntity = await Sequelize.create({...data});
            return newEntity.toJSON() as Entity;
        }catch {
            return null
        }
        
    }   

    async update(data: Entity): Promise<Entity | null> {
        const [affectedCount, updatedEntities] = await Sequelize.update(data, { where: { id: data.id }, returning: true });
        
        if (affectedCount > 0 && updatedEntities.length > 0) {
            return updatedEntities[0].toJSON() as Entity;
        }
    
        return null;
    }    

    async delete (id: string) : Promise<void> {
        await Sequelize.destroy({ where: { id } })
    }

    async getById(id: string): Promise<Entity | null> {
        const foundEntity = await Sequelize.findOne({ where: { id } });
    
        if (!foundEntity) return null;
    
        return foundEntity.toJSON() as Entity;
    }    

}

export {
    ImplementationSequelize
}