import React from "react";
import { directors } from "../data";

function Directors() {
  const allDirectors = directors.map((director) => {
    return (
      <div key={director.name}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  )
}

export default Directors;
