"use client"

import React from 'react'
import ServerComp from './server-comp'

const ClientComp = () => {
    console.log("bu bir client comp")
  return (
    <div>ClientComp
        <ServerComp/>
    </div>
  )
}

export default ClientComp