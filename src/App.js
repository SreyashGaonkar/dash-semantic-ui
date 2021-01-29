import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reports from './pages/Reports/Reports';
import Products from './pages/Products/Products';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;