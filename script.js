const students = [];

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();

    if (students.some(student => student.roll === roll)) {
        document.getElementById("message").textContent =
            "This roll number is already registered.";
        return;
    }

    students.push({ name, roll, email });

    document.getElementById("message").textContent =
        "Student registered successfully!";

    this.reset();
});
