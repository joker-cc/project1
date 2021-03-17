import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DemoMain from './pages/Demo';
import ReactDndDemo from './pages/ReactDndDemo';
import './index.css';

const AppRouter = () => {
  return (
    <Router>
      <div className="page">
        <div className="leftNav">
          <ul>
            <li><Link to="/demo">代码范例</Link></li>
            <li><Link to="/route2">React DnD</Link></li>
          </ul>
        </div>
        <div className="rightMain">
          <Route path="/demo" component={DemoMain} />
          <Route path="/route2" component={ReactDndDemo} />
        </div>
      </div>
    </Router>
  );
}

export default AppRouter;
