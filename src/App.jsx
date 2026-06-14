import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatIsSection from './components/WhatIsSection';
import HowItWorks from './components/HowItWorks';
import AgentLibrary from './components/AgentLibrary';
import WhatStudentsLearn from './components/WhatStudentsLearn';
import SafeByDesign from './components/SafeByDesign';
import PlayToMastery from './components/PlayToMastery';
import ForSchools from './components/ForSchools';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <TopBar />
      <Navbar />
      <HeroSection />
      <WhatIsSection />
      <HowItWorks />
      <AgentLibrary />
      <WhatStudentsLearn />
      <SafeByDesign />
      <PlayToMastery />
      <ForSchools />
      <CTASection />
      <Footer />
    </div>
  );
}
