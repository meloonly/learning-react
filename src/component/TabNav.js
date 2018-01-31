import ReactDom from 'react-dom'
import React, {Component} from 'react'
import classnames from 'classnames'

class TabNav extends Component {
  getTabs () {
    const {panels, classPrefix, activeIndex} = this.props

    return React.Children.map(panels, (child) => {
      let order = +child.props.order
      let events = {}
      if (!child.props.disabled) {
        events = {
          onClick: this.props.onTabClick.bind(this, order)
        }
      }

      let classes = classnames({
        [`${classPrefix}-tab`]: true,
        [`${classPrefix}-active`]: activeIndex === order,
        [`${classPrefix}-disabled`]: child.props.disabled
      })
      return (
        <li
          {...events}
          className={classes}>{child.props.tab}</li>
      )
    })
  }
  render () {
    return (
      <ul>
        {this.getTabs()}
      </ul>
    )
  }
}

export default TabNav