import React from 'react'

function Thanks() {
  return (
  <div>
    <p>Danke für deine Nachricht!</p>
    <div className='thanks-text'>
      <p>Wir werden uns bald mit Ihnen in Verbindung setzen.</p>
      <p>Sollten Sie innerhalb von 24 Stunden keine Antwort erhalten,<br/>
      kontaktieren Sie uns bitte unter der Telefonnummer: 
      </p>
      <div>
      {/* <img alt="telephone icon" src="icons/iconmonstr-phone-8-240.png"/> */}
      <a href="tel:015175434183"><p> 015175434183</p></a>
      </div>
    </div>
  </div>
  )
}

export default Thanks
