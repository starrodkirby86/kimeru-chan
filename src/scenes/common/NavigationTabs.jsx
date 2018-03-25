import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Tabs, Tab, TabList, Icon } from 'bloomer';

const tabs = [
  {
    name: 'Create',
    icon: 'fa-plus-square',
    to: '/create',
  },
  {
    name: 'Describe',
    icon: 'fa-edit',
    to: '/describe',
  },
  {
    name: 'Evaluate',
    icon: 'fa-trophy',
    to: '/evaluate',
  },
  {
    name: 'Finish',
    icon: 'fa-flag-checkered',
    to: '/finish',
  },
];

function NavigationTabs(props) {
  const { location } = props;
  const { pathname } = location;

  const tabComponents = _.map(tabs, tab => (
    <Tab key={`NavigationTabs${tab.name}`} isActive={pathname.includes(tab.to)}>
      <Link to={tab.to}>
        <Icon isSize="medium" className={`fas ${tab.icon}`} />
        <span>{tab.name}</span>
      </Link>
    </Tab>
  ));

  return (
      <Tabs isSize="large">
        <TabList isAlign="right">
          {tabComponents}
        </TabList>
      </Tabs>
  );
}

NavigationTabs.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(NavigationTabs);
