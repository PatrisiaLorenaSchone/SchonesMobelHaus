import React from 'react'
import youtubeIcon from '../assets/youtube-icon.png'
import phoneIcon from '../assets/phone-icon.png'
import navigationIcon from '../assets/navigation-icon.png'
import emailIcon from '../assets/email-icon.png'
import logo from '../assets/logopng.png'
import Thanks from './Thanks'
import flyer from '../assets/flyer.pdf'

function Footer() {
  const [send, setSend] = React.useState(false)
  const [data, setData] = React.useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  })

  function handleChange(e){
    let {name, value} = event.target
    setData((prevData)=>{
      return{
        ...prevData,
        [name]: value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setSend(true)

    fetch("formsubmit.co/schoneioan@gmail.com", {
      method: "POST",
      headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          ...data
      })
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
      
  //   setMessage((prevMessage)=> !prevMessage);
  };

  return (
    <footer id="contact">
      <h2>Kontakt</h2>
      <div className='row'>
        
       <form method='POST' onSubmit={handleSubmit}>
       {send ? <Thanks/> :
        <>
        <p>Schick uns eine Nachricht</p>
        <div className='row'>
          <label htmlFor="email">Email: </label>
          <input
          value={data.email}
          onChange={handleChange}
          name='email' id='email' type="email" placeholder='Email' required />
        </div>
        <div className='row'>
          <label htmlFor="name">Name: </label>
          <input
          value={data.name}
          onChange={handleChange}
          name='name' id='name' type="text" placeholder='Name' required />
        </div>
        <div className='row'>
          <label htmlFor="tel">Telefon: </label>
          <input 
          value={data.tel}
          onChange={handleChange}
          name='tel' id='tel' type="text" placeholder='Telefonnummer' required />
        </div>
        <div className='col'>
        <label htmlFor="message">&nbsp;Message: </label>
          <textarea 
          value={data.message}
          onChange={handleChange}
          name='message' id='message' placeholder='Message...' required rows={8} cols={29}/>
        </div>
        <button>Send</button>
        </>
        }
       </form>
       <div className="col contact-info">
       <p>Wir freuen uns auf die Zusammenarbeit mit Ihnen!</p>
       <ul>
        <li><span>Telefonnummer:</span> 015175434183</li>
        <li><span>Emailadresse:</span> schoneioan@gmail.com</li>
        <li><span>Standort:</span> Watzmannstrasse 15 84503 Altötting</li>
        <li><span>Impresum</span></li>
       </ul>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2657.8337066063577!2d12.661896599999999!3d48.2290766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4775c47a3cc88c05%3A0x6b684d35a643ae7c!2sWatzmannstra%C3%9Fe%2015%2C%2084503%20Alt%C3%B6tting!5e0!3m2!1sen!2sde!4v1702660899440!5m2!1sen!2sde"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
       <div className="row flyer">
       <img height={100} src={logo} alt="" />
       <a href={flyer} download target='_blank'>Laden Sie eine PDF-Version unseres Firmenflyers herunter</a>
       </div>
       </div>
       </div>
       <div className="col">
        <p>Finden Sie uns online</p>
        <div className="social-section">
        <a href="tel:015175434183"><img src={phoneIcon} alt="" /></a>
        <a href="mailto:schoneioan@gmail.com"><img src={emailIcon} alt=""/></a>
        <a target='_blank' href="https://maps.app.goo.gl/et4fma2NXeWSso3a9"><img src={navigationIcon} alt="" /></a>
        <a target='_blank' href="https://www.youtube.com/@schoneioan8301/featured"><img src={youtubeIcon} alt="" /></a>
       </div>
       </div>
    </footer> 
  )
}
//        Telefonnummer: 015175434183
//        Emailadresse: schoneioan@gmail.com
//        Standort: Watzmannstrasse 15 84503 Altötting
export default Footer
