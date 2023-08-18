import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpert = () => {

    const [categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Naruto']);

    const onAddCategory = ( newCategory ) => {
        console.log(newCategory);

        setCategories([newCategory, ...categories]) 
    }
    
    

    return (
        <>
            {/* TITULO */}
            <h1> GifExpert </h1>

            {/* <input/> */}
            <AddCategory
                //setCategories = { setCategories }

                onNewCategory = {(value) => onAddCategory(value)}
            />

            {/* Listados de gifs */}
           
            <ol>
                { categories.map( category => {
                    return <li key = { category }> { category } </li>
                })}
                {/* <li>ABC</li> */} 
            </ol>


        </>
    )
}
