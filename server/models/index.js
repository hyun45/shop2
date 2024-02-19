const Sequelize = require('sequelize');
const User = require('./user');
const Product = require('./product');
const CartItem = require('./cartItem');
const WishList = require('./wishList');
const Review = require('./review');
const Payment = require('./payment');
const Order = require('./order');
const OrderItem = require('./orderItem');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
    config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Product = Product;
db.CartItem = CartItem;
db.WishList = WishList;
db.Review = Review;
db.Payment = Payment;
db.Order = Order;
db.OrderItem = OrderItem;

User.init(sequelize);
Product.init(sequelize);
CartItem.init(sequelize);
WishList.init(sequelize);
Review.init(sequelize);
Payment.init(sequelize);
Order.init(sequelize);
OrderItem.init(sequelize);

CartItem.associate(db);
WishList.associate(db);
Review.associate(db);
Order.associate(db);
OrderItem.associate(db);

module.exports = db;
