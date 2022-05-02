export default class Modal {
    modal = document.createElement('div')
    overlay = document.createElement('div')
    closeBtn = document.createElement('span')
    modalContainer = document.querySelector('body')
    contentContainer = document.createElement('div')
    constructor(content, submitForm) {
        this.content = content
        this.submitForm = submitForm
        this.init()
    }
    init() {
        this.modal.classList.add('modal')
        this.overlay.classList.add('overlay')
        this.overlay.onclick = this.close
        this.closeBtn.classList.add('modal-cross')
        this.closeBtn.textContent = 'X'
        this.closeBtn.onclick = this.close
        this.modal.appendChild(this.closeBtn)
        this.modal.appendChild(this.contentContainer)
    }
    open = (content) => {
        this.contentContainer.innerHTML = ''
        this.modalContainer.appendChild(this.modal)
        this.modalContainer.appendChild(this.overlay)
        this.contentContainer.appendChild(content ?? this.content)
        this.submitButton = document.querySelector('.submit')
        this.submitButton.addEventListener('click', this.submitForm)
    }
    close = () => {
        this.submitButton.removeEventListener('click', this.submitForm)
        this.modalContainer.removeChild(this.modal)
        this.modalContainer.removeChild(this.overlay)
    }
}