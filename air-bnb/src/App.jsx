import { useState } from 'react'
import Nav from '../public/components/Navbar'
import Places from '../public/components/Places'
import data from '../public/components/Data'
import './App.css'

function App() {

  const cards = data.map(item => {
    return (
      <Places
        key={item.id}
        {...item}
        />
    )
  })

  return (
    <div className="App">
      <Nav />
        <section className='cards--list'>
          {cards}
        </section>
        <footer><a target="_blank" href="https://icons8.com/icon/124191/location">Location icon by Icons8</a></footer>
    </div>
  )
}

export default App
