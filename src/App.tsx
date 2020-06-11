import * as React from 'react';
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

import './index.less';
import GridDemo from "../demos/grid/index";
import ButtonDemo from "../demos/button/index"
import IconDemo from "../demos/icon";
import Demos from "../demos";
import CollapseDemo from '../demos/collapse/index';
import TransitionDemo from '../demos/transition/index';
import MyDemo from "../demos/demo";
import LayoutDemo from "../demos/layout";
import PanelDemo from "../demos/panel";


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
        main: <LayoutDemo/>
    },
    {
        path: '/Grid',
        title: 'Grid栅格',
        main: <GridDemo/>,
    },
    {
        path: '/Button',
        title: 'Button组件',
        main: <ButtonDemo/>,
    },
    {
        path: '/Icon',
        title: 'Icon组件',
        main: <IconDemo/>
    },
    {
        path: '/panel',
        title: 'Panel组件',
        main: <PanelDemo />
    },
    {
        path: '/collapse',
        title: 'Collapse组件',
        main: <CollapseDemo/>
    },
    {
        path: '/collapse2',
        title: 'Collapse Demo',
        main: <MyDemo/>
    },
    {
        path: '/transition',
        title: 'Transition Demo',
        main: <TransitionDemo in={true}/>
    }
]

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="body">

                    <nav className={'nav'}>
                        <ul className={'text-lg antialiased leading-loose'}>
                            {routes.map((item, index) => {
                                return <li key={index}><Link to={item.path}>{item.title}</Link></li>
                            })}
                        </ul>
                    </nav>

                    <div className="flex_auto">
                        <Switch>
                            {
                                routes.map((item, index) => {
                                    return <Route path={item.path} children={item.main} exact={item.exact} key={index}/>
                                })
                            }
                        </Switch>
                    </div>
                    <div className="nav_doc">
                        <p>自动生成锚点</p>
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
