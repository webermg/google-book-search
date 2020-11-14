import React from 'react'
import Header from '../Header'
import api from '../../util/api'
import Results from '../Results'
import SearchForm from '../SearchForm'

export default function Search() {
  const [results, setResults] = React.useState([])
  const [input,setInput] = React.useState("");

  
  React.useEffect(() => {
    api.search("harry+potter").then(res => {
      console.log(res.data.items)
      setResults(res.data.items)
    })
  }, [])

  const searchFormChange = e => {
    const {name,value} = e.target;
    setInput({
      [name]:value
    })
    console.log(input)
  }

  const searchBtnClick = () => {
    api.search(input.search).then(res=>{
      setResults(res.data.items);
    })
  }

  return (
    <div className="container">
      <Header/>
      <SearchForm onChange={searchFormChange} onClick={searchBtnClick}/>
      {results && <Results books={results}/>}
      {!results && <h1>No books found :(</h1>}
    </div>
  )
}
