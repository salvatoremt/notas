import {useState} from "react";

function App(){
//TODO presentar el concepto de "state"
// hrs

const [inputState,setInputState] = useState({
  titulo: "",
  fecha: "",
  nota: "",
});

const handleInputChange = (event) => {
  // console.log(event.target);
  setInputState({
    ...inputState,
  [event.target.name]: event.target.value,
  });
}; 

const handleClicklimpiar= () => {
  setInputState({titulo:"",fecha:"",nota:""});
};

const handleClickGuardar = () => {
  let arregloNotas = JSON.parse (localStorage.getItem("notas"))||[];
  arregloNotas.push(inputState);
  localStorage.setItem("notas", JSON.stringify(arregloNotas));
  handleClicklimpiar(); 
};

  return (

  <div className="App container">
  <div className="row">
  <div className="col">
  <h3>lista</h3>
  </div>
  <div className="col">
  <h3<Notas</h3>
  <label className="mb-2" style={{width: "100%"}}>
    titulo
    <input
    id="titulo"
    name="titulo"
    type="text"
    onChange={handleInputChange}
    value={inputState.titulo}
    style={{width:"100%"}}
    />
    </label>
    <br />
    <label className="mb-2" style={{width:"100%"}}
    fecha
    <input
    id="fecha"
    name="fecha"
    type="text"
    onChange={handleInputChange}
    value={inputState.fecha}
    style={{width:"100%"}}
    />
    </label>
    <br />
    <label style={{width: "100%"}}>
      Nota
      <input
      id="notas"
      name="nota"
      type="text"
      onChange={handleInputChange}
      value={inputState.nota}
      style={{width:"100%"}}
      onChange={handleInputChange}
      value={inputState.nota}
      style={{width:"100%"}}
      />
      </label>
      <hr />
      <div className="m-2 me-2 mt-2 row"> 
        <div className="col">
          <span className="row me-1">
            <button
            type="button"
            className="btn btn-primary"
            onClick={handleClicklimpiar}
            > 
            limpiar
            </button>
            </span>
            </div>
            <div className="col"> 
              <span className="row ms-1">
                <button
                type="button"
                className="btn btn-primary"
                onClick={handleClickGuardar}
                </div>
                <div className=""




  );
}


export default App;