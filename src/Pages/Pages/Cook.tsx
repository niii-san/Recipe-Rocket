import React from 'react'
import { useParams } from 'react-router-dom'

function Cook() {
    const {meal} = useParams();
  return (
    <div>{meal}</div>
  )
}

export default Cook