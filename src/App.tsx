import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Plans } from './components/Plans';
import { Benefits } from './components/Benefits';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/10 selection:text-brand-blue">
      <Navbar />
      <Hero />
      <Benefits />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
