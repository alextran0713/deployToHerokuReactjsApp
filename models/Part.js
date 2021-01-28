const { Sequelize, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Part extends Model {}
    Part.init({
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        }
      }, {    
        sequelize,
        timestamps:false,
        tableName: 'parts',
        modelName: 'Part',
    });
    return Part
}