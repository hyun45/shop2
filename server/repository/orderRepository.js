const OrderItem = require('../models/orderItem');

exports.createOrder = (productId, userId, amount, price, payment) => OrderItem.create({productId : productId, userId : userId, amount : amount, price : price, payment : payment});