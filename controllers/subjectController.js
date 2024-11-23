import Subject from "../models/subject.js";

export const createSubject = async (req, res) => {
    try {
        const { name, code, createdBy } = req.body;
        const subject = new Subject({ name, code, createdBy });

        const savedSubject = await subject.save();
        res.status(201).json(savedSubject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};