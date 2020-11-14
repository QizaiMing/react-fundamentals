import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

//JSX
import { books } from './books'
import Book from './book'

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting
// Nested Components, React Tools

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// }

// setup vars

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
