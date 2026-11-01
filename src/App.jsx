import Background from './components/Background.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import License from './components/License.jsx';
import Footer from './components/Footer.jsx';
import FloatingWidgets from './components/FloatingWidgets.jsx';

export default function App() {
  return (
    <>
      <Background />
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <About />
        <License />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
