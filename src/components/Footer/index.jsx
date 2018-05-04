import './Footer.css';

import { Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';
import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <Segment ui vertical className="footer form-page">
                <Grid relaxed>
                    <Grid.Row verticalAlign="middle">
                        <Grid.Column width={12} mobile={16}>
                            <a href="https://github.com/kpn/katka">
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