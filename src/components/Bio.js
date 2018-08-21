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
        <p>
          Written by <strong>Tyler Jiang</strong> who is from New Hampshire and is currently studying at Brown University.{' '}
          <a href="https://tylerjiang.me/">Find out more</a> about him.
        </p>
      </div>
    )
  }
}

export default Bio
