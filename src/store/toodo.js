import { makeAutoObservable } from "mobx"


class Toodo {
    toodos = [
        {id: 12132, title: 'some text', complited: false},
        {id: 2321, title: 'some text', complited: true},
        {id: 3123, title: 'some text', complited: false},
    ]
    constructor() {
        makeAutoObservable(this)
    }
    addToodo(toodo) {this.toodos.push(toodo)}
    removeToodo(id) {

        this.toodos = this.toodos.filter(toodo => toodo.id !== id)
    }
    compliteToodo(id) {

        this.toodos = this.toodos.map(toodo => toodo.id === id ? {...toodo,complited:  !toodo.complited}: toodo)
    }
    fetchToodo () {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                this.toodos = [...this.toodos, ...json]
            })
    }
}

export default new Toodo()