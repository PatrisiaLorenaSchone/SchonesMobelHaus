import React from 'react'
import Header from '../components/Header'
import { IoIosMenu } from "react-icons/io";
import Title from '../components/Title'
import { motion } from "framer-motion"
import pig from '../assets/pig.jpg'
import { FaPhone } from 'react-icons/fa6';

function Pricepage() {
  return (
    <div>
      <Header text="Angebote"/>
      <section className='padding'>
        <Title text="Faire und flexible Preise"/>
        <p>Umzugskosten sind von zahlreichen Faktoren abhängig. Neben dem Volumen des Umzugsguts und der Entfernung werden die Preise von individuellen Zusatzleistungen beeinflusst. Durch optimierte Routenplanung, exakte Volumenberechnung und das Vermeiden von Leerfahrten, erreichen wir eine Kostenersparnis von bis zu 40 %.</p>
      </section>
      <motion.section
        initial={{y: 200, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:1}}
        className='table-section padding'>
      <Title text="Preis je nach Entfernung"/>
        <p> Regional | Nahbereich | Fernbereich</p>
        <hr/>
        <table>
          <tbody>
            <tr>
                <td><IoIosMenu/></td>
                <th> Bis zu 50  &nbsp;  km</th>
                <th> Bis zu 100 km </th>
                <th> Bis zu 500 km </th>
            </tr>
            <tr>
                <th>ca. 50m<sup>2</sup></th>
                <td>550 - 900 &euro; </td>
                <td>600 - 1000 &euro; </td>
                <td>1200 - 1900 &euro; </td>
            </tr>
            <tr>
                <th>ca. 75m<sup>2</sup></th>
                <td>700 - 1100 &euro; </td>
                <td>750 - 1200 &euro; </td>
                <td>1300 - 2000 &euro; </td>
            </tr>
            <tr>
                <th>ca. 50m<sup>2</sup></th>
                <td>850 - 1350 &euro; </td>
                <td>900 - 1550 &euro; </td>
                <td>1450 - 2200 &euro; </td>
            </tr>
            <tr>
                <th>ca. 50m<sup>2</sup></th>
                <td>1150 - 1850 &euro; </td>
                <td>1300 - 2000 &euro; </td>
                <td>1800 - 2800 &euro; </td>
            </tr>
            </tbody>
        </table>
      </motion.section>
      <motion.section
        initial={{y: 200, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:1}}
        className='padding'>
        <Title text="Persönlicher Umzugsberater"/>
        <div className="row">
        <img className='s-img' height={330} src={pig} alt="" />
        <div className="col">
            <p> Umfassende Beratung durch Ihren persönlichen Umzugsberater, der Ihren Umzug plant und ein individuelles Umzugsangebot für Sie erstellt.</p>
            <p>Anschließend zeigen wir Ihnen direkt Ihr persönliches Umzugsangebot zum fairen Preis - ohne verstecke Kosten oder Gebühren. Alternativ stehen wir auch telefonisch für Sie bereit.</p>
            <a href="tel:015175434183" className="orange-btn"><FaPhone fill='orange'/> <h3>Anrufen</h3></a>
        </div>
        </div>
      </motion.section>
      <motion.section
        initial={{y: 200, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:1}}
        className='table-section padding'>
        <Title text="Preisliste für Sperrmüll"/>
      <table>
        <tbody>
            <tr>
                <th colSpan="5">Preis pro Kilo - 0,40&euro;  1 kg - 5kg = 2,00&euro;</th>
            </tr>
            <tr>
                <td> 06 kg = 2,40 &euro; </td>
                <td> 07 kg = 2,80 &euro; </td>
                <td> 08 kg = 3,20 &euro; </td>
                <td> 09 kg = 3,60 &euro; </td>
                <td> 10 kg = 4,00 &euro; </td>
            </tr>
            <tr>
                <td> 11 kg = 4,40 &euro; </td>
                <td> 12 kg = 4,80 &euro; </td>
                <td> 13 kg = 5,20 &euro; </td>
                <td> 14 kg = 5,60 &euro; </td>
                <td> 15 kg = 6,00 &euro; </td>
            </tr>
            <tr>
                <td> 16 kg = 6,40 &euro; </td>
                <td> 17 kg = 6,80 &euro; </td>
                <td> 18 kg = 7,20 &euro; </td>
                <td> 19 kg = 7,60 &euro; </td>
                <td> 20 kg = 8,00 &euro; </td>
            </tr>
            <tr>
                <td> 21 kg = 8,40 &euro; </td>
                <td> 22 kg = 8,80 &euro; </td>
                <td> 23 kg = 9,20 &euro; </td>
                <td> 24 kg = 9,60 &euro; </td>
                <td> 25 kg = 10,00 &euro; </td>
            </tr>
            <tr>
                <td> 26 kg = 10,40 &euro; </td>
                <td> 27 kg = 10,80 &euro; </td>
                <td> 28 kg = 11,20 &euro; </td>
                <td> 29 kg = 11,60 &euro; </td>
                <td> 30 kg = 12,00 &euro; </td>
            </tr>
            <tr>
                <td> 31 kg = 12,40 &euro; </td>
                <td> 32 kg = 12,80 &euro; </td>
                <td> 33 kg = 13,20 &euro; </td>
                <td> 34 kg = 13,60 &euro; </td>
                <td> 35 kg = 14,00 &euro; </td>
            </tr>
            <tr>
                <td> 36 kg = 14,40 &euro; </td>
                <td> 37 kg = 14,80 &euro; </td>
                <td> 38 kg = 15,20 &euro; </td>
                <td> 39 kg = 15,60 &euro; </td>
                <td> 40 kg = 16,00 &euro; </td>
            </tr>  
            <tr>
                <td> 41 kg = 16,40 &euro; </td>
                <td> 42 kg = 16,80 &euro; </td>
                <td> 43 kg = 17,20 &euro; </td>
                <td> 44 kg = 17,60 &euro; </td>
                <td> 45 kg = 18,00 &euro; </td>
            </tr>  
            <tr>
                <td> 46 kg = 18,40 &euro; </td>
                <td> 47 kg = 18,80 &euro; </td>
                <td> 48 kg = 19,20 &euro; </td>
                <td> 49 kg = 19,60 &euro; </td>
                <td> 50 kg = 20,00 &euro; </td>
            </tr>  
            <tr>
                <td> 51 kg = 20,40 &euro; </td>
                <td> 52 kg = 20,80 &euro; </td>
                <td> 53 kg = 21,20 &euro; </td>
                <td> 54 kg = 21,60 &euro; </td>
                <td> 55 kg = 22,00 &euro; </td>
            </tr>
            <tr>
                <td> 56 kg = 22,40 &euro; </td>
                <td> 57 kg = 22,80 &euro; </td>
                <td> 58 kg = 23,20 &euro; </td>
                <td> 59 kg = 23,60 &euro; </td>
                <td> 60 kg = 24,00 &euro; </td>
            </tr>
            <tr>
                <td> 61 kg = 24,40 &euro; </td>
                <td> 62 kg = 24,80 &euro; </td>
                <td> 63 kg = 25,20 &euro; </td>
                <td> 64 kg = 25,60 &euro; </td>
                <td> 65 kg = 26,00 &euro; </td>
            </tr> 
            <tr>
                <td> 66 kg = 26,40 &euro; </td>
                <td> 67 kg = 26,80 &euro; </td>
                <td> 68 kg = 27,20 &euro; </td>
                <td> 69 kg = 27,60 &euro; </td>
                <td> 70 kg = 28,00 &euro; </td>
            </tr> 
            <tr>
                <td> 71 kg = 28,40 &euro; </td>
                <td> 72 kg = 28,80 &euro; </td>
                <td> 73 kg = 29,20 &euro; </td>
                <td> 74 kg = 29,60 &euro; </td>
                <td> 75 kg = 30,00 &euro; </td>
            </tr> 
            <tr>
                <td> 76 kg = 30,40 &euro; </td>
                <td> 77 kg = 30,80 &euro; </td>
                <td> 78 kg = 31,20 &euro; </td>
                <td> 79 kg = 31,60 &euro; </td>
                <td> 80 kg = 32,00 &euro; </td>
            </tr>
            <tr>
                <td> 81 kg = 32,40 &euro; </td>
                <td> 82 kg = 32,80 &euro; </td>
                <td> 83 kg = 33,20 &euro; </td>
                <td> 84 kg = 33,60 &euro; </td>
                <td> 85 kg = 34,00 &euro; </td>
            </tr> 
            <tr>
                <td> 86 kg = 34,40 &euro; </td>
                <td> 87 kg = 34,80 &euro; </td>
                <td> 88 kg = 35,20 &euro; </td>
                <td> 89 kg = 35,60 &euro; </td>
                <td> 90 kg = 36,00 &euro; </td>
            </tr>
            <tr>
                <td> 91 kg = 36,40 &euro; </td>
                <td> 92 kg = 36,80 &euro; </td>
                <td> 93 kg = 37,20 &euro; </td>
                <td> 94 kg = 37,60 &euro; </td>
                <td> 95 kg = 38,00 &euro; </td>
            </tr> 
            <tr>
                <td> 96 kg = 38,40 &euro; </td>
                <td> 97 kg = 38,80 &euro; </td>
                <td> 98 kg = 39,20 &euro; </td>
                <td> 99 kg = 39,60 &euro; </td>
                <td> 100 kg = 40,00 &euro; </td>
            </tr> 
            <tr>
                <td> 101 kg = 40,40 &euro; </td>
                <td> 102 kg = 40,80 &euro; </td>
                <td> 103 kg = 41,20 &euro; </td>
                <td> 104 kg = 41,60 &euro; </td>
                <td> 105 kg = 42,00 &euro; </td>
            </tr> 
            <tr>
                <td> 106 kg = 42,40 &euro; </td>
                <td> 107 kg = 42,80 &euro; </td>
                <td> 108 kg = 43,20 &euro; </td>
                <td> 109 kg = 43,60 &euro; </td>
                <td> 110 kg = 44,00 &euro; </td>
            </tr> 
          </tbody>                       
        </table>
      </motion.section>
    </div>
  )
}

export default Pricepage
