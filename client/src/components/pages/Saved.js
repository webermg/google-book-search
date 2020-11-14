import React from 'react'
import api from '../../util/api'
import Header from '../Header'
import Results from '../Results'



export default function Saved() {
  const [myBooks, setMyBooks] = React.useState([])

  const getBooks = () => {
    api.getAll().then(res => {
      setMyBooks(res.data)
    })
  }

  React.useEffect(() => {
    getBooks();
  }, [])

  const delBtnClick = (id) => {
    api.delete(id).then(res => {
      console.log("deleted")
      getBooks();
    }).catch(err => console.log(err))
  }

  return (
    <div className="container mt-3">
      <Header />
      <Results books={myBooks} onDelete={delBtnClick}/>
    </div>
  )
}
