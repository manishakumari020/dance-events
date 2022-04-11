import './index.css'

const registratonStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegistrationStatus} = props

  const renderedNoActiveRegistrationView = () => (
    <p className="no-active-event">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationClosedView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
        className="closed-view-img"
      />
      <h1 className="closed-view-heading">Registrations Are Closed Now!</h1>
      <p className="description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegisteredView = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="register-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-register-img"
      />
      <p className="yet-register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const renderActiveRegistrationDetails = () => {
    switch (activeEventRegistrationStatus) {
      case registratonStatus.yetToRegister:
        return renderYetToRegister()
      case registratonStatus.registered:
        return renderRegisteredView()
      case registratonStatus.registrationClosed:
        return renderRegistrationClosedView()
      default:
        return renderedNoActiveRegistrationView()
    }
  }
  return (
    <div className="registration-status-container">
      {renderActiveRegistrationDetails()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
