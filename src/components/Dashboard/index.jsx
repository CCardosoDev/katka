import { Container, Grid, Header, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import dashboard from '../../assets/images/dashboard_example.png';

export default class Dashboard extends Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              <Header as="h1" textAlign="left">Dashboard</Header>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="fill-page">
          <Container fluid>
            <Image centered src={dashboard} />
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}
