import Button from './button.js'
export default class Table {

    constructor(table, columns, data, actions) {
        this.table = table
        this.columns = columns
        this.data = data
        this.actions = actions
        this.refresh()
    }
    addRow(item) {
        const row = this.table.insertRow(-1)
        this.columns.forEach((column, index) => {
            const cell = row.insertCell(index)
            if (column.render) {
                cell.innerHTML = column.render(item[column.field])
            } else { cell.innerHTML = item[column.field] }
        })
        if (this.actions.length) {
            const actionsCell = row.insertCell(this.columns.length)
            this.actions.map((action) => {
                const act = () => {
                    action.onClick(item)
                }
                return new Button(actionsCell, action.title, action.classes, act)
            })
        }
    }
    refresh() {
        if (this.table.rows.length) {
            this.table.innerHTML = ''
        }
        // localStorage.setItem('Users', JSON.stringify(users))
        this.data.forEach((item) => {
            this.addRow(item)
        })
    }
}