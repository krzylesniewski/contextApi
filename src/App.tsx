import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ToDoList from './components/ToDoList';
import ToDoNew from './components/ToDoNew';

import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends React.Component {
  render(){
    const options = [
      { key: '.com', text: '.com', value: '.com' },
      { key: '.net', text: '.net', value: '.net' },
      { key: '.org', text: '.org', value: '.org' },
    ]
    return (
      <Container text>
        <Header as="h1">To Do List</Header>
        {/* <Button primary content="Click me!"/>
        <Button secondary content="Click me!"/>
        <Input placeholder="Wpisz tekst ..." error/>
        <Input placeholder="Wpisz tekst ..." icon='search'/>
        <Input placeholder="Wpisz tekst ..." iconPosition='left' icon='search'/>
        <Input
          label={<Dropdown defaultValue='.com' options={options} />}
          labelPosition='right'
          placeholder='Find domain'
        /> */}
        <ToDoNew />
        <ToDoList />
      </Container>
    );
  }
}

export default App;
