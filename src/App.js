import './App.css';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { CardSlider } from './components/card-slider';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <CardSlider></CardSlider>
      <Footer></Footer>
    </div>
  );
}

export default App;
