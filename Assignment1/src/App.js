import React from 'react'
import Item from "./Item"
import Header from "./Header"
import AddItem from "./AddItem"
import Procrastinate from "./Procrastinate"
import todosData from "./toDos"


class App extends React.Component{

    constructor(){
        super()
        this.state = {
            todos : todosData
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
    }

    handleChange = id => {
        const newTodos = this.state.todos.map(function(oldTodo){
            if(oldTodo.id === id) return {
                id: oldTodo.id,
                text: oldTodo.text,
                completed: !oldTodo.completed
            }
            else return oldTodo
        })

        const todoList = {
            todos : newTodos
        }

        this.setState( pre => {
            return todoList
        })

    }

    handleRemove = id => {
        let newTodos = [];

        this.state.todos.forEach(todo => {
            if(todo.id !== id) newTodos.push(todo)
        })

        const todoList = {
            todos : newTodos
        }

        this.setState( pre => {
            return todoList
        })

    }



    handleSubmit = event =>{
        event.preventDefault()
        let newTodos = Object.assign([], this.state.todos)
        newTodos.push({
            id: this.state.todos.length + 1,
            text: event.target[0].value,
            completed : false
        })

        this.setState (pre => {
            return {todos:newTodos}
        })
    }

    handleProcrastinate = () =>{
        let rand = Math.floor(Math.random() * Math.floor(this.state.todos.length - 1)) + 1;
        let toMove = {}
        let newTodos = []

        this.state.todos.forEach(todo => {
            if(todo.id !== rand) newTodos.push(todo)
            else toMove = todo
        })
        newTodos.push(toMove)

        this.setState(pre => {
            return{todos:newTodos}
        })
    }

    render(){
        let todos = this.state.todos.map(element => {
            return <Item key = {element.id} id = {element.id} name = {element.text} checked = {element.completed} handleChange = {this.handleChange} handleRemove = {this.handleRemove}/>
        });

        return (
            <div>
                <Header/>
                <Procrastinate handleProcrastinate = {this.handleProcrastinate}/>
                <AddItem handleSubmit = {this.handleSubmit}/>
                {todos}
            </div>

        );

    }
}

export default App;
