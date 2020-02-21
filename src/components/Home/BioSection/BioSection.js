import React from 'react'

const BioSection = props => {
  return (
    <div>
      <div>
        <h2>{props.heading}</h2>
        <div>{props.children}</div>
      </div>
      <div>
        <img src={props.img} alt="" />
      </div>
    </div>
  )
}

export default BioSection
