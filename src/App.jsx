
const App= () => {
  const persona={    
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
  const contactoPersona={
    telefono:"229 521 34 21",
    email:"jaqueline2022@gmail.com",
    web:"www.jaquiOz.com.mx",
  };
  
  const infoPersona = {...persona, ...contactoPersona, empresa: "OZZ"};
  infoPersona.apodo="JaquiLaRota"  
  
    const {Edad, nombre, Apellido}= persona;
    const {calle, numExt, ciudad}= persona.direccion;
    const humanos=["Antonio", "Guadalupe", "Joan", "Josselin"];
    const [padre, madre, hermano, hermana]=humanos;
    const mascotas = ["Santa's helper", "Snow Ball"];
  
    const familia =[...humanos, ...mascotas, "Juan Daniel"];
    console.log(familia)



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