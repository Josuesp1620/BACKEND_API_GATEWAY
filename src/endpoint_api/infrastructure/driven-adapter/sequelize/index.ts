import { sequelize } from '@/shared/services/sequelize-conector'
import dotenv from 'dotenv'
import { DataTypes, Model } from 'sequelize';
import { loggerDataBase } from '@/shared/utils/Logger';
import { ApplicationApiSequelize } from '@/application_api/infrastructure/driven-adapter/sequelize';
dotenv.config()

class EndPointApiSequelize extends Model {}
  
EndPointApiSequelize.init(
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
                model: ApplicationApiSequelize,
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
        modelName: 'EndPointAPI',
        tableName: 'endpoint_api',
        timestamps: true,
    }
)


EndPointApiSequelize.sync()
.then(() => {
    loggerDataBase.warn('TABLA ENDPOINT API => Las tablas se han sincronizado correctamente');
})
.catch((error) => {
    loggerDataBase.warn('TABLA ENDPOINT API => Error al sincronizar las tablas:', error);
});


export { EndPointApiSequelize }