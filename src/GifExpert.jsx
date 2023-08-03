import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpert = () => {

    const [categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Naruto']);

    console.log(categories)
    // console.log(setCategories)
    
    const onAddCategory = () => {
        //Agregar nueva categoria
        setCategories(['Valorant', ...categories]);
    }

    return (
        <>
            {/* TITULO */}
            <h1> GifExpert </h1>

            {/* INPUT */}
            {/* <input/> */}
            <AddCategory/>

            {/* LISTADO DE GIF */}
            <button onClick={ onAddCategory }> Agregar </button>
            <ol>
                { categories.map( category => {
                    return <li key = { category }> { category } </li>
                })}
                {/* <li>ABC</li> */} 
            </ol>


        </>
    )
}
