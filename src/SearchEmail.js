import React from 'react';

const SearchEmail = ({searchemail, searchemailchange}) => {
    return(
        <div className = 'pa2'>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type = 'search'
            placeholder ='Search by email'
            onChange = {searchemailchange}/>

        </div>
    )
}

export default SearchEmail