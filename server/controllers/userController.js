const { User } = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class Controller {
    static register(req, res, next) {
        const { email, password } = req.body;
        const newRegister = { email, password };
        User.create(newRegister)
            .then((data) => {
                res.status(201).json({ message: { id: data.id, email: data.email } });
            })
            .catch((err) => {
                if (err.errors === undefined) {
                    next({
                        code: 500,
                        msg: "Internal server error",
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

    static login(req, res, next) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then((data) => {
                if (!data) {
                    /// outputnya null kalo salah
                    next({
                        code: 404,
                        msg: "User is not registered",
                    });
                } else {
                    if (bcrypt.compareSync(password, data.password)) {
                        let access_token = jwt.sign({ id: data.id, email: data.email }, "secret");
                        res.status(200).json({ access_token, email: data.email });
                    } else {
                        next({
                            code: 401,
                            msg: "email/password is incorrect",
                        });
                    }
                }
            })
            .catch((err) => {
                next({
                    code: 500,
                    msg: "Internal server error",
                });
            });
    }

    static allUsers(req, res, next) {
        User.findAll()
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
}

module.exports = Controller;
