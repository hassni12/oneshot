import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { HeroSection } from './screens/HeroSection';
import { CounterSection } from './components/CounterSection';

function App() {
  return (
    <>
<Header/> 
     
<HeroSection/>
<CounterSection/>
          </>
  );
}

export default App;
