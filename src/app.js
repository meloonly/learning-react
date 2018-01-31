import Tabs from './component/Tabs'
import TabPane from './component/TabPane'
import ReactDOM from 'react-dom'
import React, {Component} from 'react'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Tabs classPrefix={"tabs"} defaultActiveIndex={0}>
        <TabPane order={0} tab={"Tab1"}>我是第一个页签的内容</TabPane>
        <TabPane order={1} tab={"Tab2"}>我是第二个页签的内容</TabPane>
        <TabPane order={2} tab={"Tab3"}>我是第三个页签的内容</TabPane>
      </Tabs>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))