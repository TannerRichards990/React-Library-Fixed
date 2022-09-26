import BookList from './components/book/BookList';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookDetail from './components/book/BookDetail';
import Home from './components/Home/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <Switch>
        <Route exact path="/books">
          <BookList />
        </Route>
        <Route exact path="/books/:id">
          <BookDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
    
  );
}

export default App;

