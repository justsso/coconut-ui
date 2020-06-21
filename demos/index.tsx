import * as React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.less';
import GridDemo from './grid/index';
import ButtonDemo from './button/index';
import IconDemo from './icon';
import Demos from './index/index';
import TransitionDemo from './transition/index';
import MyDemo from './demo';
import LayoutDemo from './layout';
import PanelDemo from './panel';
import ListDemo from './list';
import VRDemo from "./virtualRender";
import VLDemo from "./virtualList/index";

const routes = [
    {
        path: '/',
        title: '首页',
        main: <Demos />,
        exact: true
    },
    {
        path: '/ListDemo',
        title: '列表',
        main: <ListDemo />,
        exact: true
    },
    {
        path: '/Layout',
        title: 'Layout布局组件',
        main: <LayoutDemo />
    },
    {
        path: '/Grid',
        title: 'Grid栅格',
        main: <GridDemo />
    },
    {
        path: '/Button',
        title: 'Button组件',
        main: <ButtonDemo />
    },
    {
        path: '/Icon',
        title: 'Icon组件',
        main: <IconDemo />
    },
    {
        path: '/panel',
        title: 'Panel组件',
        main: <PanelDemo />
    },
    {
        path: '/collapse2',
        title: 'Collapse Demo',
        main: <MyDemo />
    },
    {
        path: '/transition',
        title: 'Transition Demo',
        main: <TransitionDemo in={true} />
    },
    {
        path: '/vrlist',
        title: '虚拟渲染组件',
        main: <VLDemo/>
    },
    {
        path: '/vrlist2',
        title: '虚拟渲染原生',
        main: <VRDemo/>
    }
];

class App extends React.Component {
    public render() {
        return (
            <Router>
                <div className="body">
                    <nav className="nav">
                        <ul className="text-lg antialiased leading-loose">
                            {routes.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={item.path}>{item.title}</Link>
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
                    <div className="nav_doc">
                        <p>自动生成锚点</p>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
