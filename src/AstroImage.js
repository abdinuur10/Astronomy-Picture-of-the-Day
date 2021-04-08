import React from 'react'


export default function Nasa(props) {
    const {title, date, explanation, hdurl} = props.data
    return (
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <img src= {hdurl}atl={title}/>
            <p>{explanation}</p>
        </div>
    )
}



