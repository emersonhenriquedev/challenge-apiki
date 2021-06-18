import './App.css';

import { BlogProvider } from './context/BlogContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/Home';
import Post from './pages/Post';
import Header from './components/Header';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <div className="content">
              <Route path="/" exact component={Home} />
              <Route path="/blog/:slug" component={Post} />
            </div>
          </Switch>

        </Router>
      </div>
    </BlogProvider>

  );
}

export default App;
