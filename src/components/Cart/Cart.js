import React from "react";
import CartItem from "./CartItem";
import { Card, Button, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Cart = ({ items, total, removeFromCart }) => {
  return (
    <div>
      <Segment>
        Shopping Cart
        <Link to="/">
          <Button floated="right" basic size="mini">
            Close
          </Button>
        </Link>
      </Segment>
      <Card>
        {items.length > 0 && (
          <Card.Content>
            {items.map(item => (
              <CartItem
                key={item.id}
                {...item}
                onClick={() => removeFromCart(item.id)}
              />
            ))}
          </Card.Content>
        )}
        {items.length === 0 && <div>Cart is empty</div>}
        <Card.Content extra>Total: {total} $</Card.Content>
      </Card>
    </div>
  );
};

export default Cart;
