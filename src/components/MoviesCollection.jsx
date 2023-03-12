import React from 'react'

function MoviesCollection(props) {
  return (
    <div>
        {props.datas.map((data)=>{
           return <div key={data.id}>
              <h1>{data.moviename}</h1>
              <h2>{data.actor}</h2>
              <h2>{data.collection}</h2>
           </div>
        })}
    </div>
  )
}

export default MoviesCollection