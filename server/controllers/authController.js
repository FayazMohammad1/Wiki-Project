const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const createError = require('../utils/appError');

// REGISTER USER
exports.signup = async (req, res, next) => {
    try {
        console.log("Signup request body:", req.body);  // Log request body
        const user = await User.findOne({ email: req.body.email });
        if (user) 
        {
            if(req.body.GOOGLE)
            {
                const token = jwt.sign({ _id: user._id }, 'secretkey123', {
                    expiresIn: '90d',
                });
                res.status(200).json({
                    status: 'success',
                    token,
                    message: 'Logged in successfully',
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email
                    }
                });
            }
            else
            {
                return next(new createError('User already exists!', 400));
            }
        }
        else
        {
            delete req.body.GOOGLE;
            const hashedPassword = await bcrypt.hash(req.body.password, 12);
            const newUser = await User.create({
                ...req.body,
                password: hashedPassword,
            });
                    // ASSIGN JWT TO USER
        const token = jwt.sign({ _id: newUser._id }, 'secretkey123', {
            expiresIn: '90d',
        });
        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
            user: {
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });


        }




    } catch (error) {
        console.error(error);  // Log error
        next(error);
    }
};

// LOGGING USER
exports.login = async (req, res, next) => {
    try {
        console.log("Login request body:", req.body);  // Log request body
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) return next(new createError("User not found!", 404));

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return next(new createError('Invalid email or password', 401));
        }

        const token = jwt.sign({ _id: user._id }, 'secretkey123', {
            expiresIn: '90d',
        });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error(error);  // Log error
        next(error);
    }
};
