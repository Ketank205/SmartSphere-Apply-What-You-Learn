
import User from "../models/user.js";

export const isAdmin = async (req, res, next) => {
    try {

        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user.role == "Admin") {
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const isTeacher = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user.role == "Teacher") {
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const notStudent = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user.role != "Student") {
            next();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};