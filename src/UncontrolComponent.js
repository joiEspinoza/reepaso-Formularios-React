
const UncontrolComponent = () =>
{

  //form no controlado
  
  const formFunction = (e) =>
  {
    e.preventDefault();

    const data = Object.fromEntries( Array.from( new FormData( e.target ) ) );

    console.log( data );

  }



  return(

    <form onSubmit={ formFunction }>

      <div>
        
        <span>Formulario</span>
        
        <br/>

        <input name="campo1" placeholder="campo 1" autoComplete="off"/>
      
      </div>

      <input name="campo2" placeholder="campo 2" autoComplete="off" />
      
      <br/>
      
      <input type="submit" value="ingresar" />
    
    </form>
  
  )

}

export default UncontrolComponent;
