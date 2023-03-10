import Header from "./components/Header";
import "./App.css";
import Navigation from "./Navigation";
function App() {
  return (
    <>
      <Header></Header>
      <div style={{ marginTop: 54 }}>
        <Navigation />
      </div>
    </>
  );
}

export default App;
