const bcryptjs = require('bcryptjs');
const User = require ('../models/user');
const Publication = require ('../models/publication');

const {response} = require('express');

const useerPost = async (req,res) => {
    const {name,email,password} = req.body;
    const user = new User({name,email,password});

    const salt = bcryptjs.genSaltSync();
    User.password = bcryptjs.genSaltSync(password, salt);

    await user.save();
    res.status(202).json({
        user
    });
   
}

const usersGet = async (req, res = response) => {
    const {limite,desde} = req.query;
    const query = {estado : true };

    const [total, user ] = await Promise.all([

        User.countDocuments(query),
        User.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        users
    });
}