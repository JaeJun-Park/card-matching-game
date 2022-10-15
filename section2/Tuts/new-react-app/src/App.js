import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

export default function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const handleOpen = () => {
    setShowModal(true)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id != id))
  }

  const addEvent = (event) => {
    setEvents((prevEvents) => [...prevEvents, event])
    setShowModal(false)
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

      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>x</button>
        </Modal>
      )}
      <button onClick={handleOpen}>Add new event</button>
    </div>
  )
}
