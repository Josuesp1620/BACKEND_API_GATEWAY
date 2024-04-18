import { ApplicationApi as Entity } from '@/application_api/domain/entities'
import { ApplicationApi as Repository } from '@/application_api/domain/repositories'
import { ApplicationApiSequelize as Sequelize } from '@/application_api/infrastructure/driven-adapter/sequelize'

class ImplementationSequelize implements Repository {

    async getAll(): Promise<Entity[]> {
        const result = await Sequelize.findAll();
        const entities: Entity[] = result.map((sequelize: Sequelize) => sequelize.toJSON() as Entity);
        return entities;
    }    

    async save (data: Entity): Promise<Entity> {
        const newEntity = await Sequelize.create({
            name: data.name,
            upstream_url: data.upstream_url,
            origin_urls: data.origin_urls,
        });
        return newEntity.toJSON() as Entity;
    }   

    async update(data: Entity): Promise<Entity | any> {
        const [affectedCount, updatedEntities] = await Sequelize.update(data, { where: { id: data.id }, returning: true });
        
        if (affectedCount > 0 && updatedEntities.length > 0) {
            return updatedEntities[0].toJSON() as Sequelize;
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