import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DemoMain from './pages/Demo';
import Route2 from './pages/Route2';
import './index.css';

const AppRouter = () => {
  return (
    <Router>
      <div className="page">
        <div className="leftNav">
          <ul>
            <li><Link to="/demo">代码范例</Link></li>
            <li><Link to="/route2">route2</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path="/demo" component={DemoMain} />
          <Route path="/route2" component={Route2} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
