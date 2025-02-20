import { useEffect } from "react";
import Header from "./components/header/Header";
import AppRouter from "./AppRouter";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
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
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
