import { v4 as uuid } from 'uuid'
import User from './modules/user.js'
import Table from './modules/table.js'
import UserForm from './modules/userForm.js'
import Modal from './modules/modal.js'

function createUser() {
    const userName = document.querySelector('.userName').value
    const birthday = document.querySelector('.birthday').value
    const subscribe = document.querySelector('.subscribe').checked
    users.push(new User(uuid(), 'avatar', userName, birthday, subscribe))
    table.refresh()
    addUserModal.close()
    return false
}

function editUser() {
    changeDesc = (userName, birthday, subscribe) => {
        let user = users.find(x => x.id === findId)
        user.userName = userName
        user.birthday = birthday
        user.subscribe = subscribe
    }
    const userName = document.querySelector('.userName').value
    const birthday = document.querySelector('.birthday').value
    const subscribe = document.querySelector('.subscribe').checked
    changeDesc(userName, birthday, subscribe)
    table.refresh()
    editUserModal.close()
    return false
}

let users = []
if (JSON.parse(localStorage.getItem('Users'))) {
    users = JSON.parse(localStorage.getItem('Users'))
}

const formInputs = [
    {
        title: 'ФИО: ',
        type: 'text',
        className: 'userName',
        placeholder: 'ФИО'
    },
    {
        title: 'Дата рождения: ',
        type: 'date',
        className: 'birthday',
        placeholder: 'Дата рождения'
    },
    {
        title: 'Подписаться на рассылку ',
        type: 'checkbox',
        className: 'subscribe',
        placeholder: 'Подписаться на рассылку'
    }
]

const tBody = document.querySelector('.tbody')
const addUserModal = new Modal(new UserForm(formInputs).formEl, createUser)
const editUserModal = new Modal(new UserForm(formInputs).formEl, editUser)
const openModal = document.querySelector('.js-open-modal')
openModal.addEventListener('click', () => addUserModal.open(new UserForm(formInputs).formEl))

const actions = [
    {
        title: 'Редактировать',
        classes: 'btn-icon btn-edit',
        onClick: (editItems) => {
            findId = editItems.id
            editUserModal.open(new UserForm(formInputs, editItems).formEl)
        }
    },
    {
        title: 'Удалить',
        classes: 'btn-icon btn-delete',
        onClick: (delRow) => {
            users.splice(users.indexOf(delRow), 1)
            table.refresh()
        }
    }]

const userTableColumns = [
    {
        field: 'avatar'
    },
    {
        field: 'userName'
    },
    {
        field: 'birthday'
    },
    {
        field: 'subscribe',
        render: (value) => value ? 'Есть' : 'Нет'
    }]
const table = new Table(tBody, userTableColumns, users, actions)

function search() {
    let input = document.querySelector('.inputSearch')
    let filter = input.value.toUpperCase()
    let tbody = document.querySelector('tbody')
    let tr = tbody.querySelectorAll('tr')

    for (let i = 0; i < tr.length; i++) {
        let a = tr[i]
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = ''
        } else {
            tr[i].style.display = 'none'
        }
    }
}
document.addEventListener('keyup', search)




let resElement = document.querySelector('.tbody')
import axios from "axios";
axios({
    method: 'get',
    url: 'https://reqres.in/api/users?page=2'
}).then(res => {
    // Вывод на экран ответа сервера
    console.log(res.data.data);
    resElement.innerHTML = res.data.data;
})
