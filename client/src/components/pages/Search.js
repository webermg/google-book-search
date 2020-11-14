import React from 'react'
import Header from '../Header'

export default function Search() {
  const [results, setResults] = React.useState([])
  return (
    <div className="container">
      <Header/>
      {results && <Results books={results}/>}
    </div>
  )
}
