import home from './assets/home.png';
import './App.css';
import MainTextBox from './components/MainTextBox';
import Paragraph from './components/Paragraph'
import NavBar from './components/NavBar';
import UrgeWithPleasureComponent from './components/Timer';

console.log(home)

function App() {
  return (
    <div className="App">
      <NavBar />
      <UrgeWithPleasureComponent />
      <Paragraph />
      <MainTextBox />
      <img src={home}/>
    </div>
  );
}

export default App;
