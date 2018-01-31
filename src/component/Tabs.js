import ReactDom from 'react-dom'
import React, {Component} from 'react'
import TabNav from './TabNav'
import TabContent from './TabContent'

class Tabs extends Component {
  constructor (props) {
    super(props)

    this.handleTabClick = this.handleTabClick.bind(this)

    let activeIndex = this.props.defaultActiveIndex

    this.state = {
      activeIndex,
      prevIndex: activeIndex
    }
  }

  renderTabNavs () {
    const {classPrefix, children} = this.props

    return (
      <TabNav
        classPrefix={classPrefix}
        onTabClick={this.handleTabClick}
        activeIndex={this.state.activeIndex}
        panels={children}/>
    )
  }

  handleTabClick (activeIndex) {
    const prevIndex = this.state.activeIndex

    if (this.state.activeIndex !== activeIndex) {
      this.setState({
        activeIndex,
        prevIndex
      })
    }
  }

  renderTabContent () {
    const {classPrefix, children} = this.props

    return (
      <TabContent
        classPrefix={classPrefix}
        activeIndex={this.state.activeIndex}
        panels={children}/>
    )
  }

  render () {
    return (
      <div>
      {this.renderTabNavs()}
      {this.renderTabContent()}
      </div>
    )
  }
}

export default Tabs