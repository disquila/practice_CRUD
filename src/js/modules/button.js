export default class Button {
    nativeEl = document.createElement('button')

    constructor(container, text, classes, onClick) {
        this.container = container
        this.text = text
        this.classes = classes
        this.onClick = onClick
        this.init()
    }
    init() {
        this.nativeEl.textContent = this.text
        this.nativeEl.className = this.classes
        this.nativeEl.addEventListener('click', this.onClick)
        this.container.append(this.nativeEl)
    }
}