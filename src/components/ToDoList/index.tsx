import React, { Component } from 'react';
import ToDoItem from '../ToDoItem';
import { List } from 'semantic-ui-react';

class ToDoList extends Component {
    render() {
        return (
            <List>
                <ToDoItem text="zadanie 1"/>
                <ToDoItem text="zadanie 1"/>
                <ToDoItem text="zadanie 1"/>
            </List>
        )
    }
}

export default ToDoList;