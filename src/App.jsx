import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OurValues from './components/OurValues';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div id="menu">
        <Menu />
      </div>
      <OurValues />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
