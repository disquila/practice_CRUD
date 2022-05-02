import InputWithLabel from './inputWithLabel.js'
export default class UserForm {
    formEl = document.createElement('form')
    heading = document.createElement('h1')
    formBtn = document.createElement('button')

    constructor(formInputs, user) {
        this.formInputs = formInputs
        this.user = user
        this.init()
    }

    init() {
        this.formEl.appendChild(this.heading)
        if (this.user) {
            this.heading.textContent = 'Редактировать запись'
            this.formBtn.textContent = 'Сохранить'
        } else {
            this.heading.textContent = 'Создать запись'
            this.formBtn.textContent = 'Создать'
        }
        this.heading.classList.add('modal-title')
        if (this.formInputs.length) {
            this.formInputs.map((inputs) => {
                let value = undefined
                let checked = undefined
                if (this.user) {
                    value = this.user[inputs.className]
                    checked = this.user[inputs.className]
                }
                const input = new InputWithLabel(this.formEl, inputs.title, inputs.type, inputs.className, inputs.placeholder, value, checked)
                return input
            })
        }
        this.formEl.appendChild(this.formBtn)
        this.formBtn.classList.add('submit')
    }
}