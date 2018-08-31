import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../images/profile-pic.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          padding: '1rem 0'
        }}
      >
        <img
          src={profilePic}
          alt="Tyler Jiang"
          style={{
            // width: '50px',
            height: '50px',
            marginRight: '25px',
            marginBottom: 0,
            borderRadius: `50%`,
          }}
        />
        <p style={{margin:0}}>
          Written by <strong>Tyler Jiang</strong>, a sophomore at Brown University from New Hampshire.
        </p>
      </div>
    )
  }
}

export default Bio
