import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import withStyles from 'react-jss';

import { withAnimation } from '../../tools';

export const styles = theme => ({
  root: {
    marginLeft: 20
  }
});

export class Component extends React.Component {
  render () {
    const {
      theme,
      classes,
      anim,
      className,
      children,
      ...rest
    } = this.props;

    return (
      <div className={cx(classes.root, className)} {...rest}>
        {children}
      </div>
    );
  }
}

Component.propTypes = {
  theme: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired,
  anim: PropTypes.any.isRequired,
  className: PropTypes.any,
  children: PropTypes.any
};

export const Frame = withStyles(styles)(withAnimation()(Component));
