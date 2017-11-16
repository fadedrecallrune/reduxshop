import React, { Component } from "react";
import { Card, Image, Button, Icon} from "semantic-ui-react";

class Product extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { name, price, image, isInCart } = this.props;

    return (
      <Card.Content>
        
          <Image src={image} />

          <Card.Header>
            <p>{name}</p>
          </Card.Header>

          <Card.Meta>
            <p>{price} $</p>
            
          </Card.Meta>
          <Button animated="vertical" onClick={this.handleClick}>
            <Button.Content hidden>
              {isInCart ? "Remove" : "Add"}
            </Button.Content>
            <Button.Content visible>
              <Icon name="shop" />
            </Button.Content>
          </Button>
      </Card.Content>
    );
  }
}

export default Product;
