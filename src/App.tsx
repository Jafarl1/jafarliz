import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-overlay">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
