import React from 'react';
import { Route, Link } from 'react-router-dom';
import Page1 from './page1';

const Route2 = () => {
  return (
    <>
      <div>
        <Link to="/route2/page1">页面1</Link>
      </div>
      <div>
        <Route path="/route2/page1" exact component={Page1} />
      </div>
    </>
  )
}

export default Route2;