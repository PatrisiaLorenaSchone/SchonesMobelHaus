import React from 'react'
import placeholder from '../assets/placeholder.png'
import { IoIosStar } from "react-icons/io";
import pp1 from '../assets/pp1.png'
import pp2 from '../assets/pp2.png'
import pp3 from '../assets/pp3.png'
import pp4 from '../assets/pp4.png'

let mess = [
{
  img: pp3,
  name: "Luisa Mocker",
  text: "Ich habe kürzlich Schone Mobelhaus für meinen Umzug genutzt und ich muss sagen, dass ich von ihren Dienstleistungen völlig beeindruckt war. Von Anfang bis Ende boten sie erstklassigen Service und machten meinen Umzug stressfrei.",
},
{
  img: pp2,
  name: "Marina Ganic",
  text: "Am Umzugstag war das Team pünktlich und einsatzbereit. Sie waren professionell und effizient. Sie gingen sehr sorgfältig mit meinen Sachen um und verfügten auch über die gesamte notwendige Ausrüstung, um große und schwere Gegenstände zu transportieren",
},
{
  img: pp1,
  name: "Patricia S.",
  text: "Erstens verlief der Buchungsvorgang reibungslos. Ich konnte problemlos ein Angebot anfordern und meinen Umzug planen. Das Angebot, das ich erhielt, war sehr günstig und es gab keine versteckten Gebühren oder Überraschungen am Tag des Umzugs.",
},
{
  img: pp4,
  name: "Mario Zubčić",
  text: "Der Umgang mit zerbrechlichen Gegenständen hat mich beeindruckt. Sie haben sie sorgfältig verpackt und dafür gesorgt, dass sie während des Transports sicher waren. Alle meine Sachen kamen unversehrt in meinem neuen Zuhause an.",
}
]

let persons = mess.map((person)=>{
  return (
  <div className='review'>
    <div className='row'>
      <img height={70} src={person.img} alt="" />
      <div className="col">
      <h4>{person.name}</h4>
      <div>
      <IoIosStar fill='gold' />
      <IoIosStar fill='gold' />
      <IoIosStar fill='gold' />
      <IoIosStar fill='gold' />
      <IoIosStar fill='gold' />
      </div>
      </div>
    </div>
  <p>{person.text}</p>
  </div>
  )
})

function Review() {
  return (
    <div className='review-section'>
      {...persons}
    </div>
  )
}

export default Review
