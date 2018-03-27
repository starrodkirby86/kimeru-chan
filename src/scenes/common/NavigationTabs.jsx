import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const menu = [
  {
    name: 'Create',
    icon: 'file outline',
    to: '/create',
  },
  {
    name: 'Describe',
    icon: 'edit',
    to: '/describe',
  },
  {
    name: 'Evaluate',
    icon: 'trophy',
    to: '/evaluate',
  },
  {
    name: 'Finish',
    icon: 'flag checkered',
    to: '/finish',
  },
];

function NavigationTabs(props) {
  const { location } = props;
  const { pathname } = location;

  const menuComponents = _.map(menu, m => (
    <Menu.Item as={Link} key={`NavigationTabs${m.name}`} active={pathname.includes(m.to)} to={m.to}>
      <Icon name={m.icon} />
      {m.name}
    </Menu.Item>
  ));

  return (
    <Menu icon="labeled" size="large">
      <Menu.Menu position="right">
        {menuComponents}
      </Menu.Menu>
    </Menu>
  );
}

NavigationTabs.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(NavigationTabs);
