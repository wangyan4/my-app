import React from 'react';
import './App.less';
import './fonts/iconfont.css'
import 'antd/dist/antd.css';
import { BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './containers/Home/Home';
import Shop from './containers/Shop/Shop';
import About from './containers/About/About';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      <Router>
        <div className='navheader'>
          <ul>
            <li>
              
              <Link to='/home'><span className='my iconnotepad'></span>记事本</Link>
            </li>
            <li>
              <Link to='/shop'><span className='my iconshoppingb'></span>商店</Link>
            </li>
            <li>
              <Link to='/about'><span className='my iconuser1'></span>关于</Link>
            </li>
          </ul>
        </div>
        <div className='content'>
          <Switch>
            {/* <Route path='/' component={Home} /> */}
            <Route path='/home' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route path='/about' component={About} />
            <Redirect to='/home'/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
