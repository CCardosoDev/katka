import './Dashboard.css';

import { Container, Grid, Header, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Container text>
                            <Header as='h1' textAlign="left">Dashboard</Header>
                            <p>We should explain what are we doing here</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}