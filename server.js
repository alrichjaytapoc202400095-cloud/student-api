const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

let students = [
    { id: 1, name: "Juan Dela Cruz", course: "BSIT", year: 1 },
    { id: 2, name: "Maria Santos", course: "BSCS", year: 2 }
];

let nextId = 3;

app.get("/", (req, res) => {
    res.json({ message: "Student API is running!" });
});

app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

app.get("/api/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(student);
});

app.post("/api/students", (req, res) => {
    const { name, course, year } = req.body;

    if (
        typeof name !== "string" || !name.trim() ||
        typeof course !== "string" || !course.trim() ||
        !Number.isInteger(year) || year < 1 || year > 4
    ) {
        return res.status(400).json({
            message: "Provide a valid name, course, and year (1-4)."
        });
    }

    const student = {
        id: nextId++,
        name: name.trim(),
        course: course.trim(),
        year
    };

    students.push(student);
    res.status(201).json(student);
});

app.put("/api/students/:id", (req, res) => {
    const student = students.find(s => s.id === Number(req.params.id));

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, course, year } = req.body;

    if (
        typeof name !== "string" || !name.trim() ||
        typeof course !== "string" || !course.trim() ||
        !Number.isInteger(year) || year < 1 || year > 4
    ) {
        return res.status(400).json({
            message: "Provide a valid name, course, and year (1-4)."
        });
    }

    student.name = name.trim();
    student.course = course.trim();
    student.year = year;

    res.status(200).json(student);
});

app.delete("/api/students/:id", (req, res) => {
    const index = students.findIndex(
        s => s.id === Number(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({ message: "Invalid JSON body" });
    }
    next(err);
});

app.listen(PORT, () => {
    console.log(`Student API running on port ${PORT}`);
});
