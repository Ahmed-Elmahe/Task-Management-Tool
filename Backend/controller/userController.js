const usersModel = require('../model/usersModel');
const bcryptjs = require('bcryptjs');

module.exports = {
    registration: async (req, res) => {
        var { firstName, lastName, username, email, password, rePassword, dateOfBirth, address1, address2 } = req.body;
        if(firstName === "" || lastName === "" || username === "" || email === "" || password === "" || rePassword === "" || dateOfBirth === "" || address1 === "") {
            return res.json({
                status: "FAILED",
                message: "Empty input fields!"
            });
        }
        else if(!/^([a-zA-Z ])*$/.test(firstName) || !/^([a-zA-Z ]){2,30}$/.test(lastName)) {
            return res.json({
                status: "FAILED",
                message: "Invalid first name or last name entered"
            });
        }
        else if(!/^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(username)) {
            return res.json({
                status: "FAILED",
                message: "Invalid username entered"
            });
        }
        else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            return res.json({
                status: "FAILED",
                message: "Invalid email entered"
            });
        }
        else if(password.length < 8) {
            return res.json({
                status: "FAILED",
                message: "Password is too short"
            });
        }
        else if(rePassword != password) {
            return res.json({
                status: "FAILED",
                message: "Confirm Password"
            });
        }
        else if(!new Date(dateOfBirth).getTime()) {
            return res.json({
                status: "FAILED",
                message: "Invalid date of birth entered"
            });
        }
        else if(!/\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\./.test(address1)) {
            return res.json({
                status: "FAILED",
                message: "Invalid address entered"
            });
        }
        else {
           return await usersModel.find({email, username}).then( async result =>{
                if(result.length) {
                    return res.json({
                        status: "FAILED",
                        message: "User with the provided username or email already exist"
                    });
                }
                else {
                    const newUser = new usersModel({
                        firstName, 
                        lastName, 
                        username, 
                        email, 
                        password, 
                        dateOfBirth, 
                        address1, 
                        address2
                    });
                    await newUser.save().then(result => {
                        return res.json({
                            status: "SUCCESS",
                            message: "Registration successful",
                            data: result
                        }).catch(error => {
                            console.log(error);
                            return res.json({
                                status: "FAILED",
                                message: "An error occurred while save user account!"
                            })
                        }) 
                    })
                }
            }).catch(error =>{
                console.log(error);
                return res.json({
                    status: "FAILED",
                    message: "An error occurred while checking for existing user!"
                });
            })
        }

    },

    logIn: async (req, res) =>{
        var {email, password} = req.body;
        if(email === "" || password === "") {
            return res.json({
                status: "FAILED",
                message: "Empty credentials supplied"
            });
        }
        else {
            await usersModel.find({email}).then(data => {
                if(data.length) {
                    const hashedPassword = data[0].password;
                    bcryptjs.compare(password, hashedPassword).then(result => {
                        if(result) {
                            return res.json({
                                status: "SUCCESS",
                                message: "Sign-in successful",
                                data: data
                            });
                        }
                        else {
                            return res.json({
                                status: "FAILED",
                                message: "Invalid password entered!"
                            });
                        }
                    }).catch(error => {
                        return res.json({
                            status: "FAILED",
                            message: `An ${error} occurred while comparing passwords`
                        });
                    });
                }
                else {
                    return res.json({
                        status: "FAILED",
                        message: "Invalid credentials entered!"
                    });     
                }
            }).catch(error => {
                return res.json({
                    status: "FAILED",
                    message: `${error} occurred while checking for existing user`
                });
            })
        }
        
    }
}