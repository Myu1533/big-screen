import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/IndexPage';
import EventsPage from './pages/EventsPage';
import DetailPage from './pages/DetailPage';
import { Iconstyle } from './assets/icon/iconfont';
import { Globalstyle } from './style/global.js';
import 'antd/dist/antd.css';

// components
import { Layout } from 'antd';
import TopBar from './components/TopBar'

const { Header, Content } = Layout;

function RouterConfig({ history }) {
  const route = () => {
    return (
      <Fragment>
        {/* 全局样式注册到界面中 */}
        <Iconstyle></Iconstyle>
        <Globalstyle></Globalstyle>
        {/* Layout */}
        <Header>
          <TopBar></TopBar>
        </Header>
        <Content>
          {/* 路由管理 */}
          <Switch>
            <Route path='/' exact component={IndexPage} />
            <Route path='/events' exact component={EventsPage} />
            <Route path='/detail' exact component={DetailPage} />
          </Switch>
        </Content>
      </Fragment>
    );
  };

  return <Router history={history}>{route()}</Router>;
}

export default RouterConfig;
