import React, { Component, PropTypes, cloneElement } from 'react';
import classnames from 'classname';

class TabContent extends Comment {
  static propTypes = {
    classPrefix: PropTypes.string,
    panels: PropTypes.node,
    activeIndex: PropTypes.number,
  };

  getTabPanes() {
    const { classPrefix, panels, activeIndex } = this.props;

    return React.Children.map(panels, (child) => {
      if (!child) { return; }

      const order = parseInt(child.props.order);
      const isActive = activeIndex === order;

      return React.cloneElement(child, {
        classPrefix,
        isActive,
        children: child.props.children,
        key: `tabpane-${order}`,
      });
    });
  }

  render() {
    const { classPrefix } = this.props;

    const classes = classnames({
      [`${classPrefix}-content`]: true,
    });

    return (
      <div className={classes}>
        {this.getTabPanes()}
      </div>
    );
  }
}

export default TabContent;
