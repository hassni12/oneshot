import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { HeroSection,CounterSection,FeaturesScreen,PromoScreen } from "./screens/index";

function App() {
  return (
    <>
      <Header />

      <HeroSection />
      <CounterSection />
      <PromoScreen />
      <FeaturesScreen/>
    </>
  );
}

export default App;
