import ReactDom from 'react-dom'
import React, {Component} from 'react'

class TabContent extends Component {
  getTabPanes () {
    const {panels, activeIndex, classPrefix} = this.props

    return React.Children.map(panels, (child) => {
      if (!child) {return}

      const order = parseInt(child.props.order, 10)
      const isActive = activeIndex === order
      return React.cloneElement(child, {
        isActive,
        classPrefix,
        children: child.props.children
      })
    })
  }
  render () {
    
    return (
      <div>
      {this.getTabPanes()}
      </div>
    )
  }
}

export default TabContent