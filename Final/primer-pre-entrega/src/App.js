import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a LA CANCHA, aquí encontrarás todo para tu look!"}/>
      <Footer/>
    </div>
  );
}

export default App;
