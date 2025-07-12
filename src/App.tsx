import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Landyard from './components/Landyard'

function App() {
  return (
    <div className="bg-gray-900 text-cyan-100 min-h-screen">
      <Header />
      <main className="relative overflow-hidden">
        {/* Background grid effect */}
        <div className="absolute inset-0 grid grid-cols-[repeat(30,minmax(0,1fr))] grid-rows-[repeat(40,minmax(0,1fr))] opacity-30 pointer-events-none">
          {Array.from({ length: 1200 }).map((_, i) => (
            <div
              key={i}
              className="border-r border-b border-gray-700"
            ></div>
          ))}
        </div>

        {/* Content section with 4/5 width on large screens, 9/10 width on small screens */}
        <div className="w-4/5 sm:w-9/10 mx-auto relative z-10 bg-gray-900 bg-opacity-70">
          <Hero />
          <About />
          <Skills />
          <Achievements/>
          <Projects />
          <Certifications />
          <Contact />
          {/* <Landyard position={[0, 0, 20]} gravity={[0, -40, 0]}/> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App