import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="app">
        {/* <AppRouter /> */}

        <Header />
        <HomePage />
        <div
          className={`${
            scrollPosition < 800 ? "first-app-background" : "hidden"
          }`}
        >
          <div className="background-overlay"></div>
        </div>
        <div className="second-app-background">
          <div className="background-overlay"></div>
        </div>
      </div>
    </>
  );
}

export default App;
