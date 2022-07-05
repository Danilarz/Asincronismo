const formUsers = document.getElementById('form-add-users');
const tableUsers = document.getElementById('table-users');

const createUser = async (e) => {
    e.preventDefault()
    const formU = e.target

    const user = {
        name: formU.name.value, 
        email: formU.email.value,
        pass: formU.pass.value
    }

    await addUser(user)
    loadUsers()
    
}

formUsers.addEventListener('submit', createUser)


const loadUsers = async () => {
    const users = await getUsers()

    const tbody = tableUsers.querySelector('tbody')

    tbody.innerHTML = '';

    users.forEach(us => {
        const tr = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdEmail = document.createElement('td')
        const txtName = document.createTextNode(us.name)
        const txtEmail = document.createTextNode(us.email)
        const tdPass = document.createElement('td')
        const textPass = document.createTextNode(us.pass);

        tr.appendChild(tdName)
        t
