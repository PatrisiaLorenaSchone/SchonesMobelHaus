import React from 'react'
import Title from '../components/Title'
import Review from '../components/Review'
import { delay, motion } from "framer-motion"
import video from '../assets/video2.mp4'
import raumung from '../assets/raumung.jpg'
import mob from '../assets/mobila1.jpg'
import camion from '../assets/camion2.jpeg'
import { FaTruck } from "react-icons/fa";
import { FaTruckLoading } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaBoxesPacking } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";
import { FaRecycle } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { MdChair } from "react-icons/md";

function Homepage() {
  return (
    <div>
      <div className="hero-section">
        <video id='background-video' autoPlay muted src={video}></video>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:7.5}}
        className="col hero-text">
        <h1 className="main-title">SCHÖNES MÖBELHAUS</h1>
        <motion.p
        initial={{opacity:0, y:200}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, delay:2}}
        >Die beste umzugsfirma auf den near</motion.p>
        <motion.div 
        initial={{opacity:0, y:200}}
        animate={{opacity:1, y:0}}
        transition={{duration:1, delay:2.5}}
        className="hero-buttons">
            <a className='orange-btn' href="#umzug"> &nbsp; Umzug &nbsp;</a>
            <a className='orange-btn' href="#raumung">Raumung</a>
        </motion.div>
        </motion.div>
      </div>
      <motion.section
      initial={{y: 200, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      >
        <Title text="Willkommen"/>
        <div className="col">
          <p>Unsere Umzugsfirma ist spezialisiert auf professionelle Umzugsservices für Privat- und Geschäftskunden.
           Wir bieten unseren Kunden eine umfassende Beratung, eine sorgfältige Vorbereitung und Durchführung des Umzugs sowie eine schnelle und zuverlässige Lieferung am Zielort.</p>
        </div>
        <div className='reviews-container'>
        <h3>Wie aus den Bewertungen hervorgeht, sind wir ein 5-Sterne-Umzugsunternehmen</h3>
      <div className='review-section'>
        <Review />
      </div>
      </div>
      </motion.section>
      <motion.section
      initial={{y: 200, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      className='umzug'
      >
        <img  src={camion} alt="" id='umzug'/>
          <div className="col auto">
          <Title text="Umzüge aller Art"/>
          <p>Sind Sie auf der Suche nach einer zuverlässigen und schnellen Umzugsfirma zum günstigen Preis, da Sind Siee genau richtig bei uns.</p>
          <p>Unsere erfahrenen Mitarbeiter sind geschult im Umgang mit empfindlichen Gegenständen und sorgen für einen reibungslosen Ablauf des Umzugs. Wir legen großen Wert auf Kundenzufriedenheit und stellen sicher, dass der Umzug für unsere Kunden so stressfrei wie möglich verläuft.</p>
          <div className='section-icons'>
          < FaClipboardList />
          <FaShippingFast />
          <FaBoxesPacking />
          </div>
          </div>
      </motion.section>
      <motion.section
      initial={{y: 200, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      className='transport'
      >
        <div className="col auto">
        <Title text="Transporte aller Art"/>
        <p>Unsere Umzugswagen und Mitarbeiter stellen wir Ihnen auch am Wochenende und Feiertagen zur Verfügung.</p>
        <p>Unsere Besichtigungen sind kostenlos
          und wir machen auch Kostenvorschläge. Mit einer Vorabbesichtigung oder mit einer Übersendug per Mail oder WathsApp Ihre Umzugssachen oder Fotos davon helfen wir Ihnen Ihre Umzug zu planen.</p>
          <div className='section-icons'>
          <FaTruckLoading />
          <FaTruck />
          <FaHome />
          </div>
        </div>
        <img  src={mob} alt="" id="raumung"/>
        {/* <button><IoMdArrowRoundForward /></button> */}
      </motion.section>
      <motion.section 
      initial={{y: 200, opacity:0}}
      whileInView={{y: 0, opacity:1}}
      transition={{duration:1}}
      className='transport'
      >
        <img src={raumung} alt="" id="raumung"/>
        <div className="col auto">
        <Title text="Haushalts und Wohnungsauflösung"/>
          <p>Möchten Sie Platz schaffen, weil sich über die Jahre viele unnütze Dinge angesammelt haben?
          Oder wollen Sie aufräumen, weil Sie in eine andere Stadt ziehen oder für längere Zeit ins Ausland gehen?
          Vielleicht ist aber auch ein lieber Angehöriger verstorben und Sie kümmern sich um die Haushaltsauflösung?</p>
          <p>In jedem Fall sind wir der richtige Ansprechpartner für Sie. Ob ganze Wohnung, Dachboden, Keller oder Büroräume - wir entrümpeln, entsorgen und räumen auf. Problematische Stoffe wie Farben, Motoröle, Batterien oder Spraydosen entsorgen wir fachgerecht an den dafür vorgesehenen Stellen, Sperr- und Restmüll transportieren wir zum Recycling-Hof. Am Ende übergeben wir Ihnen sämtliche Räume besenrein, ganz ohne Stress für Sie und Ihre Familie.</p>
          <div className='section-icons'>
          <MdChair />
          <FaTruckArrowRight />
          <FaRecycle />
          </div>
        </div>
      </motion.section>
      <section>
        <Title text="Präsentationsvideo"/>
        <iframe className='presentation' src="https://www.youtube.com/embed/Ryw8g0zbETg?si=qH2GyDglbsMrHgOf" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </section>
    </div>
  )
}

export default Homepage
/* 
          <p>In jedem Fall sind wir der richtige Ansprechpartner für Sie. Ob ganze Wohnung, Dachboden, Keller oder Büroräume - wir entrümpeln, entsorgen und räumen auf. Problematische Stoffe wie Farben, Motoröle, Batterien oder Spraydosen entsorgen wir fachgerecht an den dafür vorgesehenen Stellen, Sperr- und Restmüll transportieren wir zum Recycling-Hof. Am Ende übergeben wir Ihnen sämtliche Räume besenrein, ganz ohne Stress für Sie und Ihre Familie.
          Wir Freuen uns auf Ihre Anfrage</p>
          <div className='section-icons'>
          <FaTruckLoading />
          <FaTruck />
          <FaHome />
          </div>
*/