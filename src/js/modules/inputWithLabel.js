export default class InputWithLabel {
    labelEl = document.createElement('label')
    inputEl = document.createElement('input')
    value = this.inputEl.value
    checked = this.inputEl.checked

    constructor(container, text, type, className, placeholder, value, checked) {
        this.container = container
        this.text = text
        this.type = type
        this.className = className
        this.placeholder = placeholder
        if (value) {
            this.inputEl.value = value
        }
        if (checked) {
            this.inputEl.checked = checked
        }
        this.init()
    }

    init() {
        this.labelEl.textContent = this.text
        this.labelEl.style.display = 'block'
        this.container.appendChild(this.labelEl)
        this.labelEl.appendChild(this.inputEl)
        this.inputEl.type = this.type
        this.inputEl.classList.add(this.className)
        this.inputEl.placeholder = this.placeholder
    }
}