import './NewEventForm.css'
import { useState } from 'react'

export default function NewEventForm({ addEvent, setShowEvents }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('menchaster')

  const resetForm = (e) => {
    e.preventDefault()
    setTitle('')
    setDate('')
    setLocation('')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const event = {
      title: title,
      date: date,
      id: Math.floor(Math.random() * 1000000),
      location: location,
    }

    addEvent(event)
    resetForm()
    setShowEvents()
  }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input name="title" onChange={(e) => setTitle(e.target.value)} type="text" value={title} />
      </label>
      <label>
        <span>Event Date:</span>
        <input name="date" onChange={(e) => setDate(e.target.value)} type="date" value={date} />
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="manchester">Manchester</option>
          <option value="london">London</option>
          <option value="cardiff">Cardiff</option>
        </select>
      </label>
      <button>Submit</button>
      <p>
        {title} - {date}
        <button onClick={resetForm}>reset</button>
      </p>
    </form>
  )
}
