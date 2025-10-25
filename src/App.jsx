import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import OurValues from './components/OurValues';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#FFFDF5]">
        <Header />

        <main className="flex-grow">
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <OurValues />
                </>
              }
            />


            <Route path="/menu" element={<Menu />} />
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
