import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Segment, Menu } from "semantic-ui-react";


export default class Header extends Component {
    state = { activeItem: "home" };
    
      handleItemClick = (e, { name }) => this.setState({ activeItem: name });
      
  render() {
    const { activeItem } = this.state;
    
    return (
      <div>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Link to="/">
              {" "}
              <Menu.Item
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
              />
            </Link>
            
          </Menu>
        </Segment>
      </div>
    )
  }
}
