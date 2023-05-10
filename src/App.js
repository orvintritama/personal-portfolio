import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavBar';
import Banner from './components/Banner';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Banner></Banner>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
