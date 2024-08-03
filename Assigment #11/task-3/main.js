let students = [];
let editIndex = -1;

function addStudent() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;

    if (editIndex === -1) {
        students.push({ name, age, grade });
    } else {
        students[editIndex] = { name, age, grade };
        editIndex = -1;
    }

    document.getElementById('studentForm').reset();
    renderTable();
}

function renderTable() {
    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    students.forEach((student, index) => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        const ageCell = document.createElement('td');
        ageCell.textContent = student.age;
        row.appendChild(ageCell);

        const gradeCell = document.createElement('td');
        gradeCell.textContent = student.grade;
        row.appendChild(gradeCell);

        const actionCell = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(index);
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(index);
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);
        tableBody.appendChild(row);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById('editName').value = student.name;
    document.getElementById('editAge').value = student.age;
    document.getElementById('editGrade').value = student.grade;
    document.getElementById('editForm').classList.remove('hidden');
    editIndex = index;
}

function saveEdit() {
    const name = document.getElementById('editName').value;
    const age = document.getElementById('editAge').value;
    const grade = document.getElementById('editGrade').value;

    students[editIndex] = { name, age, grade };
    document.getElementById('editForm').classList.add('hidden');
    renderTable();
}

function cancelEdit() {
    document.getElementById('editForm').classList.add('hidden');
    editIndex = -1;
}

function deleteStudent(index) {
    students.splice(index, 1);
    renderTable();
}
