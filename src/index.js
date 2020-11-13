import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

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
const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg',
    title: 'The Body: A Guide for Occupants',
    author: 'Bill Bryson'
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51LV5uH7NmL._AC_SX184_.jpg',
    title: 'To Sleep In a Sea of Stars',
    author: 'Christopher Paolini'
  },
  {
    id: 3,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51B-BOBtQtL._AC_SX184_.jpg',
    title: 'Humans',
    author: 'Brandon Stanton'
  }
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book} />
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
