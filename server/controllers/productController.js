const { Product, Category } = require("../models");

class Controller {
    static allProduct(req, res, next) {
        Product.findAll({ include: Category })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                next({
                    code: 500,
                    msg: "Internal server error",
                });
            });
    }

    static productById(req, res, next) {
        const id = +req.params.id;
        Product.findOne({
            where: {
                id,
            },
            include: Category,
        })
            .then((data) => {
                if (data) {
                    res.status(200).json({ data: data });
                } else {
                    next({
                        code: 404,
                        msg: "error not found",
                    });
                }
            })
            .catch((err) => {
                next({
                    code: 500,
                    msg: "Internal server error",
                });
            });
    }

    static addProduct(req, res, next) {
        console.log("masuk controller");
        console.log(req.body);
        const { name, descriptions, price, image_url, CategoryId } = req.body;
        const newProduct = {
            name,
            descriptions,
            price,
            image_url,
            CategoryId,
        };
        Product.create(newProduct)
            .then((data) => {
                console.log(data);
                res.status(201).json({ data });
            })
            .catch((err) => {
                if (err.errors === undefined) {
                    next({
                        code: 500,
                        msg: err.message,
                    });
                } else {
                    if (err.errors.length) {
                        let errors = err.errors.map((el) => el.message);
                        next({
                            code: 400,
                            msg: errors,
                        });
                    } else {
                        next({
                            code: 500,
                            msg: "Internal server error",
                        });
                    }
                }
            });
    }
}

module.exports = Controller;
