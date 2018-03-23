import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Section, Container } from 'bloomer';
import NavigationTabs from './common/NavigationTabs';
import Create from './Create';
import Describe from './Describe';

function BaseScene() {
  return (
    <BrowserRouter>
      <div>
        <NavigationTabs />
        <Section>
          <Container>
            <Switch>
              <Route exact path="/create" component={Create} />
              <Route exact path="/describe" component={Describe} />
              <Route path="/" render={() => (<p>Nothing.</p>)} />
            </Switch>
          </Container>
        </Section>
      </div>
    </BrowserRouter>
  );
}

export default BaseScene;
