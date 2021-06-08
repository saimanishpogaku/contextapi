import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Header from './components/Header';
import Homepage from './components/Homepage';
import CardContextProvider from './contexts/cardContext';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from './components/Nav';
import Profile from './components/Profile';
import Shop from './components/Shop';

function App() {
  return (
    <CardContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Switch>
            {/* If exact not used then for '/' route it matches both '/' and '/posts' 
            both components will be displayed instead of only homepage for '/' route.
            Here Switch is used to break or stop at perticular route if exact route is 
            found instead of going forward displaying both routes even after one exact match found */}
            <Route path='/' exact component={Homepage} />
            <Route path='/posts' component={Posts} />
            <Route path='/profile' component={Profile} />
            <Route path='/shop' component={Shop} />
          </Switch>
        </div >
      </Router>
    </CardContextProvider>
  );
}

export default App;
