import { sequelize } from '@/shared/services/sequelize-conector'
import dotenv from 'dotenv'
import { DataTypes, Model } from 'sequelize';
import { loggerDataBase } from '@/shared/utils/Logger';
import { GatewayApplicationSequelize } from '@/gateway_application/infrastructure/driven-adapter/sequelize';
dotenv.config()

class GatewayEndPointSequelize extends Model {}
  
GatewayEndPointSequelize.init(
    {
        id: {
            unique: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        app_id: {            
            type: DataTypes.UUID,
            references: {
                model: GatewayApplicationSequelize,
                key: 'id',
            },
            onDelete: 'CASCADE',             
            allowNull: false
        },
        route: {
            type: DataTypes.STRING,
            allowNull: false
        },
        method: {
            type: DataTypes.ENUM('GET', 'POST', 'PUT', 'DELETE', 'PATCH'),
            defaultValue: 'GET',
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },        

    },
    {
        sequelize,
        modelName: 'Gateway_EndPoint',
        tableName: 'gateway_endpoint',
        timestamps: true,
    }
)


GatewayEndPointSequelize.sync()
.then(() => {
    loggerDataBase.warn('TABLA ENDPOINT API => Las tablas se han sincronizado correctamente');
})
.catch((error) => {
    loggerDataBase.warn('TABLA ENDPOINT API => Error al sincronizar las tablas:', error);
});


export { GatewayEndPointSequelize }