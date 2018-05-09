import './Footer.css';

import { Grid, Header, Icon, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <Segment ui="true" vertical className="footer form-page">
        <Grid relaxed>
          <Grid.Row verticalAlign="middle">
            <Grid.Column width={12} mobile={16}>
              <a href="https://github.com/kpn/katka" target="_blank" rel="noopener noreferrer">
                <Header as="h3">
                  <Icon name="github" />
                  <Header.Content>
                    Katka
                    <Header.Subheader>
                      Contributions are welcome
                    </Header.Subheader>
                  </Header.Content>
                </Header>
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
