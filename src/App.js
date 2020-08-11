import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom';
import Home from './containers/Home';
import Shop from './containers/Shop';
import About from './containers/About';

function App() {
  return (
    <div className="App">
      {/* <h1>hello world</h1> */}
      <Router>
        <div className='navheader'>
          <ul>
            <li><Link to='/home'>首页</Link></li>
            <li><Link to='/shop'>商店</Link></li>
            <li><Link to='/about'>关于</Link></li>
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
