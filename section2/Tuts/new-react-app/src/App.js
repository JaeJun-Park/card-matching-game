import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: 'hijacking the flight', id: 1 },
    { title: 'the murderer', id: 2 },
    { title: 'minions', id: 3 },
  ])

  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== id))
  }
  const subtitle = 'All the latest events in Marioland'

  return (
    <div className="App">
      <Title title="events in your area" subtitle={subtitle}></Title>
      <Title title="just another title" subtitle={subtitle}></Title>
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show</button>
        </div>
      )}
      {showEvents &&
        events.map((event) => (
          <React.Fragment key={event.id}>
            <h2>
              {event.id} - {event.title}
            </h2>
            <button onClick={() => handleClick(event.id)}> delete </button>
          </React.Fragment>
        ))}
      <Modal>
        <h2>33% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam enim corporis. Voluptatum tempora nostrum quo sunt ducimus, facilis excepturi.</p>
      </Modal>
    </div>
  )
}

export default App
