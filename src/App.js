import home from './assets/home.png';
import './App.css';
import MainTextBox from './components/MainTextBox';
import Paragraph from './components/Paragraph'
import NavBar from './components/NavBar';

console.log(home)

function App() {
  return (
    <div className="App">
      <NavBar />
      <Paragraph />
      <MainTextBox />
      <img src={home}/>
    </div>
  );
}

export default App;
