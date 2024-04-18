import { sequelize } from '@/shared/services/sequelize-conector/index'
import dotenv from 'dotenv'
import { DataTypes, Model } from 'sequelize';
import { loggerDataBase } from '@/shared/utils/Logger';

dotenv.config()

class ApplicationApiSequelize extends Model {}
  
ApplicationApiSequelize.init(
    {
        id: {
            unique: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            unique: true,
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
            unique: true,
            type: DataTypes.STRING,
        },        

    },
    {
        sequelize,
        modelName: 'Aplication_Api',
        tableName: 'application_api',
        timestamps: true,
    }
)


ApplicationApiSequelize.sync()
.then(() => {
    loggerDataBase.warn('TABLA APPLICATION API => Las tablas se han sincronizado correctamente');
})
.catch((error) => {
    loggerDataBase.warn('TABLA APPLICATION API => Error al sincronizar las tablas:', error);
});


export { ApplicationApiSequelize }