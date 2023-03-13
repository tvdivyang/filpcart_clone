import Header from "./components/Header";
import "./App.css";
import Navigation from "./Navigation";
import Slider from "./components/Slider"
import ItemSlider from "./components/ItemSlider";
import Item from "./components/Item";


function App() {
  return (
    <>
      <Header></Header>
      <div style={{ marginTop: 54 }}>
        <Navigation />
        <Slider/>
        <ItemSlider></ItemSlider>
        <Item />
       
        <Slider/>
      </div>
    </>
  );
}

export default App;
