import './App.css'
import About from './components/About'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Terminal from './components/RealisticTerminal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Landyard from './components/Landyard'

function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Dark premium background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black"></div>

      {/* Subtle noise overlay for premium effect */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8cGF0dGVybiBpZD0ibm9pc2UiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPGZpbHRlciBpZD0ibm9pc2VGaWx0ZXIiPgo8ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc2VlZD0iMSIvPgo8L2ZpbHRlcj4KPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlRmlsdGVyKSIgb3BhY2l0eT0iMC4xIi8+CjwvcGF0dGVybj4KPC9kZWZzPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI25vaXNlKSIvPgo8L3N2Zz4=')]"></div>

      {/* Main content container */}
      <div className="relative z-10 h-screen flex">
        {/* Left side - Landyard Component */}
        <div className="w-1/2 h-full  relative overflow-hidden">
          {/* Premium glass effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-black/50 backdrop-blur-sm"></div>

          {/* Subtle border glow */}
          <div className="absolute inset-0 border border-gray-700/50 shadow-2xl"></div>

          {/* Ambient lighting effect */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>

          {/* Foreground Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            {/* Developer Intro - Now in foreground */}
            <div className="absolute top-20 left-10 z-20 text-left pointer-events-none select-none">
              <h2 className="text-2xl md:text-3xl font-mono text-white drop-shadow-md">
                Hi,I'm <span className="text-green-600 font-bold">Dhairya</span>
              </h2>
              <p className="mt-2 text-sm md:text-base text-violet-50 font-light italic max-w-sm leading-relaxed drop-shadow-sm">
                Clean code, smooth UI,<br />
                and just enough coffee.
              </p>
            </div>

            <div className="w-full h-full mt-0 bg-black rounded-lg border border-gray-800/50 backdrop-blur-md shadow-2xl">
              <Landyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>

        {/* Right side - Premium Terminal */}
        <div className="w-1/2 h-full relative">
          {/* Premium glass effect */}
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/30 to-black/50 backdrop-blur-sm"></div>

          {/* Subtle border glow */}
          <div className="absolute inset-0 border border-gray-700/50 shadow-2xl"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <div className="w-full h-full bg-black/40 rounded-lg border border-gray-800/50 backdrop-blur-md shadow-2xl overflow-hidden">
              <Terminal />
            </div>
          </div>

          {/* Ambient lighting effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Premium scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}

export default App