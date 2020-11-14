import React from 'react'
import Header from '../Header'
import api from '../../util/api'
import Results from '../Results'
import SearchForm from '../SearchForm'

export default function Search() {
  const [results, setResults] = React.useState([])
  const [input,setInput] = React.useState("");

  
  React.useEffect(() => {
    // api.search("harry+potter").then(res => {
    //   console.log(res.data.items)
    //   setResults(res.data.items)
    // })
  }, [])

  const searchFormChange = e => {
    const {value} = e.target;
    setInput(value)
  }

  const submitForm = (e) => {
    e.preventDefault();
    api.search(input).then(res=>{
      setResults(res.data.items);
      setInput("")
    })
  }

  // const searchBtnClick = () => {
  //   api.search(input.search).then(res=>{
  //     setResults(res.data.items);
  //   })
  // }

  return (
    <div className="container">
      <Header/>
      <SearchForm value={input} onChange={searchFormChange} onSubmit={submitForm}/>
      <Results books={results}/>
    </div>
  )
}
