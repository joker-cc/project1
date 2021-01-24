import { HashRouter, Route, Link } from 'react-router-dom';
import Demo1 from './Demo1/Demo1';

const App = () => {
  return (
    <HashRouter>
      <ul>
        <li><Link to="/demo1">演示添加删除</Link></li>
      </ul>
      <Route path="/demo1" exact component={Demo1} />
    </HashRouter>
  );
}

export default App;
