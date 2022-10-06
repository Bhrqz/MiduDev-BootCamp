
import './App.css';
import Mensaje from "./Mensaje.js"

function App() {

  const Descripcion = () => {
    return <p> Texto de Descripcion</p>
  }
  
  return (
    <div className="App">
      <Mensaje color="red" message="Mensaje 1"/>
      <Mensaje color="green" message="Mensaje 2"/>
      <Mensaje color="blue" message="Mensaje 3" />
      <br />
      <Descripcion />

    </div>
  );
}

export default App;
