import { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import NavBar       from "./components/NavBar"; 
import Hero   from "./components/Hero";
import About from "./components/About";  
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import PlatformProfiles from "./components/PlatformProfiles";
 import Certifications from "./components/Certifications"; 
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div style={{
      background: dark ? "#0a0a14" : "#fafafa",
      color:      dark ? "#f8fafc" : "#0f172a",
      minHeight: "100vh",
      transition: "background 0.3s, color 0.3s",
    }}>
      <GlobalStyles />
      <NavBar dark={dark} setDark={setDark} /> 
       {<Hero dark={dark} />}
        {<About dark={dark} />}
        {<Skills dark={dark} />}
        {<Projects dark={dark} />}
        {<PlatformProfiles dark={dark} />}
        {<Certifications dark={dark} />}
        {<Blog dark={dark} />}
        {<Contact dark={dark} />}
        {<Footer dark={dark} />}
        {<AIChatbot dark={dark} />} 
    </div>
  );
}