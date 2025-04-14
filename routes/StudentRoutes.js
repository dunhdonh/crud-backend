const express = require("express");
const {
    getAllStudents,
    createStudent,
    getStudentById,
    getStudentByName,
    getStudentByAddress,
    updateStudent,
    deleteStudent,
} = require("../controllers/StudentController");

const router = express.Router();

router.route("/").get(getAllStudents).post(createStudent);
router.route("/search/addr").get(getStudentByAddress);
router.route("/search/name").get(getStudentByName).put(updateStudent).delete(deleteStudent);
router.route("/:id").get(getStudentById).put(updateStudent).delete(deleteStudent);

module.exports = router;