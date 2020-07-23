import React from 'react'
import { TabBar } from 'antd-mobile'
import { Route } from 'react-router-dom'
import Index from '../Index'
import HouseList from '../HouseList'
import News from '../News'
import Profile from '../Profile'

import './index.css'

export default class Home extends React.Component {
  state = {
    selectedTab: this.props.location.pathname,
  }
  render() {
    return (
      <div className="home">
        <Route path="/home/index" component={Index}></Route>
        <Route path="/home/list" component={HouseList}></Route>
        <Route path="/home/news" component={News}></Route>
        <Route path="/home/profile" component={Profile}></Route>

        <TabBar tintColor="#21b97a" barTintColor="white" noRenderContent={true}>
          <TabBar.Item
            title="首页"
            key="home"
            icon={<i className="iconfont icon-ind" />}
            selectedIcon={<i className="iconfont icon-ind" />}
            selected={this.state.selectedTab === '/home/index'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/index',
              })
              this.props.history.push('/home/index')
            }}
            data-seed="logId"></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-findHouse" />}
            selectedIcon={<i className="iconfont icon-findHouse" />}
            title="房源"
            key="fangyuan"
            selected={this.state.selectedTab === '/home/list'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/list',
              })
              this.props.history.push('/home/list')
            }}
            data-seed="logId1"></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom" />}
            selectedIcon={<i className="iconfont icon-infom" />}
            title="资讯"
            key="news"
            selected={this.state.selectedTab === '/home/news'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/news',
              })
              this.props.history.push('/home/news')
            }}></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my" />}
            selectedIcon={<i className="iconfont icon-my" />}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '/home/profile'}
            onPress={() => {
              this.setState({
                selectedTab: '/home/profile',
              })
              this.props.history.push('/home/profile')
            }}></TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
