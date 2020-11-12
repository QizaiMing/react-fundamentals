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

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._AC_SX184_.jpg'
    alt=''
  />
)

const Title = () => <h1>The Body: A Guide for Occupants</h1>
const Author = () => <h4>Bill Bryson</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
