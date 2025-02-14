import Header from "./components/header/Header";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-overlay">
          <Header />
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
