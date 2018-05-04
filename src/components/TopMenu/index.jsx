import './TopMenu.css';

import { Button, Container, Dropdown, Header, Image, Menu, Segment } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import React, { Component } from 'react';

import katka from '../../assents/images/katka.png';

export default class TopMenu extends Component {
    render() {
        return (
            <div>
                <Menu pointing secondary>
                    <Image src={katka} size="tiny" href="/" to="/" />

                    <Menu.Menu position="right">
                        <Menu.Item eventKey={1} as={NavLink} href="/dashboard" to="/dashboard" name="dashboard" />
                        <Menu.Item eventKey={1} as={NavLink} href="/pipelines" to="/pipelines" name="pipelines" />
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