import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <div className="content">
            <Route path="/" exact component={Home} />
            <Route path="/blog/:slug" component={Post} />
            <Route path="/about" component={About} />
          </div>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
