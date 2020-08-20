import React from 'react';

const SearchUsername = (searchusername, searchusernamechange) => {
    return(
        <div className = 'pa2'>
            <input 
            className = 'pa3 ba b--green bg-lightest-blue'
            type = 'search'
            placeholder ='Search by username'
            onChange = {searchusernamechange}/>

        </div>
    )

}

export default SearchUsername