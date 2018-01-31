import ReactDom from 'react-dom'
import React, {Component} from 'react'
import classname from 'classnames'

class TabPane extends Component {
  render () {
    const {isActive, children, classPrefix} = this.props
    const classes = classname({
      [`${classPrefix}-active`]: isActive
    })
    return (
      <div className={classes}>
      {children}
      </div>
    )
  }
}

export default TabPane