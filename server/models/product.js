const Sequelize = require('sequelize');

module.exports = class Product extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            productId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING(255),
                allowNull: false
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            price: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            image1: {
                type: Sequelize.STRING,
                allowNull: true
            },
            stock: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            mainCategory: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            subCategory: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
            }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Product',
            tableName: 'product',
            paranoid: false,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        })
    }
}

// mainCategory -> 1 : 강아지, 2 : 고양이
// subCategory -> 11 : 강아지 장난감, 12: 강아지 사료, 13: 강아지 간식, 14: 강아지 옷, 15: 강아지 용품
//                21 : 고양이 장난감, 22: 고양이 사료, 23: 고양이 간식, 24: 고양이 옷, 25: 고양이 용품