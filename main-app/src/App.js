import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Demo1 from './demo1/Demo1';
import Demo2 from './demo2/Demo2';
import Demo3 from './demo3/Demo3';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/demo1">Demo 1</Link>
            </li>
            <li>
              <Link to="/demo2">Demo 2</Link>
            </li>
            <li>
              <Link to="/demo3">Demo 3</Link>
            </li>
          </ul>
        </nav>

        <Route path="/demo1" component={Demo1} />
        <Route path="/demo2" component={Demo2} />
        <Route path="/demo3" component={Demo3} />
      </div>
    </Router>
  );
}

export default App;
