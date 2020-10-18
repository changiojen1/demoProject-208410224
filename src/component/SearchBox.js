import React from 'react'
import '../myCss.css'

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa2 sw20 ba bg-black white' 
            type='search' 
            placeholder='search phones'
            onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox
