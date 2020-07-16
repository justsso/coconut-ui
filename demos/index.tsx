import * as React from 'react';
import {Route, Switch, NavLink, BrowserRouter as Router} from 'react-router-dom';
import Loadable from '@loadable/component';

import './index.less';
import IconDemo from './icon';
import Demos from './index/index';
// import TransitionDemo from './transition/index';
// import MyDemo from './demo';
import LayoutDemo from './layout';
import PanelDemo from './panel';
import ListDemo from './list';
// import VRDemo from "./virtualRender";
import VLDemo from "./virtualList/index";
import AlertDemo from "./alert/index"
import SkeletonDemo from "./skeleton/index";
import TooltipDemo from "./Tooltip/index";
const GridLoadable = Loadable(() => import('./grid/index'));
const ButtonLoadable = Loadable(() => import('./button/index'));
const routes = [
    {
        path: '/',
        title: '首页',
        main: <Demos/>,
        exact: true
    },
    {
        path: '/Layout',
        title: 'Layout布局组件',
        main: <LayoutDemo />,
        exact: false
    },
    {
        path: '/Grid',
        title: 'Grid栅格',
        main: <GridLoadable/>,
        exact: false
    },
    {
        path: '/Button',
        title: 'Button组件',
        main: <ButtonLoadable/>,
        exact: false
    },
    {
        path: '/Icon',
        title: 'Icon组件',
        main: <IconDemo/>,
        exact: false
    },
    {
        path: '/Panel',
        title: 'Panel组件',
        main: <PanelDemo/>,
        exact: false
    },
    {
        path: '/List',
        title: 'List组件',
        main: <ListDemo/>,
        exact: false
    },
    {
        path: '/Alert',
        title: 'Alert全局提示',
        main: <AlertDemo />,
        exact: false
    },
    {
        path: '/Tooltip',
        title: 'Tooltip 文字提示',
        main: <TooltipDemo/>,
        exact: false
    },
    // {
    //     path: '/collapse2',
    //     title: 'Collapse Demo',
    //     main: <MyDemo />
    // },
    // {
    //     path: '/transition',
    //     title: 'Transition Demo',
    //     main: <TransitionDemo in={true} />
    // },
    {
        path: '/vrlist',
        title: '虚拟渲染组件',
        main: <VLDemo/>,
        exact: false
    },
    {
        path: '/skeleton',
        title: 'Skeleton骨架屏',
        main: <SkeletonDemo />,
        exact: false
    }
    // {
    //     path: '/vrlist2',
    //     title: '虚拟渲染原生',
    //     main: <VRDemo/>
    // }
];

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="body">
                    <nav className="nav">
                        <ul className="text-md antialiased leading-loose text-base">
                            {routes.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink
                                            exact={item.exact}
                                            className='li_a'
                                            activeClassName='active_li'
                                            to={item.path}>{item.title}</NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    <div className="flex_auto">
                        <Switch>
                            {routes.map((item, index) => {
                                return (
                                    <Route path={item.path} exact={item.exact} key={index}>
                                        {item.main}
                                    </Route>
                                );
                            })}
                        </Switch>
                    </div>
                    {
                        // <div className="nav_doc">
                        //     <p>自动生成锚点</p>
                        // </div>
                    }
                </div>
            </Router>
        );
    }
}

export default App;
