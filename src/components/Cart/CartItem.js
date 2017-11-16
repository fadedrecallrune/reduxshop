import React from 'react';
import { Card, List, Button } from 'semantic-ui-react'

const CartItem = ({ name, price, onClick }) => {
    return (
        <Card.Content>
            <List divided>
                <List.Item>
                <Button floated='right' basic size='mini' onClick={onClick}>X</Button>
                <List.Content>
                    <List.Header>{name}</List.Header>
                    <List.Description>{price} $</List.Description>
                    </List.Content>
                    </List.Item>
            </List>
        </Card.Content>
    );
}


export default CartItem;
