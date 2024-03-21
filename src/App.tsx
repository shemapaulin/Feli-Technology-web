// import "swiper/css";
import { useEffect } from "react";
import Routes from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

function App() {
  useEffect(() => {
    // AOS.init();
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <Routes />
  )
}

export default App
