
const App= () => {
  const miObjeto={
    nombre:"Jaqueline",
    Apellido:"Juarez",
    Edad:21,

    direccion:{
      calle:"1O sur",
      numExt:13,
      numIn:"",
      ciudad:"Tuxtepec, Oax",
    }
  };
  const {Edad, nombre, Apellido}= miObjeto;
  const {calle, numExt, ciudad}= miObjeto.direccion;
  const familia=["Antonio", "Guadalupe", "Joan", "Josselin"];
  const [padre, madre, hermano, hermana]=familia;


  return(
    <div className="App">
 <h3>{`Mi nombre es ${nombre} ${Apellido}, tengo ${Edad} años y vivo en ${calle} número ${numExt}, ${ciudad}`}</h3>
   <br />
   {"Mi familia lo conforman: "}
   <ul>
   <li>{`Mi padre: ${padre}`}</li>
     <li>{`Mi madre: ${madre}`}</li>
     <li>{`Mi hermanos: ${hermano} y ${hermana}`}</li>
   </ul>


  </div>
);
  }

export default App;