import React from 'react';
import { List, Button, ButtonContent, Icon } from 'semantic-ui-react';

import './ToDoItem.scss';

interface Props {
    text: string;
}

const ToDoItem = (props: Props) => {
    return (
        <List.Item className='list-item'>
            <List.Icon name='file alternate'  size='big' color="blue"/>
            <List.Content className='item-content'>
                <span>{props.text}</span>
                <Button animated>
                    <ButtonContent visible>Edytuj</ButtonContent>
                    <ButtonContent hidden>
                        <Icon name='arrow right' />
                    </ButtonContent>
                </Button>
                <Button>
                    <Icon name='delete'/>
                </Button>
            </List.Content>
            
        </List.Item>
    )
}

export default ToDoItem