import React from 'react';
import { Grid, Card, Icon } from "semantic-ui-react";
import { Route, Link } from 'react-router-dom'

import Product from '../../containers/Product';
import Cart from '../../containers/Cart';


const ProductList = ({ products }) => {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={1} />
  
          <Grid.Column width={11}>
            <Card.Group itemsPerRow={3}>
              {products.map(product => (
                <Card raised key={product.id}>
                  <Product {...product} />
                </Card>
              ))}
            </Card.Group>
          </Grid.Column>
  
          <Grid.Column width={4}>
          <Link to="/cart">
                <Card>
                  <Card.Content>
                  <p>CLICK TO OPEN A CART </p>
                  <Icon  size='big' name="shop" />
                  </Card.Content>
                  </Card>
                  </Link>
          <Route path='/cart' render={(props) => 
        <Cart {...props} />}
      />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  };
  
  export default ProductList;
