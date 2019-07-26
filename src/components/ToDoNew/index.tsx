import React, { Component } from 'react'
import { Form } from 'semantic-ui-react';

interface Props {
    
}
interface State {
    
}

class ToDoNew extends Component<Props, State> {
    state = {}

    render() {
        const options = [
            { key: 'high', text: 'Wysoki', value: 'high' },
            { key: 'normal', text: 'Female', value: 'normal' },
            { key: 'low', text: 'Other', value: 'low' },
          ]
        return (
            <Form>
                <Form.Group widths="two">
                    <Form.Input fluid placeholder="Nowe zadanie" />
                    <Form.Select fluid placeholder="Priorytet" options={options}/>
                    <Form.Button primary>Submit</Form.Button>
                </Form.Group>
            </Form>
        )
    }
}

export default ToDoNew;