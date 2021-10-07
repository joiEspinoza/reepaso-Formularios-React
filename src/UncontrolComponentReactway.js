import { useRef } from "react"


const UncontrolComponentReactway = () => 
{
    const refInput = useRef();
    const inputFile = useRef();


    const sub = () =>
    {
        console.log( refInput.current.value );
        console.log( inputFile.current.files[0] );

        const form = new FormData();
        form.append( "campo1", refInput.current.value  )
        form.append( "archivo", inputFile.current.files[0] )

        fetch( "/endpoint", { method : "POST", body : form } )
    }
    
    return (
        
        <div>
            
            <div>
                <span> Form 2 </span>
                <br/>
                <input name="campo1" ref={ refInput } autoComplete="off"/>
                <br/>
                <input type="file" name="archivo" ref={ inputFile } />
            </div>
            
        
            <br/>

            <input type="submit" value="enviar" onClick={ sub } />

        </div>
    )
}

export default UncontrolComponentReactway
