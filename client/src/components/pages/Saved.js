import React from 'react'
import Header from '../Header'
import Results from '../Results'



export default function Saved() {
  const[myBooks, setMyBooks] = React.useState(null)

  React.useEffect(() => {
    //do api call
  }, [])

  return (
    <div className="container">
      <Header/>
      <Results books={myBooks}/>
    </div>
  )
}
