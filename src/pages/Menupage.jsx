import React from 'react'
import Title from '../components/Title'
import { FaPhone } from 'react-icons/fa6';
import Header from '../components/Header'
import photo1 from '../assets/pexels-anna-shvets-3905696.jpg'
import photo2 from '../assets/pexels-blue-bird-7217807.jpg'
import photo3 from '../assets/cutie.jpg'
import photo4 from '../assets/cutieMare.png'
import photo5 from '../assets/folie.png'
import photo6 from '../assets/folie2.jpeg'

function Menupage() {
  return (
    <div>
      <Header text='Menü'/>
    <section>
      <div className="menu">
        <img  className="ph1" width={350} height={500} src={photo1} alt="" />
        <img width={350} height={500} src={photo2} alt="" />
        <div className="col">
        <Title text="Außerdem"/>
        <p>Wir behandeln die Artikel des Kunden mit größter Sorgfalt.
        Auf Anfrage bieten wir verschiedene Kartons und Verpackungsfolien an. Wir wollen sicherstellen, dass alles sicher sein Ziel erreicht. Und der Preis richtet sich nach der gewünschten Menge.</p>
        <a href="tel:015175434183" className="orange-btn"><FaPhone fill='orange'/> <h3>Anrufen</h3></a>
        </div>
      </div>
    </section>
    <section className='padding'>
      <p>        <p>Wir haben kleine und große Umzugskartons für persönliche Gegenstände oder Haushaltsgegenstände. Die perfekte Kleiderbox für Ihre Kleidung. Wir haben auch Plastikfolie zum Schutz Ihrer Artikel.</p></p>
      <div className='menu-ph'>
      <img height={300} src={photo5} alt="" /><img height={300} src={photo3} alt="" /><img height={300} src={photo4} alt="" />
      </div>
    </section>
    </div>
  )
}

export default Menupage
