import React from 'react'
import Book from './Book'

export default function Results(props) {
  return (
    <div className='col-12 mt-3 d-flex flex-column results'>
      {props.books.map(book => (<Book 
        key={book.id}
        info={book.volumeInfo}
        />))}
    </div>
  )
}
