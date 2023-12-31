import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = ( event ) => { 
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;


        // setCategories( categories => [inputValue, ...categories]);
        setInputValue(''); //Limpia el input cada vez que se inserta un valor
        onNewCategory( inputValue.trim() );
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value= { inputValue }
                onChange={ onInputChange }
            />
        </form>
        
    )
}
