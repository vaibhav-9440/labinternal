const students = [
    { name: "Ravi Kumar", roll: "101", email: "ravi@gmail.com" },
    { name: "Priya Sharma", roll: "102", email: "priya@gmail.com" },
    { name: "Arun Kumar", roll: "103", email: "arun@gmail.com" }
];

document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput")
        .value.trim().toLowerCase();

    const result = document.getElementById("result");

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

    result.replaceChildren();

    matches.forEach(student => {
        const card = document.createElement("div");
        card.textContent =
            `Name: ${student.name} | Roll: ${student.roll} | Email: ${student.email}`;
        result.appendChild(card);
    });
});
