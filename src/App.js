import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Header from './components/Header';
import CardContextProvider from './contexts/cardContext';

function App() {
  return (
    <CardContextProvider>
      <div className="App">
        <Header />
        <Posts />
      </div >
    </CardContextProvider>
  );
}

export default App;
