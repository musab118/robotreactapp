import React from 'react';

const Card = (props) =>{
    const {name,email,id,username} = props

    return(
        <div className= 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <h1>{id}</h1>
            <img alt='robots' src ={`https://robohash.org/${props.id}?300x300`}></img>
                <div>
                    <h2 className = ''>{name}</h2>
                    <p>{username}</p>
                    <p>{email}</p>
                    
                </div>
            
        </div>

    );
}

export default Card;
