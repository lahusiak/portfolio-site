import './App.css';
import Header from './header/header';
import AboutSection from './section/about';
import Section from './section/section';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* on mobile 100% width, on desktop 70% */}
        <main className="main">
          <AboutSection />
          <Section />
        </main>
      </div>
  );
}

export default App;
