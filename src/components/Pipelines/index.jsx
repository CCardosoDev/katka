import { Container, Grid, Header, Image } from 'semantic-ui-react';
import React, { Component } from 'react';

import pipeline from "../../assets/images/pipeline_example.png"

export default class Pipelines extends Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <Container text>
              <Header as='h1' textAlign="left">Pipelines</Header>
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className='fill-page'>
          <Container fluid>
            <Image centered src={pipeline} size="massive" />
          </Container>
        </Grid.Row>
      </Grid>
    );
  }
}
