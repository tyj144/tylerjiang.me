import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Tyler Jiang`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
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
