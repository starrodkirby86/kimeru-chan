import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react';
import NavigationTabs from './common/NavigationTabs';
import Create from './Create';
import Describe from './Describe';

function BaseScene() {
  return (
    <BrowserRouter>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <NavigationTabs />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment basic padded style={{ height: '100%' }}>
              <Switch>
                <Route exact path="/create" component={Create} />
                <Route exact path="/describe" component={Describe} />
                <Route path="/" render={() => (<p>Nothing.</p>)} />
              </Switch>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </BrowserRouter>
  );
}

export default BaseScene;
