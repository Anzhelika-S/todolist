import React, { Component } from 'react';

import NewTaskFrom from '../new-task-form/new-task-form';

export default class Header extends Component {
  render() {
    const { onItemAdded } = this.props;
    return (
      <header className="header">
        <h1> todos </h1>
        <NewTaskFrom onItemAdded={onItemAdded} />
      </header>
    );
  }
}

Header.defaultProps = {
  onItemAdded: () => {},
};

Header.propTypes = {
  onItemAdded: (props, propName, componentName) => {
    const value = props[propName];
    if (typeof value === 'function') {
      return null;
    }

    return new TypeError(`${componentName}: ${propName} should be a function`);
  },
};
