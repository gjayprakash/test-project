const ProductModel = require('../models/contactModel');
const { v4: uuidv4 } = require('uuid');

function GetProducts() {
    return new Promise((resolve, reject) => {
        ProductModel.find({}, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    })
}

function AddProduct(product) {
    return new Promise((resolve, reject) => {
        let prd = new ProductModel({ ...product, _id: uuidv4() });
        prd.save((err) => {
            if (!err) {
                resolve({ status: 200, message: 'Product added successfully' });
            } else {
                reject(err);
            }
        });
    });
}

function GetProduct(id) {
    return new Promise((resolve, reject) => {
        ProductModel.findOne({ '_id': id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function DeleteProduct(id) {
    return new Promise((resolve, reject) => {
        ProductModel.deleteOne({ '_id': id }, (err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        });
    });
}

function UpdateProduct(id, product) {
    return new Promise((resolve, reject) => {
        let prd = new ProductModel(product);
        ProductModel.findOneAndUpdate({'_id': id}, prd, (err, data) => {
            if (!err) {
                resolve({ status: 200, message: 'Product updated successfully' });
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { GetProducts, AddProduct, GetProduct, DeleteProduct, UpdateProduct }