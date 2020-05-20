import * as React from 'react';

import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

import './index.scss';
import GridDemo from "./demos/grid/index";
import ButtonDemo from "./demos/button/index"
import IconDemo from "./demos/icon";
import Demos from "./demos";
import CollapseDemo from './demos/collapse/index';

const routes = [
    {
        path: '/collapse',
        main: <CollapseDemo />
    },
    {
        path: '/grid',
        main: <GridDemo/>,
    },
    {
        path: '/button',
        main: <ButtonDemo/>,
    },
    {
        path: '/icon',
        main: <IconDemo/>
    },
    {
        path: '/',
        main: <Demos/>,
        exact: true
    }
]

class App extends React.Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        {/*<li><Link to={'/'}>首页</Link></li>*/}
                        {/*<li><Link to={'/grid'}>Grid </Link></li>*/}
                        {/*<li><Link to={'/button'}>Button</Link></li>*/}
                        {routes.map((item, index) => {
                            return <li key={index}><Link to={item.path}>{item.path}</Link></li>
                        })}
                    </ul>
                </nav>

                <Switch>
                    {
                        routes.map((item, index) => {
                            return <Route path={item.path} children={item.main} exact={item.exact} key={index}/>
                        })
                    }

                </Switch>
            </Router>
        )
    }
}

export default App;
