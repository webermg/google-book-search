import React from 'react'
import Book from './Book'
import FrownyFace from './FrownyFace'

export default function Results(props) {
  return props.books ? (
    <div className='col-12 mt-3 d-flex flex-column results'>
      {props.books.map(book => (<Book 
        key={book.id || book._id}
        info={book.volumeInfo ? book.volumeInfo : book}
        onDelete={props.onDelete}
        />))}
    </div>
  ) :
  (
    <h1><FrownyFace/> No books found <FrownyFace/></h1>
  )
}
