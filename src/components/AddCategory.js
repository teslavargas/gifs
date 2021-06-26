import React, { useState } from 'react'
import PropTypes from 'prop-types'; 

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); 
    const handdleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    const handdleSubmit = (e) => {
        e.preventDefault(); 
        
        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue(''); 
        }
    
    }

    return (
        <form onSubmit={handdleSubmit}>
            <p> { inputValue } </p>
            <input type="text" value={inputValue} onChange={handdleInputChange}/>
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}