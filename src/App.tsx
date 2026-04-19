import React, { useEffect, useState } from 'react';
import { 
  Zap, 
  Map, 
  Battery, 
  Sun, 
  Moon,
  Smartphone, 
  ArrowRight,
  Globe2,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans selection:bg-green-400 selection:text-black overflow-x-hidden p-4 md:p-8 border-x border-white/10 max-w-[1600px] mx-auto transition-colors duration-300">
      
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsLightMode(!isLightMode)}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 border border-white/10 bg-white text-black shadow-2xl hover:bg-green-400 hover:border-green-400 transition-colors flex items-center justify-center group"
        aria-label="Toggle Theme"
      >
        {isLightMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
      </button>

      {/* Dynamic Background Noise */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="font-display font-black text-2xl tracking-tighter text-white uppercase flex items-center gap-1 group cursor-pointer">
            <span className="text-white group-hover:text-green-400 transition-colors">Sustain</span>
            <span className="text-green-400 group-hover:text-white transition-colors">X</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Problem', 'System', 'Use Cases'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[10px] font-semibold tracking-widest uppercase text-neutral-500 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-white text-black px-8 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-green-400 transition-colors">
              Book Now
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-neutral-950 flex flex-col items-center justify-center gap-8 md:hidden">
          {['Problem', 'System', 'Use Cases'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setMobileMenuOpen(false)} className="text-2xl font-display font-bold tracking-widest uppercase text-white hover:text-green-400 transition-colors">
              {item}
            </a>
          ))}
          <button className="text-sm uppercase tracking-widest font-bold text-black bg-green-400 px-8 py-4 hover:bg-white transition-all">
            Book Now
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 md:pt-48 pb-12 w-full flex flex-col justify-center relative overflow-hidden border border-white/10">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-green-400/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative z-10">
          <div className="col-span-1 lg:col-span-8 group">
            <h1 className="text-[14vw] lg:text-[9vw] leading-none font-display font-black tracking-[-0.05em] text-white uppercase break-words">
              Powering<br/>The <span className="text-neutral-700 inline-block transform group-hover:translate-x-4 transition-transform duration-500">Future.</span><br/>Anywhere.
            </h1>
          </div>
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-8 pb-2">
            <div className="text-[10px] font-black uppercase tracking-widest text-green-400">Solar Mobility Infrastructure</div>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-sm uppercase tracking-wide font-semibold">
              Solar-powered mobile EV charging vans delivering fast, on-demand charging to rural and remote areas. <span className="text-white font-bold">No grid required.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-green-400 transition-colors flex items-center justify-center gap-2 group whitespace-nowrap">
                Book a Van <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border border-white/10 px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-colors whitespace-nowrap text-white">
                Download App
              </button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 md:mt-24 w-full h-[40vh] md:h-[55vh] relative border-t border-white/10 group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938cb?auto=format&fit=crop&q=80&w=2600" 
            alt="Off grid solar setup" 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex items-center gap-4">
             <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
             <span className="text-xs font-bold tracking-widest uppercase text-white bg-black/50 backdrop-blur-md px-3 py-1 border border-white/10">Active Deployment</span>
          </div>
        </div>
      </section>

      {/* Problem vs Solution - Split */}
      <section id="problem" className="mt-8 border border-white/10 bg-neutral-950">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Problem */}
          <div className="p-10 md:p-20 border-b md:border-b-0 md:border-r border-white/10 bg-neutral-900/30 group hover:bg-neutral-900/40 transition-colors">
            <div className="text-green-400 text-[10px] font-black tracking-widest uppercase mb-12 flex justify-between items-center">
              <span>01 // The Problem</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
            </div>
            <h2 className="text-7xl md:text-9xl font-display font-black tracking-[-0.05em] text-white mb-2">730<span className="text-neutral-700">M</span></h2>
            <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold mt-1 mb-4">Lack Reliable Electricity</div>
            <p className="text-xs text-neutral-400 leading-relaxed font-semibold">Uneven EV infrastructure leaves massive populations stranded in transit or completely unable to adopt sustainable transport in rural grids.</p>
          </div>
          {/* Solution */}
          <div className="p-10 md:p-20 bg-neutral-900/50 group hover:bg-neutral-900/60 transition-colors">
            <div className="text-white text-[10px] font-black tracking-widest uppercase mb-12 flex justify-between items-center">
              <span>02 // The Solution</span>
              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black tracking-[-0.05em] text-green-400 mb-2 uppercase leading-none">100% Off-Grid<br/><span className="text-white">Mobility.</span></h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-semibold mt-4">Fast DC charging powered by the sun. Zero emissions. Zero waste. Rapid deployment anywhere you are.</p>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="system" className="mt-8 border border-white/10 bg-neutral-950">
        <div className="p-8 md:p-16 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-neutral-900/20">
          <div>
            <div className="text-[10px] font-black tracking-widest uppercase text-neutral-500 mb-4">03 // System Specs</div>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-[-0.05em] text-white uppercase">Architecture</h2>
          </div>
          <p className="text-neutral-500 max-w-sm text-sm font-medium uppercase tracking-wide">Military-grade off-grid power systems packed into a mobile fleet.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Zap, title: "On-Demand Mobile Charging", desc: "Bring the station to your vehicle anywhere, anytime. App-triggered deployment." },
            { icon: Sun, title: "100% Solar-Powered Storage", desc: "Equipped with high-efficiency PV panels & dense Li-ion arrays for pure green energy." },
            { icon: Battery, title: "Fast DC Charging", desc: "Rapid power delivery matching permanent superchargers. Less waiting, more driving." },
            { icon: Smartphone, title: "App-Based Booking", desc: "Seamless scheduling, live tracking, and payments directly from your smartphone." },
            { icon: Map, title: "GPS Route Optimization", desc: "Advanced algorithmic fleet management ensures optimal dispatching and lowest ETA." },
            { icon: Globe2, title: "Zero Carbon Footprint", desc: "Absolutely no fossil fuel dependencies. True clean and silent mobility." }
          ].map((feat, i) => (
            <div key={i} className={`p-10 border-white/10 hover:bg-neutral-900/80 transition-colors group relative overflow-hidden ${
              // Add borders to create grid
              (i % 3 !== 2 ? 'lg:border-r ' : '') + 
              (i < 3 ? 'lg:border-b ' : '') +
              (i % 2 !== 1 ? 'md:border-r ' : 'md:border-r-0 lg:border-r ') +
              (i < 4 ? 'md:border-b ' : '') + 
              'border-b last:border-b-0 md:last:border-b-0'
            }`}>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-neutral-800 font-display font-black text-6xl absolute top-4 right-4 opacity-50 group-hover:text-neutral-700 transition-colors">
                0{i + 1}
              </div>
              
              <feat.icon className="w-10 h-10 text-neutral-500 group-hover:text-green-400 mb-10 transition-colors relative z-10" strokeWidth={1.5} />
              <h3 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-tight relative z-10">{feat.title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed relative z-10">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience */}
      <section id="use-cases" className="mt-8 border border-white/10 bg-neutral-950">
        <div className="p-8 md:p-16 border-b border-white/10">
           <div className="text-green-400 text-xs font-bold tracking-widest uppercase mb-4">04 // Use Cases</div>
           <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter text-white uppercase">Deployment</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white hover:text-black transition-colors group cursor-pointer">
            <div className="text-xs font-bold tracking-widest uppercase mb-8 text-neutral-500 group-hover:text-black/50 transition-colors">Target_A</div>
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase group-hover:text-black transition-colors">B2C <br/>Consumers</h3>
            <p className="text-neutral-400 group-hover:text-neutral-800 transition-colors text-lg">Rural residents & stranded travelers. Eliminating range anxiety in regions forgotten by traditional charging networks.</p>
          </div>
          <div className="p-12 md:p-20 hover:bg-green-400 hover:text-black transition-colors group cursor-pointer">
            <div className="text-xs font-bold tracking-widest uppercase mb-8 text-neutral-500 group-hover:text-black/50 transition-colors">Target_B</div>
            <h3 className="text-4xl md:text-5xl font-display font-black tracking-tighter mb-6 uppercase group-hover:text-black transition-colors">B2B <br/>Enterprise</h3>
            <p className="text-neutral-400 group-hover:text-neutral-800 transition-colors text-lg">Wholesale power & small business backup. Scalable mobile energy reserves for festivals, worksites, and off-grid ops.</p>
          </div>
        </div>
      </section>

      {/* Pricing Brutalist */}
      <section className="mt-8 border border-white/10 bg-neutral-950 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 relative">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617786026938-16cb32128795?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay grayscale" />
            
            <div className="relative z-10">
              <div className="text-white text-xs font-bold tracking-widest uppercase mb-6">05 // Access</div>
              <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white uppercase mb-8 leading-[0.85]">
                ACCESS <br/>THE <span className="text-green-400">GRID.</span>
              </h2>
              <p className="text-neutral-400 text-lg uppercase tracking-wide font-medium max-w-sm">
                Secure your priority charging pass. Never worry about reaching the next station again.
              </p>
            </div>
          </div>
          
          <div className="p-12 md:p-24 bg-neutral-900 border border-green-400/30 flex flex-col justify-center group hover:bg-neutral-800 transition-colors">
            <div className="text-green-400 text-[10px] font-black tracking-widest uppercase mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 fill-green-400" /> Core Subscription
            </div>
            
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-7xl md:text-9xl font-display font-black tracking-[-0.05em] text-white group-hover:text-green-400 transition-colors">₹499</span>
              <span className="text-sm font-bold uppercase tracking-widest text-neutral-500">/mo</span>
            </div>
            
            <div className="w-full h-[1px] bg-white/10 mb-10" />
            
            <ul className="space-y-4 mb-14 font-display font-semibold tracking-wide text-xs text-neutral-400 uppercase">
              <li className="flex items-center gap-4"><div className="w-1 h-1 bg-green-400"></div> Priority Van Booking</li>
              <li className="flex items-center gap-4"><div className="w-1 h-1 bg-green-400"></div> 24/7 Roadside Assist</li>
              <li className="flex items-center gap-4"><div className="w-1 h-1 bg-green-400"></div> IoT Health Reports</li>
            </ul>
            
            <button className="bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-green-400 transition-colors w-full sm:w-auto self-start">
              SUBSCRIBE NOW
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 border border-white/10 bg-neutral-950">
        <div className="px-8 py-16 md:p-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-md">
            <div className="font-display font-black text-4xl tracking-tighter text-white uppercase mb-8">
              Sustain<span className="text-green-400">X</span>
            </div>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed tracking-wide uppercase font-medium">
              Tackling climate change & reducing waste pollution through decentralized, zero-emission mobile infrastructure.
            </p>
          </div>
          
          <div className="text-left md:text-right flex flex-col gap-8 md:gap-4">
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-3 whitespace-nowrap">Institution</p>
              <p className="text-white text-sm md:text-base font-bold tracking-wider uppercase hover:text-green-400 cursor-pointer transition-colors">B.I.E.T Jhansi</p>
            </div>
            <div>
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest mb-3 whitespace-nowrap">Backed By</p>
              <p className="text-white text-sm md:text-base font-bold tracking-wider uppercase hover:text-green-400 cursor-pointer transition-colors">Wadhwani Foundation Venture</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 p-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-bold tracking-widest uppercase text-neutral-600 relative overflow-hidden">
           <p>© {new Date().getFullYear()} SustainX</p>
           <p>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}