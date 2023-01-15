import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { HeroSection,CounterSection,FeaturesScreen,PromoScreen ,ScreenShotsCarousel,PricingScreen} from "./screens/index";

function App() {
  return (
    <>
      <Header />

      <HeroSection />
      <CounterSection />
      <PromoScreen />
      <FeaturesScreen/>
     <ScreenShotsCarousel />
     <PricingScreen/>


    </>
  );
}

export default App;
