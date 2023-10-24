import './App.scss';
import './scss/header.scss';

import { React }from 'react';
import Header from './components/header.tsx';
import  HomePage from './pages/home.tsx';
import Footer from './components/footer.tsx';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <HomePage/>
      </main>
      <Footer/> 
    </div>
  );
}

export default App;
