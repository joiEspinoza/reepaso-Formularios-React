import { useState } from "react";

const App = () => 
{
    const [value, setValue] = useState({ normal : "", texto : "", hero : "", check : false, estado : "" })
    const { normal, texto, hero, check, estado } = value;


    const handleChange = ( { target } ) =>
    {
        setValue( (state) => 
        ({
            ...state, [target.name] : target.type === "checkbox" ? target.checked : target.value 
        }))
    }

    console.log( value );

    return (
        
        <div>
            
            { value.length <= 5 && <span> valor debe tener más de 5 caracteres</span>}
            <br/>
            <input name="normal" value={ normal } onChange={ handleChange } />
            
            <hr/>
            <br/>
            <textarea name="texto" value={ texto } onChange={ handleChange } />
            
            <hr/>
            <br/>
            <select name="hero" value={ hero } onChange={ handleChange }>
                <option value="">Choose your Hero</option>
                <option value="X">X</option>
                <option value="Zero">Zero</option>
                <option value="Axl">Axl</option>
            </select>

            <hr/>
            <br/>
            <label>Check Test</label>
            <input type="checkbox" name="check" checked={ check } onChange={ handleChange }/>
            
            <hr/>
            <br/>
            
        
            <label>Radio Test</label>
            <br/>
            A - <input onChange={ handleChange } type="radio" value="A" name="estado" checked={ estado === "A"}/>
            <br/>
            B - <input onChange={ handleChange } type="radio" value="B" name="estado" checked={ estado === "B"}/>
            <br/>
            C - <input onChange={ handleChange } type="radio" value="C" name="estado" checked={ estado === "C"}/>

      
            

            <hr/>

        </div>
    )
}

export default App
