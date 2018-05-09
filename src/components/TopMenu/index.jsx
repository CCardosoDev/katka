import './TopMenu.css';

import { Button, Dropdown, Image, Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import katka from '../../assets/images/katka.png';

export default class TopMenu extends Component {
  render() {
    return (
      <div>
        <Menu>
          <Image src={katka} size="tiny" href="/" to="/" />

          <Menu.Menu position="right">
            <Menu.Item as={NavLink} href="/dashboard" to="/dashboard" name="dashboard" />
            <Menu.Item as={NavLink} href="/pipelines" to="/pipelines" name="pipelines" />
            <Dropdown item text="Go to">
              <Dropdown.Menu>
                <Dropdown.Item>Something</Dropdown.Item>
                <Dropdown.Item>Something else</Dropdown.Item>
                <Dropdown.Item>Something even better</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
              <Button primary>Login</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
