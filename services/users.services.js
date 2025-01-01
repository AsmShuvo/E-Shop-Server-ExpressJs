const userModel = require("../model/userModel");

exports.createUser = async (data) => {
    try {
        console.log("create user called with data: ", data);
        const res = await userModel.create(data);
        console.log("created user: ", res);
        return res;
    } catch (error) {
        console.error("Error creating user:", error.message);
        throw new Error("Could not create user. Please try again.");
    }
};

exports.getUser = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error("Error fetching users:", error.message);
        throw new Error("Could not fetch users. Please try again.");
    }
};

exports.findUserByEmail = async (email) => {
    try {
        const user = await userModel.findOne({ email });
        return user;
    } catch (error) {
        console.error("Error finding user by email:", error.message);
        throw new Error("Could not find user. Please try again.");
    }
};