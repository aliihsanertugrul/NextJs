"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from 'react-bootstrap'

const CancelButton = ({title="Cancel"}) => {
  const router=useRouter();
  return (
    <Button type='button' variant='secondary' onClick={()=>router.back()}>{title}</Button>
  )
}

export default CancelButton;