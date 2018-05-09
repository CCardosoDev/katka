import { Container, Grid, Header } from 'semantic-ui-react';
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              <Header as="h1" textAlign="left">This is the Homepage</Header>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="fill-page">
          <Grid.Column>
            <Container text>
              <p>We should explain what are we doing here</p>
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
