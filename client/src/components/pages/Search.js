import React from 'react'
import Header from '../Header'
import api from '../../util/api'
import Results from '../Results'

export default function Search() {
  const [results, setResults] = React.useState([])
  
  React.useEffect(() => {
    api.search("harry+potter").then(res => {
      console.log(res.data.items)
      setResults(res.data.items)
    })
  }, [])

  return (
    <div className="container">
      <Header/>
      {results && <Results books={results}/>}
      {!results && <h1>No books found :(</h1>}
    </div>
  )
}
