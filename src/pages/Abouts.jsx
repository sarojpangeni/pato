import React from 'react'
import AboutBanner from '../navPages/Aboutpage/AboutBanner'
import Story from '../navPages/Aboutpage/Story'
import Recipe1 from '../navPages/Aboutpage/Recipe1'
import Email from "../navPages/Homepage/Email"
import Chef from '../navPages/Aboutpage/chef'
import Video from '../navPages/Aboutpage/video'

function Abouts() {
  return (
    <div>
      <AboutBanner />
      <Story />
      <Video />
      <Recipe1 />
      <Chef />
      <Email />
    </div>
  )
}

export default Abouts