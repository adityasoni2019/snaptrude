import '../src/Body.css'
import React from 'react'
import MapComponent from './MapComponent'
import { useState } from 'react'
import SceneWithSpinningBoxes from './Cuboid'
// import Cuboid2 from './Cuboid2'

const Body = () => {

  return (
    <div className='Body' >
      <MapComponent/>

    </div>
  )
}

export default Body;