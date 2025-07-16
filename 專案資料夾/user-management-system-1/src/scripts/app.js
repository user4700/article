// app.js

document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');

    userForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const userName = document.getElementById('userName').value;
        addUser(userName);
        userForm.reset();
    });

    function addUser(name) {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        userList.appendChild(listItem);
    }
});