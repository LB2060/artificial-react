import React from 'react'
import Intro from '../components/Intro'
import Companies from '../components/Companies'
import LearnMore from '../components/LearnMore'
import Awards from '../components/Awards'
import Clients from '../components/Clients'

const Home: React.FC= () => {
  return (
    <>
     <Intro/>
     <Companies/>
     <LearnMore/>
     <Awards/>
     <Clients/>


    </>
  )
}

export default Home