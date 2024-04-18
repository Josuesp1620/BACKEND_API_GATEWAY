import { sequelize } from '@shared/services/sequelize-conector/index'
import dotenv from 'dotenv'
import { DataTypes, Model } from 'sequelize';
import { loggerDataBase } from '@shared/utils/Logger';

dotenv.config()

class ApplicationAPISequelize extends Model {}
  
ApplicationAPISequelize.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        upstream_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        origin_urls: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: [],
        },
        api_key: {
            type: DataTypes.STRING,
        },        

    },
    {
        sequelize,
        modelName: 'Aplication_API',
        tableName: 'application_api',
        timestamps: true,
    }
)


ApplicationAPISequelize.sync()
.then(() => {
    loggerDataBase.warn('TABLA APPLICATION API => Las tablas se han sincronizado correctamente');
})
.catch((error) => {
    loggerDataBase.warn('TABLA APPLICATION API => Error al sincronizar las tablas:', error);
});


export { ApplicationAPISequelize }