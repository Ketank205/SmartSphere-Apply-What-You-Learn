import User from "../models/user.js";

export const createUser = async (req, res) => {
    try {

        const { name, email, password, role } = req.body;
        const user = new User({
            name, email, password, role
        });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllAdmins = async (req, res) => {
    try {
        const admins = await User.find({ role: "Admin" });
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
}


export const getAllTeachers = async (req, res) => {
    try {
        const teachers = await User.find({ role: "Teacher" });
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
}


export const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: "Student" });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    };
}