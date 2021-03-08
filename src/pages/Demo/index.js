import React from 'react';
import { Route, Link } from 'react-router-dom';
import Demo1 from './Demo';
import '../../index.css';

const DemoMain = () => {
  return (
    <div className="childPage">
      <div>
        <Link to="/demo/demo1">范例1</Link>
      </div>
      <div>
        <Route path="/demo/demo1" component={Demo1} />
      </div>
    </div>
  )
}

export default DemoMain;