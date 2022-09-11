import logo from './hacker-news.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import SearchBody from './components/SearchBody/SearchBody';
import FavesButton from './components/FavesButton/FavesButton';

function App() {
  return (
    <div className="App">
      <div className="Front-End-Test---Home-view">
        <div className="Rectangle-2-Copy">
          <img className="HACKER-NEWS Text-Style" src={logo} alt="" />
        </div>
        <FavesButton />
        <SearchBar />
        <SearchBody />
      </div>
    </div>
  );
}

export default App;
