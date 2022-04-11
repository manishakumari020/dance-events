import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const activeImageUrlClassName = isActive
    ? 'event-image active'
    : 'event-image'

  const onClickActiveEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-list-container">
      <button
        type="button"
        className="event-button"
        onClick={onClickActiveEvent}
      >
        <img src={imageUrl} alt="event" className={activeImageUrlClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
