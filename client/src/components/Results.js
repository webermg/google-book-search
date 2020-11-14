import React from 'react'
import Book from './Book'

export default function Results(props) {
  return (
    <div className='col-12 d-flex flex-column results'>
      {props.books.map(book => (<Book 
        title={book.volumeInfo.title}
        authors={book.volumeInfo.authors}
        image={book.volumeInfo.imageLinks.thumbnail}
        date={book.volumeInfo.publishedDate}
        publisher={book.volumeInfo.publisher}
        description={book.volumeInfo.description}
        infoLink={book.volumeInfo.infoLink}
        />))}
    </div>
  )
}
