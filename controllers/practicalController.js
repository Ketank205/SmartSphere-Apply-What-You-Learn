import Practical from "../models/practicalSchema.js";
import User from "../models/user.js";

export const createPractical = async (req, res) => {
    try {
        const { subjectId, title, description, email} = req.body;
        const user = await User.findOne({ email });
        const createdBy = user._id;
        const practical = new Practical({
            subjectId,
            title,
            description,
            createdBy
        });
        const savedPractical = await practical.save();
        res.status(200).json(savedPractical);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllPracticals = async (req, res) => {
    try {
        const practicals = await Practical.find();
        res.status(200).json(practicals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const enrollPractical = async (req, res) => {
    try {
        const { practicalId, email} = req.body;
        const practical = await Practical.findById(practicalId);
        const student = await User.findOne({ email });
        practical.enrolledStudents.push(student._id);
        await practical.save();
        res.status(200).json(practical);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};