import exress from "express";
import { createUser } from "../controllers/userController.js";
import { isAdmin, isTeacher, notStudent} from "../middlewares/middleware.js";
import { getAllUsers, getAllAdmins, getAllTeachers, getAllStudents} from "../controllers/userController.js";
import { createSubject, getAllSubjects} from "../controllers/subjectController.js";
import { createPractical, getAllPracticals, enrollPractical} from "../controllers/practicalController.js";


const router = exress.Router();

router.post("/users/create", createUser);
router.get("/users/getAll", isAdmin, getAllUsers);
router.get("/admins/getAll", isAdmin, getAllAdmins);
router.get("/teachers/getAll", isAdmin, getAllTeachers);
router.get("/students/getAll", notStudent, getAllStudents);

router.post("/subjects/create", isAdmin, createSubject);
router.get("/subjects/getAll", getAllSubjects);

router.post("/practicals/create", isTeacher, createPractical);
router.get("/practicals/getAll", getAllPracticals);
router.post("/practicals/enroll", notStudent, enrollPractical);

export default router;