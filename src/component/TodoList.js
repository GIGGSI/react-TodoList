import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem />
            </div>
        )
    }
}
