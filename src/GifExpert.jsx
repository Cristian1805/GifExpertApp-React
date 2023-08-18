import { useState } from 'react';
import { AddCategory } from './components/AddCategory';


export const GifExpert = () => {

    const [categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Naruto']);

    console.log(categories)
    // console.log(setCategories)
    
    

    return (
        <>
            {/* TITULO */}
            <h1> GifExpert </h1>

            {/* INPUT */}
            {/* <input/> */}
            <AddCategory setCategories = { setCategories }/>

            {/* LISTADO DE GIF */}
           
            <ol>
                { categories.map( category => {
                    return <li key = { category }> { category } </li>
                })}
                {/* <li>ABC</li> */} 
            </ol>


        </>
    )
}
