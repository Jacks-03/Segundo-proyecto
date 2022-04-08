
const App= () => {
  const miObjeto={
    nombre:"Jaqueline",
    ApPaterno:"Juarez",
    ApMaterno:"Silva",
    Edad:21,
  };
  const atributo="ApPaterno"
  return(
    <div className="App">
      {/*ECMAScript 6*/}
      <h1>{`Mi nombre es ${miObjeto.nombre} ${miObjeto.ApPaterno} ${miObjeto.ApMaterno} y tengo ${miObjeto.Edad} años`}</h1>
     {/*ECMAScript 6*/}
     <h2>{"Mi nombre es "+
     miObjeto.nombre+" "+miObjeto.ApPaterno+" "+miObjeto.ApMaterno+" y tengo "+miObjeto.Edad+" años"}</h2>
    </div>
  );
}


export default App;