import React from 'react'
import { Current, ItemWork, JoinApplication, JoinHeader, JoinService, Start } from '../../containers/index'
import { Connect, Gallery } from '../../components/index'

const Join = () => {
  return (
    <div>
      <JoinHeader/>
      <Start />
      <JoinService />
      <Gallery />
      <ItemWork/>
      <Current />
      <JoinApplication />
      <Connect/>
    </div>
  )
}

export default Join
