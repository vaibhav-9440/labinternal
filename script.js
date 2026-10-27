const students = [];

document.getElementById("studentForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (students.some(student => student.roll.toLowerCase() === roll.toLowerCase())) {
        message.textContent = "Roll number already registered.";
        return;
    }

    students.push({ name, roll, email });
    message.textContent = "Student registered successfully!";
    this.reset();
});

document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const result = document.getElementById("result");

    result.replaceChildren();

    if (!query) {
        result.textContent = "Please enter a name or roll number.";
        return;
    }

    const matches = students.filter(student =>
        student.name.toLowerCase().includes(query) ||
        student.roll.toLowerCase() === query
    );

    if (matches.length === 0) {
        result.textContent = "No student found.";
        return;
    }

    matches.forEach(student => {
        const item = document.createElement("p");
        item.textContent =
            `Name: ${student.name}, Roll: ${student.roll}, Email: ${student.email}`;
        result.appendChild(item);
    });
});
