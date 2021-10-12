import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Hats from './components/hats/hats.component';

function App() {
  return (
    <Switch>
      <Route exact='true' path='/' component = { HomePage } />
      <Route exact='true' path='/hats' component = { Hats } />
    </Switch>
  );
}

export default App;
