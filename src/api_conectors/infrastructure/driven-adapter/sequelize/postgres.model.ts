import { sequelize } from "../../../../shared/infrastructure/driven-adapter/sequelize-conector"
import dotenv from "dotenv"
import { DataTypes, Model } from "sequelize";
import { loggerDataBase } from "../../../../shared/utils/Logger";

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

class EndPointAPISequelize extends Model {}
  
ApplicationAPISequelize.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        app_id: {
            type: DataTypes.STRING,
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
            defaultValue: [],
        },        

    },
    {
        sequelize,
        modelName: 'EndPointAPI',
        tableName: 'endpoint_api',
        timestamps: true,
    }
)


EndPointAPISequelize.sync()
.then(() => {
    loggerDataBase.warn('TABLA ENDPOINT API => Las tablas se han sincronizado correctamente');
})
.catch((error) => {
    loggerDataBase.warn('TABLA ENDPOINT API => Error al sincronizar las tablas:', error);
});


export { EndPointAPISequelize }